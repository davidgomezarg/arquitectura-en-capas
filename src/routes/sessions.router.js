import {Router} from "express"
import passport from "passport";
import {SessionsController} from "../controller/sessions.controller.js"

const router = Router();

router.post("/register",passport.authenticate("register",{failureRedirect:"/api/sessions/failregister"}),SessionsController.register)

router.get("/failregister",SessionsController.failregister)

router.post("/login", passport.authenticate("login", {failureRedirect:'/api/session/faillogin'}),SessionsController.login)

router.get("/faillogin",SessionsController.faillogin)

router.get("/current",SessionsController.current)
router.get("/logout",SessionsController.logout)

router.get("/github",passport.authenticate("github",{scope:["user:email"]}),async(req,res)=>{})
router.get("/githubcallback",passport.authenticate("github",{failureRedirect:"/login"}),SessionsController.githubcallback)

export default router