import express from "express";
const Router = express.Router();
import { signIn, register } from '../controllers/authController.js';

Router.post("/signin", signIn);
Router.post("/register", register);

export default Router;
