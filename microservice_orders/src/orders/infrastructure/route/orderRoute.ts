import express from "express";
import {changeStatusOrderController, createOrderController, getOrderController} from "../dependencies";

export const orderRoute = express.Router()

orderRoute.get("/", getOrderController.run.bind(getOrderController))
orderRoute.post("/",createOrderController.run.bind(createOrderController))
orderRoute.put("/:id", changeStatusOrderController.run.bind(changeStatusOrderController))
