import { useState, useMemo } from 'react';

// Campo temporário
const DADOS_ORIGINAIS_INICIAIS = {
    nomeUsuario: 'Laura Rodrigues',
    emailEmpresa: 'techpay@gmail.com',
    senha: '123456',
    telefone: '(11) 95391-3065',
    nomeCompletoFuncionario: 'Laura Rodrigues', 
    emailFuncionario: 'laura.rodrigues@gmail.com',
    nomeEmpresa: 'TechPay',
};

export const usePerfil = () => {
    const [dadosFormulario, setDadosFormulario] = useState(DADOS_ORIGINAIS_INICIAIS);
    const [dadosRascunho, setDadosRascunho] = useState(DADOS_ORIGINAIS_INICIAIS)
    const [camposEditaveis, setCamposEditaveis] = useState({
        nomeUsuario: false,
        emailEmpresa: false,
        senha: false,
        telefone: false,
    });

    const handleToggleEdicao = (campo) => {
        setCamposEditaveis(prev => ({
            ...prev,
            [campo]: !prev[campo], 
        }));
    };

    const handleInputChange = (campo, valor) => {
        setDadosRascunho(prev => ({
            ...prev,
            [campo]: valor,
        }));
    };

    const houveAlteracao = useMemo(() => {
        const chavesEditaveis = ['nomeUsuario', 'emailFuncionario', 'senha', 'telefone'];
        
        const rascunho = chavesEditaveis.reduce((obj, key) => ({ ...obj, [key]: dadosRascunho[key] }), {});
        const oficial = chavesEditaveis.reduce((obj, key) => ({ ...obj, [key]: dadosFormulario[key] }), {});
        
        return JSON.stringify(rascunho) !== JSON.stringify(oficial);
    }, [dadosRascunho, dadosFormulario]);

    const handleAplicarAlteracoes = () => {
        if (!houveAlteracao) return;

        const alteracoesSincronizadas = {
            ...dadosRascunho,
            nomeCompletoFuncionario: dadosRascunho.nomeUsuario,
            emailFuncionario: dadosRascunho.emailFuncionario
        }

        console.log("Alterações enviadas para o servidor:", dadosRascunho);
        setDadosFormulario(alteracoesSincronizadas);

        setCamposEditaveis({
            nomeUsuario: false, emailFuncionario: false, senha: false, telefone: false,
        });
    };

    return {
        dadosExibicao: dadosFormulario,
        dadosRascunho: dadosRascunho,
        camposEditaveis,
        houveAlteracao,
        handleInputChange,
        handleToggleEdicao,
        handleAplicarAlteracoes,
    };
};