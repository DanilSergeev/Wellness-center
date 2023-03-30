import { createTransport } from "nodemailer";

class MailService {
  constructor() {
    this.transporter = createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }
  async sendMail(name, email, text = "Нет текста") {
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "Сообщение",
      text: `\nИмя пользователя - ${name}\nОт ${email}` + text,
    });
  }
  async sendActivationMail(to, link){
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject: "Подтвердите почту",
      html: `
      <div>
        <h1>Подтвердите почту</h1>
        <p>${link}</p>
      </div>
      `
    })
  }

}
const mailService = new MailService()
export default mailService



