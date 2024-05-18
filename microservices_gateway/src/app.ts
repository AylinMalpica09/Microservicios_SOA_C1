import express from 'express';
import {Signale} from 'signale';
import proxy from "express-http-proxy";

const app = express()

const signale = new Signale()

app.use(express.json)

app.use('/api/v1/orders',proxy('http://localhost:8081'));
app.use('/api/v1/products',proxy('http://localhost:8082'));


app.listen(8080,()=>{
    signale.success("Server on line in port: 8080")
})