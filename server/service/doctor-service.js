const { User, Doctor } = require("../models/models")


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

    async updateDoctor(id, name, position, data, file) {
        const beforeData = await Doctor.findOne({ where: { id } })
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
            file = beforeData.file
        }

        const doctorData = await Doctor.update(
            { name, position, data, file:  beforeData.file },
            { where: { id } }
        )
        return "Обновлено"
    }


}

module.exports = new DoctorService()