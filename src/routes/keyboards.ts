import { Router} from "express";
import { createkeyboard, deletekeyboard, getKeyboard,getKeyboards } from "../controllers/keyboard.controller";
const router = Router();

router.get('/',getKeyboards);
router.get('/:brand', getKeyboard);
router.post('/', createkeyboard);
router.delete('/:brand', deletekeyboard);
export {router};