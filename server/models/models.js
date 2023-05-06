const sequelize = require("../db")
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING }
}, { timestamps: false })


const TokenSchema = sequelize.define('tokenSchema', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  refreshToken: { type: DataTypes.STRING },
}, { timestamps: false })

const Doctor = sequelize.define('doctor', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  position: { type: DataTypes.STRING },
  data: { type: DataTypes.STRING },
  file: { type: DataTypes.STRING, allowNull: false, defaultValue: "noimage.jpg" },
}, { timestamps: false })



TokenSchema.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: "cascade",
});


Doctor.belongsTo(User, {
  foreignKey: 'userId',
  constraints: false,
  onDelete: "cascade",
  scope: {
    role: 'DOCTOR',
  },
});


// User.addHook('beforeBulkUpdate', async (user) => {
//   const prevUser = user.previous('role');
//   const newUser = user.get('role');
//   if (prevUser !== 'DOCTOR' && newUser === 'DOCTOR') {
//     await Doctor.create({ userId: user.id });
//   }
// });


User.addHook('beforeBulkUpdate', async (user) => {
  console.log(user.attributes.role)
  if (user.attributes.role === 'DOCTOR') {
    const doctor = await Doctor.findOne({ where: { userId: user.where.id }});
    if (!doctor) {
      await Doctor.create({ userId: user.where.id });
    }
  }
});



User.addHook('afterCreate', async (user) => {
  if (user.role === 'DOCTOR') {
    const doctor = await Doctor.findOne({ where: { userId: user.id }});
    if (!doctor) {
      await Doctor.create({ userId: user.id });
    }
  }
});

module.exports = {
  User,
  TokenSchema,
  Doctor
}

