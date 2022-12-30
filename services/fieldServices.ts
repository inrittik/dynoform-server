import httpStatus from 'http-status';

import * as Models from '@models';
// import * as Interfaces from '@interfaces';
import * as Utils from '@utils';

const removeField = async (fieldId: string) => { 
    let field = await Models.Field.FieldSchema.findById(fieldId);
    if (!field) {
        throw new Utils.ApiError.default(httpStatus.NOT_FOUND, 'Field not found');
    }
    let formId = field.formId;
    let form = await Models.Form.FormSchema.findById(formId);
    if(!form) {
        throw new Utils.ApiError.default(httpStatus.BAD_REQUEST, 'Field not associated to any Form');
    }
    await field.delete();
    let fields = form.fields;

    fields = fields.filter((field) => field.toString() !== fieldId);
    await Models.Form.FormSchema.findByIdAndUpdate(formId, { fields: fields });
    return {
        data: {
            message: 'Field deleted successfully',
            form
        },
    }
}


export { removeField };