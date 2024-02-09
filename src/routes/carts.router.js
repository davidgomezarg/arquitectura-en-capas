import {Router} from "express"
import {CartsController} from "../controller/carts.controller.js"

const router = Router();

//const cartsController = new CartsController();


router.get("/",CartsController.getCarts)

//Se listara los productos de un carrito en especifico
router.get("/:cid",CartsController.getCartById)

//Se creará un nuevo carrito
router.post("/",CartsController.newCart)

//Se agregará un producto a un carrito existente.
router.post('/:cid/product/:pid', CartsController.addProduct)

router.delete('/:cid/product/:pid', CartsController.deleteProduct)

router.put('/:cid', CartsController.updateCart)

router.put('/:cid/product/:pid', CartsController.updateQuantity)

router.delete('/:cid', CartsController.deleteAllProducts)


export default router