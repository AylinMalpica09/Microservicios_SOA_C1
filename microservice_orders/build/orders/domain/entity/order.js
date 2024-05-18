"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, total, date, status, deleted_at) {
        this.id = id;
        this.total = total;
        this.date = date;
        this.status = status;
        this.deleted_at = deleted_at;
    }
}
exports.Order = Order;
