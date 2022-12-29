import { Router } from "express";
import {userControllers} from "@controllers";

const router = Router();

router.get('/user/:id', userControllers.getUserById);
router.post('/user/create', userControllers.createUser);

export default router;