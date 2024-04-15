import { Router} from "express";
import { createkeyboard, deletekeyboard, getKeyboard,getKeyboards } from "../controllers/keyboard.controller";
import { logMiddleware, otroMiddleware } from "../middleware/log";
const router = Router();

router.get('/',[logMiddleware,otroMiddleware],getKeyboards);
router.get('/:brand', getKeyboard);
router.post('/', createkeyboard);
router.delete('/:brand', deletekeyboard);
export {router};