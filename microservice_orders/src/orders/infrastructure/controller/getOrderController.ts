import {Request, Response} from "express";
import {GetOrderUseCase} from "../../application/useCase/getOrderUseCase";


export class GetOrderController {
    constructor(readonly useCase:GetOrderUseCase) {
    }

    async run(req:Request,res:Response){
        try {
            const orders = await this.useCase.run()
            if (orders){
                return res.status(201).send({
                    status:"Success",
                    data:orders,
                    message:"orders get success"
                })
            }
            return res.status(417).send({
                status:"error",
                data:[],
                message:"orders get fail"
            })
        }catch (e) {

            console.log("request error",e)
            return res.status(400).send({
                message:"error",
                error:e
            })
        }
    }
}