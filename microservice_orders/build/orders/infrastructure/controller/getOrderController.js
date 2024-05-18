"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderController = void 0;
class GetOrderController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield this.useCase.run();
                if (orders) {
                    return res.status(201).send({
                        status: "Success",
                        data: orders,
                        message: "orders get success"
                    });
                }
                return res.status(417).send({
                    status: "error",
                    data: [],
                    message: "orders get fail"
                });
            }
            catch (e) {
                console.log("request error", e);
                return res.status(400).send({
                    message: "error",
                    error: e
                });
            }
        });
    }
}
exports.GetOrderController = GetOrderController;
