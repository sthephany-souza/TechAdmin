import './excluirconta.css';

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ExcluirConta({ isOpen, onClose }) {
    const [email, setEmail] = useState("");

    const navigate = useNavigate("");

    const API_URL = "http://localhost:3000";

    if (!isOpen) {
        return null;
    }

    const handleExcluir = async (e) => {
        // evitar reload da página
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!email) {
            alert("Por favor, digite seu email para confirmar a exclusão.");

            return;
        }

        try {
            // requisição de excluir para o back-end
            const resposta = await axios.delete(`${API_URL}/auth/delete`, {
                // [YAS] Adicionei isso para pegar o e-mail correto do banco
                data: {
                    email : email
                },

                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert(resposta.data.msg || "Conta excluída com sucesso!");

            // limpa e volta pra tela inicial
            localStorage.removeItem("token");
            onClose();
            navigate("/");
        } catch (error) {
            console.error("Erro ao excluir conta:", error);

            alert("Erro ao excluir conta. Tente novamente.");
        }
    }

    return (
        <div className="modal_interacao">
            <div className="modal_conteudo">
                <div className="modal_header">
                    <h2>Confirmação de Exclusão</h2>
                </div>
                <form onSubmit={handleExcluir}>
                    <p>Tem certeza que deseja excluir sua conta? Esta ação é <strong>irreversível</strong>.</p>
                    <p>Digite seu e-mail abaixo para confirmar:</p>

                    <input
                        type='email'
                        className='modal_input_confirmacao'
                        placeholder='E-mail:'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="modal_acoes">
                        <button className="botao_cancelar" onClick={onClose}>Cancelar</button>
                        <button className="botao_confirmar_exclusao">Excluir</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ExcluirConta;