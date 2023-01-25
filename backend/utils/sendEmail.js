import nodemailer from "nodemailer";

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      service: process.env.NODEMAILER_SERVICE,
      port: Number(process.env.NODEMAILER_PORT),
      secure: Boolean(process.env.NODEMAILER_IS_SECURE),

      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.NODEMAILER_FROM_USER,
      to: email,
      subject: subject,
      text: text,
      html: "<b>Hello world?</b>",
    });
    console.log({
      success: true,
      message: "Email Send Successfully",
    });
  } catch (error) {
    console.log({
      success: false,
      message: "Email Not Send",
      error: error,
    });
  }
};

export default sendEmail;
