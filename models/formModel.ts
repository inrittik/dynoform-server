import { Schema, model } from "mongoose";

const formSchema = new Schema({
  name: String,
  createdAt: Date,
  updatedAt: Date,
  createdBy: Schema.Types.ObjectId,
  updatedBy: Schema.Types.ObjectId,
  open: Boolean,
  fields: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

const FormSchema = model("Form", formSchema);

export { FormSchema };
