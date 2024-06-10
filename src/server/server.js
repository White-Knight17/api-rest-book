import dotenv from "dotenv";
import express from "express";
import bookRouter from '../router/book.router.js'
import bodyParser from "body-parser";
import cors from 'cors'

dotenv.config();

//MIDDLEWARE: Usamos express para estos mismos
const app = express();

const PORT = process.env.PORT || 4000;

export const serverStart = () => {
    app.use(cors());
    app.use(bodyParser.json()); //parseador


    app.use('/books', bookRouter);


    app.listen(PORT, () => {
        console.log('Servidor activado');
        console.log(`localhost:${PORT}`);
    });


}