import { Router } from "express";
import { registerUserController,loginUserController } from "../controllers/user.controller";

const router=Router();

router.post('/register',registerUserController);
router.post('/login', loginUserController);
export {router};