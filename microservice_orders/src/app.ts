import express from 'express';
import {Signale} from 'signale';
import {orderRoute} from "./orders/infrastructure/route/orderRoute";


const app = express();
const signale = new Signale();

app.use(express.json())
app.use(orderRoute)


app.listen(8080,()=>{
    signale.success("Server on line in port: 8081")
})