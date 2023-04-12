const { createTransport } = require("nodemailer");

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
      html: `
      <div>
        <h1>Сообщение</h1>
        <p>Имя пользователя: ${name}</p>
        <p>От: ${email}</p>
        <hr />
        <p>${text}</p>
      </div>
      `,
      // text: `\nИмя пользователя - ${name}\nОт ${email}` + text,
    });
    return { status: 200 }
  }
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.MAIL_USER,
      to,
      subject: "Подтвердите почту",
      html: `
      <div>
        <h1>Подтвердите почту</h1>
        <a href="${link}">${link}</a>
      </div>
      `
    })
  }

}
module.exports = new MailService()
