import {OrderRepository} from "../../domain/repository/orderRepository";

export class ChangeStatusOrderUseCase{
    constructor(readonly repository:OrderRepository) {
    }

    async run(id:string,status:string){
        try {
            return await this.repository.changeStatus(id,status)
        }catch (e) {
            return null
        }
    }
}