import { Router } from "express";
import { FormControllers } from "@controllers";

const router = Router();

router.get('/get/:id', FormControllers.getForm);
router.post('/create', FormControllers.createForm);
router.put('/update/:id', FormControllers.updateForm);
router.delete('/delete/:id', FormControllers.deleteForm);

export default router;