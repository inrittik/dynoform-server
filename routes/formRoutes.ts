import { Router } from "express";
import { FormControllers } from "@controllers";

const router = Router();

// router.get('/form/:id', FormControllers.getFormById);
router.post('/form/create', FormControllers.createForm);

export default router;