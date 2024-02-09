import CartManagerDB from "../dao/dbManagers/CartManagerDB.js";

const cartManagerDB = new CartManagerDB();

class CartsController {
    static getCarts = async(req,res)=>{
        const carts = await cartManagerDB.getCarts();
        res.send({
            status: "successs",
            message: carts
        })
    }

    static getCartById = async(req,res)=>{
        const cid= req.params.cid;
        const cart = await cartManagerDB.getCartsByID(cid);
        res.send({
            status: "success",
            message: cart
        })
    
    }

    static newCart = async(req,res)=>{

        const result = await cartManagerDB.createCart();
    
        res.send({
            status: "success",
            message: result
        })
    
    }

        static addProduct = async (req,res)=>{

            const cid= req.params.cid;
            const pid= req.params.pid;
            //const quantity=req.params.quantity;
            const quantity= 1
        
            const result = await cartManagerDB.addProductInCart(cid,pid,quantity)
        
            res.send({
                 status: "success",
                 message: result
            })
        }

        static deleteProduct = async (req,res)=>{

            const cid= req.params.cid;
            const pid= req.params.pid;
        
            const result = await cartManagerDB.deleteProductInCart(cid,pid)
        
            res.send({
                 status: "success",
                 message: result
            })
        }

        static updateCart = async (req,res)=>{

            const cid= req.params.cid;
            const products=req.body;// products es un array de productos
        
            const result = await cartManagerDB.updateCart(cid,products)
        
            res.send({
                 status: "success",
                 message: result
            })
        }

        static updateQuantity = async (req,res)=>{

            const cid= req.params.cid;
            const pid= req.params.pid;
            const quantity=req.body.quantity;
        
            const result = await cartManagerDB.updateQualityProduct(cid,pid,quantity)
        
            res.send({
                 status: "success",
                 message: result
            })
        }

        static deleteAllProducts = async (req,res)=>{

            const cid= req.params.cid;
        
            const result = await cartManagerDB.deleteAllProductsInCart(cid)
        
            res.send({
                 status: "success",
                 message: result
            })
        }
}

export {CartsController}