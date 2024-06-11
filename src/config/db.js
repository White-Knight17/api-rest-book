import dotenv from "dotenv";
import mongoose from "mongoose"
dotenv.config();


export const conectarDB = async () => {

    try {
        console.log('Conectando...');
        await mongoose.connect(process.env.MONGO_URL.trim(), { useNewUrlParser: true, useUnifiedTopology: true, dbName: process.env.MONGO_DB_NAME });
        console.log('Conectado con exito!!');
    } catch (error) {
        console.log(`No hay datos: ${error}`);
    }
}