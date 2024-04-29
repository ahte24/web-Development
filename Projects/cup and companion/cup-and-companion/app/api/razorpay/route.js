import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/models/payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";

export const POST = async (req) => {
	await connectDB();
	let body = await req.formData();
	body = Object.fromEntries(body);

	// Check if the razorpay order_id is present on the server

	let p = await payment.findOne({ oid: body.razorpay_order_id });
	if (!p) {
		return NextResponse.json({
			success: false,
			message: "Order id not found",
		});
	}
	let x = validatePaymentVerification(
		{
			order_id: body.razorpay_order_id,
			payment_id: body.razorpay_payment_id,
		},
		body.razorpay_signature,
		process.env.KEY_SECRET
	);

	if (x) {
		const updatedPayment = await payment.findOneAndUpdate(
			{ oid: body.razorpay_order_id },
			{ done: true },
			{ new: true }
		);
		return NextResponse.redirect(
			`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
		);
	} else {
		return NextResponse.json({
			success: false,
			message: "Payment verification failed",
		});
	}
};
