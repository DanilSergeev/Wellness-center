import $api from "../http";

export default class MailService {
    static async sendMassage(name, email, text) {
        return $api.post("/mail-send", { name, email, text })
            .then(res=>res.data)
    }
}