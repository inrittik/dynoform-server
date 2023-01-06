import { Router } from "express";
import { FieldControllers } from "@controllers";

const router = Router();

// router.get('/form/:id', FormControllers.getFormById);
router.post("/create", FieldControllers.createField);
router.put("/update/:id", FieldControllers.updateField);
router.delete("/delete/:id", FieldControllers.deleteField);

export default router;
