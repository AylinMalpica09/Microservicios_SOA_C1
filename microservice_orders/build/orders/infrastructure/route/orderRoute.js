"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoute = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.orderRoute = express_1.default.Router();
exports.orderRoute.get("/", dependencies_1.getOrderController.run.bind(dependencies_1.getOrderController));
exports.orderRoute.post("/", dependencies_1.createOrderController.run.bind(dependencies_1.createOrderController));
exports.orderRoute.put("/:id", dependencies_1.changeStatusOrderController.run.bind(dependencies_1.changeStatusOrderController));
