import mongoose, { Types } from "mongoose";

export interface FieldDoc extends mongoose.Document {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  options: [
    {
      name: string;
      value: string;
    }
  ];
  required: boolean;
  formId: Types.ObjectId;
}
