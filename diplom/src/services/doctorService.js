import $api from "../http";

export default class DoctorService{
    static async getDoctors(){
        return $api.get("/doctors")
    }
    static async getDoctor(id){
        return $api.get(`/doctor/update/${id}`)
    }
    static async updateDoctor(id){// body
        return $api.put(`/doctor/${id}`)
    }
}