import "./MemoryGameWelcome.css";
import { useLocation, useNavigate } from 'react-router-dom';

function MemoryGameWelcome02() {
    const location = useLocation();
    const navigate = useNavigate(); // Hook para navegar entre páginas

    const handleStartGame = () => {
        navigate('/Jogo'); // Redireciona para o jogo
    };

    return (
        <div className="memory-game-container">
            <h1 className="title">Jogo da Memória Qualidades em dobro</h1>

            {/* Linha branca abaixo do título */}
            <div className="line"></div>

            {/* Indicadores da página */}
            <div className="page-indicators">
                <div className={`page-indicator active ${location.pathname === '/' ? 'page-inactive' : 'page-active'}`}></div>
                <div className={`page-indicator desativ ${location.pathname === '/Welcome02' ? 'page-active' : ''}`}></div>
            </div>

            {/* Subtítulo */}
            <h2 className="subtitle">Como jogar?</h2>

            {/* Texto explicativo */}
            <div className="texto-explicativo">
                <p>Qualidade em Dose Dupla! Aqui, cada par de cartas representa uma qualidade inspiradora, essencial para fortalecer seu autoconhecimento e enriquecer sua jornada pessoal. Vamos jogar e descobrir as forças que te tornam única!</p><br />

                <p>O jogo conta com cinco pares de cartas (totalizando 10 cartas). Cada par ilustra uma mulher em uma situação que representa uma qualidade específica. As usuárias devem virar as cartas para encontrar os pares correspondentes.</p><br />

                <p>Ao encontrar um par, a usuária verá uma breve explicação sobre o significado e os benefícios da qualidade revelada.</p>
            </div>

            <div className="bottom-left">
                <img src="/img/bottom-left.png" alt="icone" className="bottom-left-icon" />
                <p className="step-text">Utilize o mouse</p>
            </div>

            {/* Botão para prosseguir */}
            <div className="bottom-right">
                <button className="start-button" onClick={handleStartGame}>Vamos jogar!</button>
            </div>
        </div>
    );
}

export default MemoryGameWelcome02;