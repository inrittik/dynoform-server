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


const getForm = Utils.CatchAsync.default(async (req, res) => { 
  const form = await Form.FormSchema.findById(req.params.id);
  res.status(httpStatus.OK).json({
    status: "success",
    data: {
      form,
    },
  });
})


const updateForm = Utils.CatchAsync.default(async (req, res) => { 
  const form = await Form.FormSchema.findByIdAndUpdate(req.params.id);
  if (!form) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "fail",
      message: "No form found with that ID",
    })
  }

  res.status(httpStatus.OK).json({
    status: "success",
    data: {
      form,
    }
  })
})

const deleteForm = Utils.CatchAsync.default(async (req, res) => { 
  const form = await Form.FormSchema.findById(req.params.id);
  if (!form) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "fail",
      message: "No form found with that ID",
    });
  }
  await Form.FormSchema.deleteOne({ _id: req.params.id });
  res.status(httpStatus.OK).json({
    status: "success",
    data: null
  })
})

export { createForm, getForm, updateForm, deleteForm };
