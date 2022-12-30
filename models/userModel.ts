import { Schema, model } from "mongoose";
import { paginate, toJSON } from "./plugins";

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
    },
  ],
});

userSchema.plugin(paginate.default);
userSchema.plugin(toJSON.default);

const User = model("User", userSchema);

export default User;
