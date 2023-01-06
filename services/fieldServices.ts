import httpStatus from "http-status";

import * as Models from "@models";
import * as Utils from "@utils";

const removeField = async (fieldId: string) => {
  try {
    let field = await Models.Field.FieldSchema.findById(fieldId);
    if (!field) {
      throw new Utils.ApiError.default(httpStatus.NOT_FOUND, "Field not found");
    }
    let formId = field.formId;
    if (!formId) {
      throw new Utils.ApiError.default(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Field not associated to any Form"
      );
    }
    let form = await Models.Form.FormSchema.findById(formId);
    if (!form) {
      throw new Utils.ApiError.default(
        httpStatus.BAD_REQUEST,
        "Form associated to this field doesn't exist"
      );
    }
    await field.deleteOne({ _id: fieldId });
  } catch (err) {
    throw new Utils.ApiError.default(
      httpStatus.INTERNAL_SERVER_ERROR,
      err instanceof Error ? err.message : "Internal Server Error"
    );
  }
};

export { removeField };
