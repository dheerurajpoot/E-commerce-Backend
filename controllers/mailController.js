import nodemailer from "nodemailer";

export const sendMail = async (data, req, res) => {
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false, // Use `true` for port 465, `false` for all other ports
		auth: {
			user: process.env.MAIL_ID,
			pass: process.env.MAIL_PASS,
		},
	});

	// send mail with defined transport object
	const info = await transporter.sendMail({
		from: '"Hey 👻" <drexpress90@gmail.com>', // sender address
		to: data.to,
		subject: data.subject,
		text: data.text,
		html: data.htm,
	});

	console.log("Message sent: %s", info.messageId);
	// Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
