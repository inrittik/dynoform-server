import mongoose, { Schema, model } from "mongoose";
// import { paginate, toJSON } from "./plugins";

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
      ref: "Field",
    },
  ],
});

// formSchema.plugin(paginate.default);
// formSchema.plugin(toJSON.default);

formSchema.pre('deleteOne', function (next) {
  const formId = this.getQuery()["_id"];
  mongoose
    .model("Field")
    .deleteMany({ formId: formId }, function (err: any) {
      if (err) {
        console.log(`[error] ${err}`);
        next(err);
      } else {
        console.log("success");
        next();
      }
    });
})


const FormSchema = model("Form", formSchema);

export { FormSchema };
