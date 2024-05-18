import {Order} from "../entity/order";

export interface OrderRepository{
    create(
        total:number,
        date:Date,
        status:string
    ):Promise<Order|null>
    changeStatus(id:string, status:string):Promise<Order|null>
    getAll():Promise<Order[]|null>
}