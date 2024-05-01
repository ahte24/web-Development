"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

const PaymentPage = ({ username }) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [paymentform, setPaymentform] = useState({
		name: "",
		message: "",
		amount: "",
	});
	const [currentUser, setCurrentUser] = useState({});
	const [payments, setPayments] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		if (searchParams.get("paymentdone") == "true") {
			toast.success("Thanks for your Contribution", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
		}
		router.push(`/${username}`);
	}, []);

	const handleChange = (e) => {
		setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
	};

	const getData = async () => {
		let u = await fetchuser(username);
		setCurrentUser(u);
		let dbPayments = await fetchpayments(username);
		setPayments(dbPayments);
	};

	const pay = async (amount) => {
		let a = await initiate(amount, username, paymentform);
		let orderId = a.id;
		var options = {
			key: currentUser.razorpayId, // Enter the Key ID generated from the Dashboard
			amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			currency: "INR",
			name: "Cup & Companion", //your business name
			description: "Test Transaction",
			image: "https://example.com/your_logo",
			order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
			prefill: {
				//We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
				name: "Gaurav Kumar", //your customer's name
				email: "gaurav.kumar@example.com",
				contact: "9000090000", //Provide the customer's phone number for better conversion rates
			},
			notes: {
				address: "Razorpay Corporate Office",
			},
			theme: {
				color: "#3399cc",
			},
		};
		var rzp1 = new Razorpay(options);
		rzp1.open();
	};

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				Bounce="true"
			/>
			<ToastContainer />
			<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

			<div className="cover w-full md:h-96 relative h-48">
				<img
					className="w-full object-cover md:h-96  h-48"
					src={currentUser.coverpicture}
				/>
				<div className="absolute left-1/2 md:bottom-[-180px] bottom-[-116px] transform -translate-x-1/2 -translate-y-1/2">
					<div className="border-2 rounded-full md:w-44 w-28 border-slate-400">
						<img src={currentUser.profilepic} className="rounded-full" alt="" />
					</div>
				</div>
			</div>
			<div className="info flex-col flex justify-center items-center mt-28 gap-3 ">
				<div className="font-semibold text-lg">@{username}</div>
				<div className="text-gray-400 text-sm w-[80%] text-center">
					Join Us for a Sip of Innovation: Let's Create Together Over Coffee!
				</div>
				<div className="text-gray-400 text-sm text-center w-[80%]">
					The community has contributed ₹
					{payments.reduce((a, b) => a + b.amount, 0)} through {payments.length}{" "}
					payments.
				</div>
				<div className="payments  flex-col lg:flex-row flex p-10 2xl:w-[80%] mx-auto gap-10 justify-center">
					<div className="contributers bg-slate-900 rounded-lg p-4 flex flex-col  lg:w-1/2 min-h-72">
						<h2 className=" text-center font-bold text-lg mb-4">
							Top 10 Contributor's
						</h2>
						<ul className="text-sm flex gap-3 flex-col overflow-y-auto h-80 border rounded-lg border-gray-400 p-2">
							{payments.length == 0 && (
								<li className="flex items-center my2 gap-3  p-2 rounded-lg">
									No payments yet
								</li>
							)}
							{payments.map((p, i) => {
								return (
									<li
										key={p._id}
										className="flex items-center my2 gap-3 border border-slate-600 p-2 rounded-lg"
									>
										<img width={20} src="./avatar.gif" alt="" />
										<span className="md:text-md">
											{p.name} donated{" "}
											<span className="font-bold">₹{p.amount}</span> with a
											message "{p.message}"
										</span>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="makePayments bg-slate-900 rounded-lg p-4 flex flex-col  lg:w-1/2 min-h-72">
						<h2 className=" text-center font-bold text-lg mb-4">
							Make Payments
						</h2>
						<div className="flex flex-col gap-5">
							<input
								name="name"
								onChange={handleChange}
								value={paymentform.name}
								type="text"
								className="w-full p-3 rounded-lg bg-slate-800"
								placeholder="Enter Name"
							/>
							<input
								name="message"
								onChange={handleChange}
								value={paymentform.message}
								type="text"
								className="w-full p-3 rounded-lg bg-slate-800"
								placeholder="Enter Message"
							/>
							<input
								name="amount"
								onChange={handleChange}
								value={paymentform.amount}
								type="text"
								className="w-full p-3 rounded-lg bg-slate-800"
								placeholder="Enter Amount"
							/>
							<div className="flex gap-2 ">
								<button
									disabled={
										paymentform.name?.length < 3 ||
										paymentform.message?.length < 4
									}
									className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] disabled:ring-0 focus:outline-none focus:ring-2 disabled:bg-slate-500 focus:ring-offset-slate-50"
									onClick={() => pay(50000)}
								>
									<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
									<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
										Pay ₹500
									</span>
								</button>
								<button
									disabled={
										paymentform.name?.length < 3 ||
										paymentform.message?.length < 4
									}
									className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] disabled:ring-0 focus:outline-none focus:ring-2  focus:ring-offset-slate-50"
									onClick={() => pay(100000)}
								>
									<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
									<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
										Pay ₹1000
									</span>
								</button>
								<button
									disabled={
										paymentform.name?.length < 3 ||
										paymentform.message?.length < 4
									}
									className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] disabled:ring-0 focus:outline-none focus:ring-2  focus:ring-offset-slate-50"
									onClick={() => pay(150000)}
								>
									<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
									<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
										Pay ₹1500
									</span>
								</button>
							</div>
							<div className="flex justify-center">
								<button
									disabled={
										paymentform.name?.length < 3 ||
										paymentform.message?.length < 4 ||
										paymentform.amount?.length == 0
									}
									className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] disabled:ring-0 focus:outline-none focus:ring-2 focus:ring-offset-slate-50"
									onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
								>
									<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
									<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg disabled:bg-slate-200 bg-slate-950  px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
										Pay
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default PaymentPage;
