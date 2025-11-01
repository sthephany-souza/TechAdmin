import React, { useState } from 'react'; 
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import Header from '../HeaderEscuro/HeaderEscuro.jsx';
import './perfil.css';
import { usePerfil } from './usePerfil.js';

function Perfil() {

    const {
        dadosExibicao,
        dadosRascunho,
        camposEditaveis,
        houveAlteracao,
        handleInputChange,
        handleToggleEdicao,
        handleAplicarAlteracoes,
    } = usePerfil();

    return (
        <div className="body_perfil">
            <Header /> 
            
            <main>
                <div className="caixa_perfil">
                    <div className="header_perfil">
                        <FaUserCircle className="perfil_icone" />

                        <div className="perfil_dados_funcionario">
                            <h3>Funcionário</h3>
                            <p className="perfil_nome_funcionario">{dadosExibicao.nomeCompletoFuncionario}</p>
                            <p className="perfil_email_funcionario">{dadosExibicao.emailFuncionario}</p>
                        </div>

                        <div className="perfil_dados_empresa">
                            <h3>Empresa</h3>
                            <p>Nome: {dadosExibicao.nomeEmpresa}</p>
                            <p>E-mail: {dadosExibicao.emailEmpresa}</p>
                            
                        </div>
                    </div>

                    <div className="design_divisao" />

                    <div className="perfil_campos">
                        <CampoEditavel label="Nome usuário:" campo="nomeUsuario" dados={ dadosRascunho } editavel={ camposEditaveis }
                                       onIconClick={ handleToggleEdicao } onChange={ handleInputChange } />

                        <CampoEditavel label="E-mail:" campo="emailFuncionario" dados={ dadosRascunho } editavel={ camposEditaveis }
                                       onIconClick={ handleToggleEdicao } onChange={ handleInputChange } />

                        <CampoEditavel label="Senha:" campo="senha" dados={ dadosRascunho } editavel={ camposEditaveis }
                                       onIconClick={ handleToggleEdicao } tipo="password" onChange={ handleInputChange } />

                        <CampoEditavel label="Telefone:" campo="telefone" dados={ dadosRascunho } editavel={ camposEditaveis }
                                       onIconClick={ handleToggleEdicao } onChange={ handleInputChange } />    
                    </div>
                    
                    <div className="caixa_botao">
                        <button
                            className={`botao_perfil ${!houveAlteracao ? 'botao_desabilitado' : ''}`}
                            onClick={handleAplicarAlteracoes}
                            disabled={!houveAlteracao}>
                            Aplicar alterações
                        </button>
                    </div>
                </div>
            </main>

            <div className='caixa_footer'>
                <p className='opcao_copyright'>Copyright</p> | <p className='opcao_faq'>FAQ</p>
            </div>
        </div>
    );
}
    const CampoEditavel = ({ label, campo, dados, editavel, onChange, onIconClick, tipo = 'text' }) => (
    <div className="caixa_campo_editavel">
        
        <div className="grupo_label_icone"> 
            <label>{label}</label>
            <FaEdit className="icone_alterar" onClick={() => onIconClick(campo)} /> 
        </div>
        
        <div className="grupo_input">
            <input 
                type={tipo} 
                value={dados[campo]} 
                onChange={(e) => onChange(campo, e.target.value)} 
                className="input_perfil"
                disabled={!editavel[campo]} 
            />
        </div>
    </div>
);

export default Perfil;