import { Schema, model } from "mongoose";

const responseSchema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    body: Schema.Types.Mixed,
}, {strict: false});

const Response = model("Response", responseSchema);

module.exports = Response;
