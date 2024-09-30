import $api from "../http";

export default class UserService{
    static async getUsers(){
        return $api.get("/users")
    }
    static async getUser(id){
        return $api.get(`/user/${id}`)
    }
    static async updateUser(id, role){
        return $api.put(`/user/update/${id}`, {role})
        .then(res=>res.data)
    }
}