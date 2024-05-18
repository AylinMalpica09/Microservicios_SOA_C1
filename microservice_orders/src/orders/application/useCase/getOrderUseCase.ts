import {OrderRepository} from "../../domain/repository/orderRepository";

export class GetOrderUseCase{
    constructor(readonly repository:OrderRepository) {
    }

    async run(){
        try {
            return await this.repository.getAll()
        }catch (e) {
            return null;
        }
    }
}