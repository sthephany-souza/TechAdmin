// import
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    // busca do banco
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const API_URL = "http://localhost:3000";

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.msg || "Erro no login");
            }
            // Salva o token no localStorage
            localStorage.setItem("token", data.token);

            alert("Login bem-sucedido!");

            navigate("/home");
        } catch (err) {
            setError(err.message);
            alert("Erro: " + err.message);
        }
    };

    return { email, setEmail, senha, setSenha, handleLogin, error };
}
