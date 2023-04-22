import $api from "../http";

export default class DoctorService{
    static async getDoctors(){
        return $api.get("/doctors")
    }
    static async getDoctor(id){
        return $api.get(`/doctor/${id}`)
    }
    static async updateDoctor(id, formData){
        return $api.put(`/doctor/update/${id}`, formData)
        .then(res=>res.data)
    }
}