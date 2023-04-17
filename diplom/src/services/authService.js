import $api from "../http";

export default class AuthService{
    static async login(email, password){
        return $api.post("/login", {email, password})
        .then(res=>res.data)
    }
    static async register(email, password, role = "USER"){
        return $api.post("/register", {email, password, role})
        .then(res=>res.data)
    }
    static async logout(){
        return $api.post("/logout")
        .then(res=>res.data)
    }
}