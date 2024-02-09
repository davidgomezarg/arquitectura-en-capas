import {Router} from "express"
import { uploader } from "../utils.js";
import {UserController} from "../controller/users.controller.js"

const router = Router();


router.get("/",UserController.getUsers)

router.get("/:uid",UserController.getUserByID)

router.post("/",uploader.single("thumbnail"),UserController.newUser)

router.delete("/:uid",UserController.deleteUser)

router.put("/:uid",UserController.updateUser)

export default router