require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require("./db")
const models = require("./models/models.js")
const router = require('./router/index')
const fileupload = require("express-fileupload")
const path = require("path")

const errorMiddleware = require('./middlware/error-middlware');

const PORT = process.env.PORT || 5000;
const app = express()


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(express.static(path.resolve(__dirname,"static")))
app.use(fileupload({}))


app.use(errorMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
