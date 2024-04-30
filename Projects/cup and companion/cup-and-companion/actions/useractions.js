"use server";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import User from "@/models/User";
import payment from "@/models/payment";

export const initiate = async (amount, to_username, paymentform) => {
	await connectDB();
	let user = await User.findOne({ username: to_username });
	const secret = user.razorpaySecret;
	const keyId = user.razorpayId;

	let instance = new Razorpay({
		key_id: keyId,
		key_secret: secret,
	});

	let options = {
		amount: Number.parseInt(amount),
		currency: "INR",
	};
	let x = await instance.orders.create(options);

	// create a payment object which shows a pending payment in the database

	await payment.create({
		oid: x.id,
		amount: amount / 100,
		to_user: to_username,
		name: paymentform.name,
		message: paymentform.message,
	});
	return x;
};

export const fetchuser = async (username) => {
	await connectDB();
	let u = await User.findOne({ username: username });
	let user = u ? u.toObject({ flattenObjectIds: true }) : null;
	return user;
};

export const fetchpayments = async (username) => {
	await connectDB();
	// Retrieve all payments sorted by decreasing order of amount and flatten object IDs
	const payments = await payment
		.find({ to_user: username, done: true })
		.sort({ amount: -1 })
		.limit(10)
		.lean(); // Use lean() to convert MongoDB documents to plain JavaScript objects

	// Manually convert _id to a simple value for each payment
	const simplifiedPayments = payments.map((payment) => {
		return {
			...payment,
			_id: payment._id.toString(), // Convert ObjectId to string
		};
	});
	return simplifiedPayments;
};

export const updateProfile = async (data, oldusername) => {
	await connectDB();
	let ndata = Object.fromEntries(data);
	// if the username is updated, check if username is avaleble or not
	if (oldusername !== ndata.username) {
		let u = await User.findOne({ username: ndata.username });
		if (u) {
			return { error: "Username already exists" };
		}
		await User.updateOne({ email: ndata.email }, ndata);
		await payment.updateMany(
			{ to_user: oldusername },
			{ to_user: ndata.username }
		);
	} else {
		await User.updateOne({ email: ndata.email }, ndata);
	}
};
