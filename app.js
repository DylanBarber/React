const players = [
    {
        name: "Tom",
        score: 5
    },
    {
        name: "Dylan",
        score: 3
    }
];
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
            <span className="player-name">{props.name}</span>
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
function App(props){
    return(
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={2}/>
            {/* Player List */}
            {props.initialPlayers.map( player => 
                <Player 
                name = {player.name}
                score = {player.score}
                />
            )}
        </div>
    );
};
ReactDOM.render(
    <App initialPlayers = {players}/>,
    document.getElementById('root')
);

