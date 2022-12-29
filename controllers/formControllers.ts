import httpStatus from "http-status";

import { Form } from "@models";
import { CatchAsync } from "utils/catchAsync";

const createForm = CatchAsync(async (req, res) => {
  const form = await Form.FormSchema.create(req.body);
  res.status(httpStatus.CREATED).json({
    status: "success",
    data: {
      form,
    },
  });
});

export { createForm };
