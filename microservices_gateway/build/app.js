"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json);
app.use('/api/v1/orders', (0, express_http_proxy_1.default)('http://localhost:8081'));
app.use('/api/v1/products', (0, express_http_proxy_1.default)('http://localhost:8082'));
app.listen(8080, () => {
    signale.success("Server on line in port: 8080");
});
