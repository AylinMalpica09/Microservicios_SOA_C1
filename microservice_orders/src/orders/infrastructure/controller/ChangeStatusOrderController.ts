import {Request, Response} from "express";
import {ChangeStatusOrderUseCase} from "../../application/useCase/changeStatusOrderUseCase";

export class ChangeStatusOrderController{
    constructor(readonly useCase:ChangeStatusOrderUseCase) {
    }

    async run(req:Request,res:Response){
        try {
            const id = req.params.id
            const {status} = req.body
            const order = await this.useCase.run(id,status)
            if (order){
                return res.status(201).send({
                    status:"Success",
                    data:order,
                    message:"order status change success"
                })
            }
            return res.status(417).send({
                status:"error",
                data:[],
                message:"order status change fail"
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