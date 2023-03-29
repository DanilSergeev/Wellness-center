const sequelize = require("../db")
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
},{timestamps:false})

const Doctor = sequelize.define('doctor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    position: {type: DataTypes.STRING},
    data: {type: DataTypes.STRING},
},{timestamps:false})






Doctor.belongsTo(User, {
    foreignKey: 'userId',
    constraints: false,
    scope: {
      role: 'DOCTOR',
    },
  });


module.exports = {
    User,
    Doctor
}

