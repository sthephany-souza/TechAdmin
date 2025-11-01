import { useLogin } from './useLogin';

import CPS from '../../assets/logo-cps.png';
import Google from '../../assets/icone-google.png';

import './login.css';

function Login() {

    const { email, setEmail, senha, setSenha, handleLogin } = useLogin();

    return (
        <div className='body_login'>
            <form className='caixa_login' onSubmit={handleLogin}>
                <img src={CPS} className='imagem_cps' alt='Logo TechAdmin completa com letreiro preto e sem fundo'/>
                
                <h1 className='titulo_login'>Conectar-se</h1>

                <input type='email' className='input_entrada' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail:"/>
                <input type='password' className='input_entrada' value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha:'/>
                
                <p className='opcao_esqueceu_senha'>Esqueceu sua senha?</p>
        
                <button className='botao_login' type="submit">Entrar</button>

                <div className='design_separador'>
                    <div className='design_linha'></div>
                    <p>Ou</p>
                    <div className='design_linha'></div>
                </div>

                <button className='botao_google'>
                    <img src={Google} className='imagem_google' alt='Logo do Google'/>
                    <p>Continuar com o Google</p>
                </button>
            </form>
        </div>
    );
}

export default Login