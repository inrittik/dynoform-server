import httpStatus from "http-status";
import { Types } from "mongoose";

import * as Models from "@models";
import * as Utils from "@utils";


const addField = async (fieldId: Types.ObjectId, formId: Types.ObjectId) => {
  try {
    const form = await Models.Form.FormSchema.findById(formId);
    if (!form) {
      throw new Utils.ApiError.default(
        httpStatus.BAD_REQUEST,
        "Form associated to this field doesn't exist"
      );
    }
    form.fields.push(fieldId);
    await form.save();
    return {
      form
    }
  } catch (err) {
    throw new Utils.ApiError.default(
      httpStatus.INTERNAL_SERVER_ERROR,
      err instanceof Error ? err.message : "Internal Server Error"
    );
  }
};


const removeField = async (fieldId: Types.ObjectId) => { 
  try {
    const field = await Models.Field.FieldSchema.findById(fieldId);
    if (!field) {
      throw new Utils.ApiError.default(
        httpStatus.BAD_REQUEST,
        "Field doesn't exist"
      );
    }
    await Models.Form.FormSchema.updateOne(
      { _id: field.formId },
      { $pull: { fields: fieldId } }
    )
  }
  catch (err) {
    throw new Utils.ApiError.default(
      httpStatus.INTERNAL_SERVER_ERROR,
      err instanceof Error ? err.message : "Internal Server Error"
    );
  }
}

export { removeField, addField };
