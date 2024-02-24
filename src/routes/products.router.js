import {Router} from "express"
import { uploader } from "../utils.js";
import { productService } from "../repositories/index.js";
import {checkRole} from "../middlewares/auth.js";

const router = Router();

router.get("/",async(req,res)=>{

    try{
        const {limit,page,sort,category,status,price}=req.query;

        //para realizar ordenamiento ascendente o descendente por precio, en caso de no recibir sort, no realizar ningún ordenamiento
        const preSort = sort ? {price:sort === "asc" ? 1:-1} : {};

        const options = {
            limit: limit ? limit:10,
            page: page ? parseInt(page) : 1,
            sort:preSort,
            lean:true

        }

        const filter = category?{category}:{};

        let products = await productService.get(filter,options)

        if(products.msg.hasPrevPage)
        {
            products.msg.prevLink =`http://localhost:8080/api/products?limit=${limit}&page=${options.page -1 }`;
        }

        if(products.msg.hasNextPage)
        {
            products.msg.nextPage =`http://localhost:8080/api/products?limit=${limit}&page=${options.page +1 }`;
        }

        res.send({
            status: "success",
            message: products
        })

    }
    catch(error){
        res.json({status:"error", message:error.message});
    }
})

router.get("/:pid",async(req,res)=>{
    try {
        const {pid}=req.params;
        const product = await productService.getProductByID(pid);
        res.json({status:"success", payload: product});
    } catch (error) {
        res.json({status:"error", message:error.message});
        
    }
} )

router.post("/",checkRole(["Admin"]),uploader.single("thumbnail"),async(req,res)=>{

    try{
        const {title,category,description,price,code,stock}=req.body;
        const filename = req.file.filename;
    
        const result = await productService.create({title,category,description,price,code,stock,filename});
        res.json({status:"success", payload: result});
    }
    catch{
        res.json({status:"error", message:`${Error.message}`});
    }

})

router.delete("/:pid",checkRole(["Admin"]),async(req,res)=>{

    try{
        const pid=req.params.pid;
        const result = await productService.delete(pid);
        res.json({status:"success", payload: result});
    }catch{
        res.json({status:"error", message:error.message});
    }
    

})

router.put("/:pid",checkRole(["Admin"]),async(req,res)=>{

    try{
        const pid=req.params.pid;
        const {title,category,description,price,code,stock}=req.body;
        //const filename = req.file.filename;

        const updateProduct = {
            title,
            category,
            description,
            price,
            code,
            stock
            // thumbnail:`http://localhost:8080/images/${filename}`
        }
    
        const result = await productService.put(updateProduct);
        res.json({status:"success", payload: result});
    }catch{
        res.json({status:"error", message:error.message});
    }  
})

export default router