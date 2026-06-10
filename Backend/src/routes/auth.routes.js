import {Router } from "express";
import{ register , Getme , Login , Logout , ResetPassword } from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post('/register' , register )

authRouter.get('/get-me' , Getme )

authRouter.post('/Login' , Login)

authRouter.post("/logout", Logout)

authRouter.post("/reset-password", ResetPassword)

export default authRouter;