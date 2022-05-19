import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.oursoft.com.br",
    port: 587,
    auth: {
        user: "gabriel@oursoft.com.br",
        pass: "Joelm@08"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async SendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget<gabriel@oursoft.com.b>',
            to: 'Gabriel Costa<gabriel.cb@hotmail.com>',
            subject,
            html: body,
        });
    }
    
}