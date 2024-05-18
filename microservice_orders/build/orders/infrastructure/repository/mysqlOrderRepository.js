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
exports.MysqlOrderRepository = void 0;
const order_1 = require("../../domain/entity/order");
const mysql_1 = require("../../../database/mysql");
class MysqlOrderRepository {
    generateId() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result;
                do {
                    const namePrefix = "order";
                    const randomNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));
                    result = '';
                    for (let i = 0; i < 4; i++) {
                        result += randomNumbers[i] + namePrefix[i] + randomNumbers[i + 1];
                    }
                } while (yield this.getOrder(result));
                return result;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM orders WHERE id = ? AND deleted_at IS NULL";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                const order = result[0];
                return new order_1.Order(order.id, order.total, order.date, order.status, order.deleted_at);
            }
            catch (e) {
                console.log(e);
                return null;
            }
        });
    }
    create(total, date, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield this.generateId();
            if (id != undefined) {
                const sql = "INSERT INTO orders(id,total,date,status) VALUES(?,?,?,?)";
                const params = [id, total, date, status];
                try {
                    const [result] = yield (0, mysql_1.query)(sql, params);
                    if (result) {
                        return this.getOrder(id);
                    }
                }
                catch (e) {
                    console.log("repository error\n", e);
                    return null;
                }
            }
            return null;
        });
    }
    changeStatus(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE orders SET status = ? WHERE id=? AND deleted_at IS NULL";
            const params = [status, id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result) {
                    return yield this.getOrder(id);
                }
                return null;
            }
            catch (e) {
                console.log("repository error:\n", e);
                return null;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM orders WHERE deleted_at IS NULL";
            try {
                const [result] = yield (0, mysql_1.query)(sql, []);
                return result.map((orderData) => new order_1.Order(orderData.id, orderData.total, orderData.date, orderData.status, orderData.deleted_at));
            }
            catch (e) {
                console.log("repository error:\n", e);
                return null;
            }
        });
    }
}
exports.MysqlOrderRepository = MysqlOrderRepository;
