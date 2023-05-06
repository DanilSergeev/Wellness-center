const doctorService = require("../service/doctor-service")

class DoctorController {
    async getDoctors(req, res, next) {
        try {
            const doctorData = await doctorService.getDoctors()
            res.json(doctorData)
        } catch (error) {
            next(error)
        }
    }

    async getDoctor(req, res, next) {
        try {
            const { id } = req.params
            const doctorData = await doctorService.getDoctor(id)
            res.json(doctorData)
        } catch (error) {
            next(error)
        }
    }

    async getDoctorByUserID(req, res, next) {
        try {
            const { userId } = req.params
            const doctorData = await doctorService.getDoctorByUserID(userId)
            res.json(doctorData)
        } catch (error) {
            next(error)
        }
    }


    async updateDoctor(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.BadRequest("ID не передан"))
            }
            const {position, data, name} = req.body
            let file = null
            if(req.files){
                file = req.files.file
            }

            const doctorData = await doctorService.updateDoctor(id, name, position, data, file)
            res.json(doctorData)
        } catch (error) {
            next(error)
        }
    }

}
module.exports = new DoctorController()
