const mailService = require("../service/mail-service")
const { validationResult } = require("express-validator")
const ApiError = require("../exceptions/api-error")

class MailController {
    async mailSend(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest("Ошибка при валидации", errors.array()))
            }
            const { name, email, text } = req.body
            const answer = await mailService.sendMail(name, email, text)
            res.json(answer)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new MailController()