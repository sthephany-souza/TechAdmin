// importação
import mongoose from "mongoose";
import dotenv from "dotenv";

// iniciar dotenv
dotenv.config();

// conexão banco
export const connectDB = async() => {
    try {
         // caso conecte com o banco inicia
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Banco conectado :)");
    } catch (error) {
        // caso não fecha a aplicação
        console.log("Banco não encontrado ;-;");

        process.exit(1);
    }
}