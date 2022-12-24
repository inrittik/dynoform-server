import { Schema, model } from "mongoose";

const formSchema = new Schema({
    name: String,
    createdAt: Date,
    updatedAt: Date,
    createdBy: String,
    updatedBy: String,
    fields: [
        {
            type: Schema.Types.ObjectId,
        }
    ],
})

const FormSchema = model("Form", formSchema);

module.exports = FormSchema;