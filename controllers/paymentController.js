import Razorpay from "razorpay";
import "dotenv/config";

const instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const checkout = async (req, res) => {
	const { amount } = req.body;
	try {
		const option = {
			amount: amount * 100,
			currency: "INR",
		};
		const order = await instance.orders.create(option);
		res.json({
			success: true,
			order,
		});
	} catch (error) {
		console.log(error);
	}
};

export const paymentVerification = async (req, res) => {
	const { razorpayOrderId, razorpayPaymentId } = req.body;
	res.json({
		razorpayOrderId,
		razorpayPaymentId,
	});
};
