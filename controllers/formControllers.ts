import httpStatus from "http-status";

import { Form } from "@models";
import * as Utils from "@utils";

const createForm = Utils.CatchAsync.default(async (req, res) => {
  const form = await Form.FormSchema.create(req.body);
  res.status(httpStatus.CREATED).json({
    status: "success",
    data: {
      form,
    },
  });
});

export { createForm };
