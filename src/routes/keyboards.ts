import { Router} from "express";
import { createkeyboard, deletekeyboard, getKeyboard,getKeyboards } from "../controllers/keyboard.controller";
import { logMiddleware, otroMiddleware } from "../middleware/log";
import { checkJWT } from "../middleware/login.middleware";
const router = Router();

router.get('/',[logMiddleware,otroMiddleware],getKeyboards);
router.get('/:brand', getKeyboard);
router.post('/',checkJWT ,createkeyboard);
router.delete('/:brand', deletekeyboard);
export {router};