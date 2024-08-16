const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter user name"]
        },
        email: {
            type: String,
            required: [true, "Please enter user email"]
        },
        password: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            min: 0,
            max: 120
        },
        isAdmin: {
            type: Boolean,
            required: false,
            default: false
          }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema)

module.exports = User