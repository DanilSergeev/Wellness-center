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
            where: { userId: id },
            include: {
                model: User,
                where: { role: 'DOCTOR' },
                attributes: ['email', 'role']
            },
        })
        return doctorData
    }

    async updateDoctor(id, position, data, file) {
        const beforeData = await Doctor.findOne({ where: { userId: id } })
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
            { position, data, file },
            { where: { userId: id } }
        )

        return doctorData
    }


}

module.exports = new DoctorService()