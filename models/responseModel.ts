import { Schema, model } from "mongoose";
import { paginate, toJSON } from "./plugins";

const responseSchema = new Schema(
  {
    createdAt: Date,
    updatedAt: Date,
    body: Schema.Types.Mixed,
  },
  { strict: false }
);

responseSchema.plugin(paginate.default);
responseSchema.plugin(toJSON.default);

const Response = model("Response", responseSchema);

export { Response };
