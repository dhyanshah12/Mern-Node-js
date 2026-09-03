const mailer = require("nodemailer");
require("dotenv").config();

const mailsend = async (to, subject, html) => {
    try {
        const transport = mailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: to,
            subject: subject,
            html: html,

            attachments: [
                {
                    filename: "attach.jpg",
                    path: "C:/Users/shah_/Downloads/attach.jpg"
                }
            ]
        };

        const mailresponse = await transport.sendMail(mailOptions);

        console.log("Mail sent successfully");
        console.log(mailresponse);

    } catch (error) {
        console.log(error);
    }
};

module.exports = mailsend;