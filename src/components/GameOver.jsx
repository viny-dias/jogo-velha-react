export default function GameOver({ winner, onRestart }) { 
    return (
        <div id="game-over">
            <h2>O Jogo terminou!</h2>
            { winner && <p>{winner} ganhou!</p> }
            { !winner && <p>Deu empate :/</p> }
            <p>
                <button onClick={onRestart}>Jogar novamente</button>
            </p>
        </div>
    )
}