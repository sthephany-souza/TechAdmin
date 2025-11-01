// importação
import express, { application } from "express";

import {cadastro, login, excluir} from "../controllers/authController.js";
import checkToken from "../middleware/checkToken.js";

const router = express.Router();

router.post("/register", cadastro);
router.post("/login", login);

router.delete("/delete", express.json(), checkToken, excluir);

export default router;