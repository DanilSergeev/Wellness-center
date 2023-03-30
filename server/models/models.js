const sequelize = require("../db")
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activationLink: {type: DataTypes.STRING}
  },{timestamps:false})
  // acticationLink


  const Doctor = sequelize.define('doctor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    position: {type: DataTypes.STRING},
    data: {type: DataTypes.STRING},
    file: { type: DataTypes.STRING, allowNull: false, defaultValue: "noimage.jpg" },
},{timestamps:false})






Doctor.belongsTo(User, {
    foreignKey: 'userId',
    constraints: false,
    onDelete: "cascade",
    scope: {
      role: 'DOCTOR',
    },
  });


module.exports = {
    User,
    Doctor
}

