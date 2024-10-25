import express from "express";
const customer = express.Router();
import { postCustomer, getCustomer } from "../controllers/customerController.js";

customer.post('/' , postCustomer);
customer.get('/' , getCustomer);

export default customer;
