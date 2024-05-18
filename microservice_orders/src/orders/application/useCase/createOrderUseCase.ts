import {OrderRepository} from "../../domain/repository/orderRepository";

export class CreateOrderUseCase {
    constructor(readonly repository:OrderRepository) {
    }

    async run(
        total:number,
        date:Date,
        status:string,
    ){
        try {
            return await this.repository.create(total,date,status)
        }catch (e) {
            return null;
        }
    }
}