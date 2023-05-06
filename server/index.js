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


app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(fileupload({}))
app.use(cookieParser());
app.use('/api', router);
app.use(express.static(path.resolve(__dirname,"static")))

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
