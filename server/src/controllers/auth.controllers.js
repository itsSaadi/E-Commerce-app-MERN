import { UsersModel } from "../models/users.models.js";
import nodemailer from 'nodemailer'


export const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body
        const user = await UsersModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'User Not exists' });
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'saadcode796@gmail.com',
                pass: 'srof yiko wuty zwct'
            }
        });

        var mailOptions = {
            from: 'saadcode796@gmail.com',
            to: email,
            subject: 'Password reset link',
            text: `http://localhost:5173/reset-password`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.send(user)
    } catch (error) {
        console.log(`Error`, error)
    }

}

