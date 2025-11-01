// importação
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../models/userModel.js";

export const cadastro = async (req, res) => {
    try {
        const { nome, email, senha, confSenha } = req.body;

        // verificar se as senhas são as mesmas
        if (senha != confSenha) {
            return res.status(422).json({ msg: "As senhas tão diferentes -_-" });
        }

        // verificar se o usuário já existe
        const existeUsu = await User.findOne({ email: email });

        if (existeUsu) {
            return res.status(422).json({ msg: "Usuário existente" });
        }

        // criptografar senha
        const salto = await bcrypt.genSalt(12);
        const hashSenha = await bcrypt.hash(senha, salto);

        // criar usuário
        const usuario = new User({
            nome,
            email,
            senha: hashSenha,
        });
        await usuario.save();

        res.status(201).json({ msg: "Usuário criado U-U" });
    } catch (error) {
        console.error("Erro no login:", error); // mostra o erro no terminal
        res.status(500).json({
            msg: "Deu ruim no servidor X-X",
            error: error.message  // mostra o erro no Postman também
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        console.log("Recebido do front:", { email, senha });

        // saber se o usuário não existe
        const usu = await User.findOne({ email: email });

        if (!usu) {
            return res.status(404).json({ msg: "Usuário não existe" });
        }

        // analisar senha
        const checkSenh = await bcrypt.compare(senha, usu.senha);

        if (!checkSenh) {
            return res.status(422).json({ msg: "Senha não bate O-O" });
        }

        const secret = process.env.JWT_SECRET;

        const token = jwt.sign(
            {
                id: usu._id,
            },
            secret,
        );

        res.status(200).json({ msg: "É tu mesmo ^-^", token });
    } catch (error) {
        console.error("Erro no login:", error); // mostra o erro no terminal
        res.status(500).json({
            msg: "Deu ruim no servidor X-X",
            error: error.message  // mostra o erro no Postman também
        });
    }
};

export const excluir = async (req, res) => {
    try {
        // [YAS] Adicionei essa constante
        const { email } = req.body;
        // token
        const idUsu = req.user.id;
        // buscar usuario
        const usuario = await User.findById(idUsu);
        
        if (!usuario) {
            return res.status(404).json({ msg: "Usuário não encontrado" });
        }

        // [YAS] E coloquei essa verificação de e-mail
        if(email !== usuario.email) {
            return res.status(401).json({ msg: "Confirmação de e-mail incorreta." });
        }

        await User.findByIdAndDelete(idUsu);
        res.status(200).json({ msg: "Conta deletada com sucesso!" });
    } catch (error) {
        console.error("Erro no login:", error); // mostra o erro no terminal
        res.status(500).json({
            msg: "Deu ruim no servidor X-X",
            error: error.message  // mostra o erro no Postman também
        });
    }
}