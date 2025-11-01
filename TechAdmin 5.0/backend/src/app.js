// importação
import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());

app.use("/auth", authRoutes);

console.log("Rotas registradas:");
app._router?.stack?.forEach((r) => {
  if (r.route && r.route.path) {
    console.log(r.route.path, Object.keys(r.route.methods));
  }
});

export default app;