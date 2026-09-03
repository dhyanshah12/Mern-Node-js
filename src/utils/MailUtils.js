const mailer = require("nodemailer")
require("dotenv").config()  

const mailsend = async( to,subject,html)=>{

    const transport = mailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })
    const mailOptions={
        from:process.env.EMAIL,
        to:to,
        subject:subject,
        html:"<h1>Hello Yop</h1>",

         attachments: [
                {
                    filename: "attach.jpg",
                    path: "./src/utils/attach.jpg",
                }
            ]
    }
    
        
    const mailresponse = await transport.sendMail(mailOptions)
    console.log(mailresponse);
}
module.exports = mailsend