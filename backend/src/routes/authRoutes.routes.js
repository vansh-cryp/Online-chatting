import express from "express";
import {protectRoute}from "../middleware/protectRoute.middleware.js"
import {signup,login,logout,updateProfile} from "../controllers/auth.controller.js"
import {checkAuth}from "../controllers/auth.controller.js";
const router = express.Router();


router.post("/signup",signup);


router.post("/login",login);


router.post("/logout",logout);
//if authenticated the update the profile it is a middleware
router.put("/update-profile",protectRoute,updateProfile);
//check is used if we refresh our page
router.get("/check",protectRoute,checkAuth);
export default router;