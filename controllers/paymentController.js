import Razorpay from "razorpay";
const instance = new Razorpay({
	key_id: "rzp_test_SdOG1CYzMFFNZi",
	key_secret: "77mEnrJSGpgRLCdPDEwmTnen",
});

export const checkout = async (req, res) => {
	try {
		const option = {
			amount: 150000,
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
