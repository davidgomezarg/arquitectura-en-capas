import { UsersRepository } from "./Users.repository.js";
import { ProductsRepository } from "./Products.repository.js";

import {UserManagerDB} from "../dao/dbManagers/UserManagerDB.js"
import ProductManagerDB from "../dao/dbManagers/ProductManagerDB.js"

import { connectDB } from "../config/dbConnection.js";
connectDB();

export const userService = new UsersRepository(new UserManagerDB());
export const productService = new ProductsRepository(new ProductManagerDB());