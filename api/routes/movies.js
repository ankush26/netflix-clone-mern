import express from "express";
import { createMovie, deleteMovie, getAllMovies, getOneMovie, getRandomMovies, updateMovie } from '../controllers/movies.js';

import verify from "../verifyToken.js";

const router = express.Router();

router.post("/", verify, createMovie);
router.put("/:id", verify, updateMovie);
router.delete("/:id", verify, deleteMovie);
router.get("/find/:id", verify, getOneMovie);
router.get("/", verify, getAllMovies);
router.get("/random", verify, getRandomMovies);

export default router;
