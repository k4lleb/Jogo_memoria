
import "./MemoryGameWelcome.css"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function MemoryGameWelcome() {
    const location = useLocation();

    return (
        <div className="memory-game-container">
            <h1 className="title">Bem-vinda ao Jogo da Memória Qualidades em dobro</h1>

            {/* Linha branca abaixo do título */}
            <div className="line"></div>

            {/* Indicadores da página */}
            <div className="page-indicators">
            {/* A primeira página ficará rosa se o caminho for '/' */}
            <div className={`page-indicator active ${location.pathname === '/' ? 'page-active' : ''}`}></div>
                {/* A segunda página ficará rosa se o caminho for '/Welcome02' */}
                <div className={`page-indicator desativ ${location.pathname === '/Welcome02' ? 'page-active' : ''}`}></div>
            </div>

            <div className="instrucoes">
                {/* Primeiro passo */}
                <div className="step">
                    <img src="/img/Carta_01.png" alt="carta" className="step-icon" />
                    <p className="step-text">Encontre os pares</p>
                </div>

                {/* Seta entre os passo */}
                <div className="seta">→</div>

                {/*Segundo passo*/}
                <div className="step">
                    <img src="/img/Carta_02.png" alt="carta" className="step-icon" />
                    <p className="step-text">Discubra virtudes</p>
                </div>

                {/* Seta entre os passo */}
                <div className="seta">→</div>

                {/*Terceiro passo*/}
                <div className="step">
                    <img src="/img/Carta_03.png" alt="carta" className="step-icon" />
                    <p className="step-text">Agregue-as</p>
                </div>
            </div>

            {/* Imagem no canto inferior esquerdo*/}
            <div className="bottom-left">
                <img src="/img/bottom-left.png" alt="icone" className="bottom-left-icon" />
                <p className="step-text">Utilize o mouse</p>
            </div>

            {/* botão do canto inferior direito */}
            <div className="bottom-right">
                <Link to="/Welcome02">
                    <button className="start-button">Vamos Lá!</button>
                </Link>
            </div>
        </div>
    );
}

export default MemoryGameWelcome;