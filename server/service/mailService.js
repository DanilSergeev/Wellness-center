// import { createTransport } from "nodemailer";

// class MailService {
//   constructor() {
//     this.transporter = createTransport({
//       host: process.env.REACT_APP_MAIL_HOST,
//       port: process.env.REACT_APP_MAIL_PORT,
//       secure: false,
//       auth: {
//         user: process.env.REACT_APP_MAIL_USER,
//         pass: process.env.REACT_APP_MAIL_PASSWORD,
//       },
//     });
//   }
//   async sendMail(name, email, text = "Нет текста") {
//     await this.transporter.sendMail({
//       from: process.env.REACT_APP_MAIL_USER,
//       to: process.env.REACT_APP_MAIL_USER,
//       subject: "Сообщение",
//       text: `\nИмя пользователя - ${name}\nОт ${email}` + text,
//     });
//   }
// }
// const mailService = new MailService()
// export default mailService




// REACT_APP_MAIL_HOST = 
// REACT_APP_MAIL_PORT = 
// REACT_APP_MAIL_USER = sendermessagewellnesscenter
// REACT_APP_MAIL_PASSWORD = y2EPUf4N