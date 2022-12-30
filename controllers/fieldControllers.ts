import httpStatus from "http-status";

import { Field } from "@models";
import * as Utils from "@utils";

const createField = Utils.CatchAsync.default(async (req, res) => { 
    const field = await Field.FieldSchema.create(req.body);
    return res.status(httpStatus.CREATED).json({
        status: "success",
        data: {
        field,
        },
    });
})

const deleateField = Utils.CatchAsync.default(async (req, res) => {
  let field;
  field = await Field.FieldSchema.findById(req.params.id);
  if (!field) {
    return res.status(httpStatus.NOT_FOUND).json({
      data: {
        message: "Field not found",
      },
    });
  }
  await field.delete();
  return res.status(httpStatus.OK).json({
    status: "success",
  });
});


const updateField = Utils.CatchAsync.default(async (req, res) => {
  let field;
  field = await Field.FieldSchema.findById(req.params.id);
  if (!field) {
    return res.status(httpStatus.NOT_FOUND).json({
      data: {
        message: "Field not found",
      },
    });
  }
  Object.assign(field, req.body);
  await field.save();
  return res.status(httpStatus.OK).json({
    status: "success",
    data: {
      field,
    },
  });
});

export { createField, deleateField, updateField };