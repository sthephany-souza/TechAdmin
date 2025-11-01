import Solicitar from '../../assets/caixa-solicitacao.png';
import Lampada from '../../assets/icone-lampada.png';
import Header from '../HeaderClaro/HeaderClaro.jsx';

import './home.css';

function Home() { 
    return (  
        <div className='body_home'>
            <Header />
            <main>
                <div className='caixa_solicitar'>
                    <img className='imagem_solicitar' src={ Solicitar } />

                    <div className='grupo_texto_botao'>
                        <h1 className='texto_solicitar'>Solicite os seus aparelhos<br />eletrônicos:</h1>
                        <button className='botao_solicitar'>Solicitar</button>
                    </div>
                </div>

                <div className='grupo_sobre_acompanhar'>
                    <div className='caixa_sobre_nos'>
                        <div className='grupo_titulo_texto'>
                            <p className='titulo_sobre_nos'>Sobre nós</p>
                            <p className='texto_sobre_nos'>Confira mais informações sobre o nosso site clicando aqui para nos conhecer melhor!</p>
                        </div>

                        <div className='design_linha_vertical'></div>
                        <img className='imagem_lampada' src={ Lampada } alt='Ícone de uma lâmpada com engrenagens ao redor' />
                    </div>

                    <div className='caixa_acompanhar'>
                        <div>
                            <p className='titulo_acompanhar'>Status do chamado</p>
                            <p className='texto_acompanhar'>Acompanhe a situação do seu chamado.</p>
                            <button className='botao_acompanhar'>Status</button>
                        </div>
                    </div>
                </div>
            </main>

            <div className='caixa_footer'>
                <p className='opcao_copyright'>Copyright</p> | <p className='opcao_faq'>FAQ</p>
            </div>
        </div>
    );
}

export default Home;