import { Router } from "express";
import { registerUser , loginUser} from "../controllers/userControl.js";



const userRouter = Router();

// Post Routes
userRouter.route("/register").post(registerUser);       //For register the user
userRouter.route("/login").post(loginUser);             //login in app

export default userRouter;