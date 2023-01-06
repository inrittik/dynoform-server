import httpStatus from "http-status";
import { Types } from "mongoose";

import { Field } from "@models";
import { FieldServices } from "@services";
import * as Utils from "@utils";

const createField = Utils.CatchAsync.default(async (req, res) => {
  const field = await Field.FieldSchema.create(req.body);
  const form = await FieldServices.addField(field._id, field.formId);
  return res.status(httpStatus.CREATED).json({
    status: "success",
    data: {
      field,
      form
    },
  });
});

const deleteField = Utils.CatchAsync.default(async (req, res) => {
  const fieldId = new Types.ObjectId(req.params.id);
  await FieldServices.removeField(fieldId);
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

export { createField, deleteField, updateField };
