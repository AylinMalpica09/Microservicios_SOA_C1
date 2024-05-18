import {MysqlOrderRepository} from "./repository/mysqlOrderRepository";
import {ChangeStatusOrderUseCase} from "../application/useCase/changeStatusOrderUseCase";
import {ChangeStatusOrderController} from "./controller/ChangeStatusOrderController";
import {CreateOrderUseCase} from "../application/useCase/createOrderUseCase";
import {CreateOrderController} from "./controller/createOrderController";
import {GetOrderUseCase} from "../application/useCase/getOrderUseCase";
import {GetOrderController} from "./controller/getOrderController";

export const database = new MysqlOrderRepository()

export const changeStatusOrderUseCase = new ChangeStatusOrderUseCase(database)
export const changeStatusOrderController = new ChangeStatusOrderController(changeStatusOrderUseCase)


export const createOrderUseCase = new CreateOrderUseCase(database)
export const createOrderController = new CreateOrderController(createOrderUseCase)


export const getOrderUseCase = new GetOrderUseCase(database)
export const getOrderController = new GetOrderController(getOrderUseCase)