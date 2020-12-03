import express from 'express';
import data from "../data.js";
import Products from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
const productsRouter = express.Router();

productsRouter.get('/', expressAsyncHandler(async (req, res)=>{
    const products = await Products.find({});
    res.send(products);
}))

productsRouter.get('/seed', expressAsyncHandler(async (req, res)=>{

    await Products.remove({});
    const createdProduces = await Products.insertMany(data.products);
    res.send({createdProduces});
}))

productsRouter.get('/:id', expressAsyncHandler(async (req, res)=>{
    const product = await Products.findById(req.params.id);
    if (product){
        res.send(product);
    }else {
        res.status(404).send({message:'Product Not Found'})
    }
}))

export default productsRouter;








