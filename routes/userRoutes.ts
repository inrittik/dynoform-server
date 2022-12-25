import { Router } from "express";
const {userControllers} = require('../controllers/user')

const router = Router();

router.get('/user/:id', userControllers.getUserById);
router.post('/user/create', userControllers.createUser);