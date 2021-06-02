import { readFileSync } from "fs";
import * as nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { compile } from "handlebars";
import { timeStamp } from "console";

const HOST = process.env.EMAIL_HOST as string;
const PORT = parseInt(process.env.EMAIL_PORT as string);
const USER = process.env.EMAIL_FROM as string;
const PASS = process.env.EMAIL_PASSWORD as string;

class EmailService {
    private getTransporter(): Mail {
        return nodemailer.createTransport({
            host: HOST,
            port: PORT,
            auth: {
                user: USER,
                pass: PASS
            },
            tls: {
                ciphers: "SSLv3"
            },
            secureConnection: false,
            pool: false
        } as nodemailer.TransportOptions);
    }

    sendMessage(message: any) {
        const templateFile = readFileSync("./templates/welcome.html", "utf-8");
        const template = compile(templateFile)({
            text: message.text
        });

        const attachments = [
            {
                filename: "package.txt",
                path: "./package.json"
            }
        ]
        
        const options = {
            from:        USER,
            to:          message.to,
            subject:     message.subject,
            html:        template,
            attachments: attachments
        }

        const transporter = this.getTransporter();

        transporter.sendMail(options).then(() => {
            console.log("sent!");
        }).catch((error) => {
            console.log("error: ", error);
        });
    }

}

export default new EmailService();