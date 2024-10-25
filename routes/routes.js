import express from "express";
const routes = express.Router();
import bookingRoutes from "./booking.js";
import customerRoutes from "./customer.js";

routes.use('/customer', customerRoutes);
routes.use('/booking', bookingRoutes);


export default routes;