import express from "express";
import {updateUser, deleteUser, getOneUser, getAllUser, getUserStats} from '../controllers/users.js';

import verify from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verify, updateUser);
router.delete("/:id", verify, deleteUser);
router.get("/find/:id", getOneUser);
router.get("/", verify, getAllUser);
router.get("/stats", getUserStats);

export default router;
