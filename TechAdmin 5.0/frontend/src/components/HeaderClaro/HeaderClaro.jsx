import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FaUserCircle, FaComment, FaMoon, FaTrash, FaSignOutAlt, FaTimes } from 'react-icons/fa';

import IPS from '../../assets/logo-ips.png';
import Hamburger from '../../assets/icone-hamburger-preto.png';

import ExcluirConta from '../ExcluirConta/ExcluirConta.jsx';
import './headerclaro.css';

function HeaderClaro() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
      setMenuAberto(!menuAberto);
  };

  const abrirModalExcluir = () => {
      setMenuAberto(false);
      setModalExcluirAberto(true);
  }
  
  const fecharModalExcluir = () => {
      setModalExcluirAberto(false);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="caixa_header">
        <div className='grupo_ips_hamburger'>
            <a href='/home'><img className='imagem_ips' src={ IPS } alt='Logo TechAdmin incompleta com letreiro preto e sem fundo' /></a>
            <img className="icone_hamburger" src={ Hamburger }  alt="Abrir menu"  onClick={toggleMenu} />
        </div>

     {}
     {menuAberto && (
        <div className="caixa_menu_pendente">
          <ul>
            <li><Link to="/minha_conta"><FaUserCircle className="menu_icon" /> Minha conta</Link></li>
            <li><a href="/fale-conosco"><FaComment className="menu_icon" /> Fale conosco</a></li>
            <li><button><FaMoon className="menu_icon" /> Modo Escuro/Claro</button></li>
            <li><button onClick={ abrirModalExcluir }><FaTrash className="menu_icon" /> Excluir conta</button></li>
            <li><button onClick={handleLogout}><FaSignOutAlt className="menu_icon" id='sairConta' /> Sair</button></li>
          </ul>
        </div>
      )}

      <ExcluirConta isOpen={modalExcluirAberto} onClose={fecharModalExcluir} />

    </header>
  );
}

export default HeaderClaro;
