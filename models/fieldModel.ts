import { Schema, model } from "mongoose";

const fieldSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      enum: [
        "text",
        "number",
        "email",
        "password",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
        "url",
        "tel",
        "color",
        "radio",
        "checkbox",
        "select",
        "textarea",
        "file",
        "hidden",
        "image",
        "range",
        "search",
      ],
      default: "text",
    },
    options: [
      {
        name: {
          type: String,
          default: null,
        },
        value: {
          type: String,
          default: null,
        },
      },
    ],
    required: Boolean,
    formId: Schema.Types.ObjectId,
  },
  { strict: false }
);

const FieldSchema = model("Field", fieldSchema);

export { FieldSchema };
