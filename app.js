const express = require("express")
const mongoose = require('mongoose');
const app = express()
const User = require("./models/user.model.js")
const userRoute = require("./route/user.route.js")
require('dotenv').config()


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//routes
app.use('/api/users', userRoute)


//monogoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on ${process.env.PORT}`)
        })
        console.log('MongoDB Connected!')
    })
    .catch(() => console.log("Error in connection"))