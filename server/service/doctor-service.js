const { User, Doctor } = require("../models/models")
const uuid = require("uuid")
const path = require("path");


class DoctorService {
    async getDoctors() {
        const doctorData = await Doctor.findAll({
            include: {
                model: User,
                where: { role: 'DOCTOR' },
                attributes: ['email', 'role']
            },
        })
        return doctorData
    }
    async getDoctor(id) {
        const doctorData = await Doctor.findOne({
            where: { id },
            include: {
                model: User,
                where: { role: 'DOCTOR' },
                attributes: ['email', 'role']
            },
        })
        return doctorData
    }

    

        async getDoctorByUserID(userId) {
        const doctorData = await Doctor.findOne({
            where: { userId },
            include: {
                model: User,
                where: { role: 'DOCTOR' },
                attributes: ['email', 'role']
            },
        })
        return doctorData
    }



    async updateDoctor(id, name, position, data, file) {
        const beforeData = await Doctor.findOne({ where: { id } })
        let fileName = ""
        if (!name) {
            name = beforeData.name
        }
        if (!position) {
            position = beforeData.position
        }
        if (!data) {
            data = beforeData.data
        }
        if (!file) {
            fileName = beforeData.file
        }else{
            fileName = uuid.v4() + ".jpg"
            file.mv(path.resolve(__dirname, "..", "static", fileName))
        }

        await Doctor.update(
            { name, position, data, file: fileName },
            { where: { id } }
        )
        return "Обновлено"
    }


}

module.exports = new DoctorService()