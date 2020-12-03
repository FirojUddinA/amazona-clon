import express from "express";
import mongoose from "mongoose"
import env from "dotenv"
import bodyParser from "body-parser"
import userRouter from "./routers/userRouter.js";
import productsRouter from "./routers/productsRouter.js";

env.config();
const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use(bodyParser());
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})

const port = process.env.PORT || 3500;
app.get("/",(req, res) => {
    res.send("Server is already ready");
});

app.use('/api/users',userRouter);

app.use("/api/products",productsRouter);
// app.use("/api/product",productsRouter);

// app.get("/api/products",(req, res) => {
//     res.send(data.products);
// })
//
// app.get("/api/product/:id",(req, res) => {
//     const product = data.products.find(x => x._id === req.params.id);
//     if(product){
//         res.send(product);
//     }else {
//         res.status(404).send({message: 'Product not found'})
//     }
//
// })


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
})