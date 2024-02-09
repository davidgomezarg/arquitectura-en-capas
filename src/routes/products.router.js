import {Router} from "express"
import { uploader } from "../utils.js";
import {ProductsController} from "../controller/products.controller.js"

const router = Router();

router.get("/",ProductsController.getProducts)

router.get("/:pid",ProductsController.getProductByID)

router.post("/",uploader.single("thumbnail"),ProductsController.addProduct)

router.delete("/:pid",ProductsController.deleteProduct)

router.put("/:pid",ProductsController.updateProduct)

export default router