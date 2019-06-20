function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
            
        </header>
    );
};
function Player(props){
    return (
        <div className="player">
            <span className="player-name">{props.playerName}</span>
            <Counter score = {props.score}/>
        </div>

    );
};
function Counter(props){
    return (
        <div className="counter">
            <button className="counter-add">-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-subtract">+</button>
        </div>
    );
};
function App(platerName, score){
    return(
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={2}/>
            {/* Player List */}
            <Player 
            playerName = "Dylan"
            score = {0}
            />
            <Player
            playerName = "Tom"
            score = {2}
            />
        </div>
    );
};
ReactDOM.render(
    <App />,
    document.getElementById('root')
);