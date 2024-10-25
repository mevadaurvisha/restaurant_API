import express from "express";
const bookings = express.Router();
import { postbooking } from "../controllers/bookingController.js";

bookings.post('/' , postbooking);


export default bookings;