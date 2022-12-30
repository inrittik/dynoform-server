import { Schema, model } from "mongoose";
import { paginate, toJSON } from "./plugins";

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

formSchema.plugin(paginate.default);
formSchema.plugin(toJSON.default);

const FormSchema = model("Form", formSchema);

export { FormSchema };
