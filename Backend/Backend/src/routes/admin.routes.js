import express from "express";
import { getAllUsers } from "../controllers/admin.controllers.js";

const adminRouter = express.Router();


adminRouter.get("/users", getAllUsers);


export default adminRouter;