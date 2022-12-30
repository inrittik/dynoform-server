import httpStatus from "http-status";

import { User } from "@models";
import * as Utils from "@utils";

const createUser = Utils.CatchAsync.default(async (req, res) => {
  const user = await User.default.create(req.body);
  res.status(httpStatus.CREATED).json({
    status: "success",
    data: {
      user,
    },
  });
});

const getUserById = Utils.CatchAsync.default(async (req, res) => {
  const user = await User.default.findById(req.params.id);
  res.status(httpStatus.OK).json({
    status: "success",
    data: {
      user,
    },
  });
});

export { createUser, getUserById };
