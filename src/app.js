import express from "express"
import mongoose from "mongoose"
import{engine} from "express-handlebars"
import cartsRouter from "./routes/carts.router.js"
import usersRouter from "./routes/users.router.js"
import viewRouter from "./routes/views.router.js"
import productsRouter from "./routes/products.router.js"
import __dirname from "./utils.js"
import {Server} from "socket.io"

const PORT = 8080;
const app = express();

const MONGO = "mongodb+srv://davidgomezarg:9$PqEtLt7hw7KVx@codercluster.xu3gigw.mongodb.net/ecommerce"
const connection = mongoose.connect(MONGO);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const httpServer = app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto: ${PORT}`))
console.log("dirname",__dirname)
const io= new Server(httpServer);

app.engine("handlebars",engine());
app.set("view engine","handlebars");
app.set("views",__dirname+"/views");

app.use(express.static(__dirname + "/public"))

//Rutas
app.use("/api/carts",cartsRouter);
app.use("/api/products",productsRouter);
app.use("/api/users",usersRouter)
app.use("/",viewRouter)


