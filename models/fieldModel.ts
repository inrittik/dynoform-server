import mongoose,{ Schema, model } from "mongoose";
// import { paginate, toJSON } from "./plugins";

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
    formId: {
      type: Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    }
  },
  { strict: false }
);

// fieldSchema.plugin(paginate.default);
// fieldSchema.plugin(toJSON.default);


fieldSchema.pre("deleteOne", function (next) { 
  const formId = this.getQuery()["formId"];
  mongoose
    .model("Form")
    .updateOne(
      { _id: formId },
      { $pull: { fields: this.getQuery()["_id"] } },
  )
  next();
})

const FieldSchema = model("Field", fieldSchema);

export { FieldSchema };
