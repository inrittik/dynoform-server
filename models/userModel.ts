import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    forms: [
        {
            type: Schema.Types.ObjectId,
        }
    ],
})

const User = model("User", userSchema);

module.exports = User;