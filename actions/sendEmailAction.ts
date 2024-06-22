"use server";
import nodemailer from 'nodemailer';

type Inputs = {
    clientname: string,
    clientemail: string,
    subject: string,
    message: string,
};

const user = process.env.GOOGLE_USER_EMAIL;
const pass = process.env.GOOGLE_USER_PASS;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user,
        pass,
    }
})

export default async function sendEmailAction(formData: Inputs) {
    try {
        await transporter.sendMail({
            from: user,
            to: user,
            subject: formData.subject,
            html: `
                <p>Name: ${formData?.clientname}</p>
                <p>Email: ${formData?.clientemail}</p>
                <p>Message: ${formData?.message}</p>
            `
        })
    } catch (error) {
        console.log(error);
    }
}

