import jwt from "jsonwebtoken";

export default function checkToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Token não encontrado" });
    }

    try {
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);

        // criando req.user.idUsu
        req.user = decoded;

        next();
    } catch (err) {
        res.status(400).json({ msg: "Token inválido" });
    }
}
