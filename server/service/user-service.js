const {User} = require("../models/models")
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');


class UserService{
    async registration (email, password, role="USER"){
        try {
            const candidate = await User.findOne({email})
            if(candidate){
                throw new Error(`Пользователь с таким email существует - ${email}`)
            }
            const hashPassword = await bcrypt.hash(password, 3)
            const acticationLink = uuid.v4()  
            const user = await User.create({email, password: hashPassword, role, acticationLink})
            await mailService.sendActivationMail(email,acticationLink)

        } catch (error) {
            
        }
    }

    async login (){
        try {
            
        } catch (error) {
            
        }
    }

    async logout (){
        try {
            
        } catch (error) {
            
        }
    }

    async getUsers (){
        try {
            
        } catch (error) {
            
        }
    }
}


module.exports = new UserService()