const mailService = require("../service/mail-service")

class MailController {
    async mailSend(req, res, next) {
        try {
            const { name, email, text } = req.body
            const answer = await mailService.sendMail(name, email, text)
            return answer
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new MailController()