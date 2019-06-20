function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
            
        </header>
    );
};
function Player(){
    return (
        <div className="player">
            <span className="player-name">
                Dylan
            </span>
            <Counter />
        </div>

    );
};
function Counter(){
    return (
        <div className="counter">
            <button className="counter-add">-</button>
            <span className="counter-score">1</span>
            <button className="counter-subtract">+</button>
        </div>
    );
};
function App(){
    return(
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={2}/>
            {/* Player List */}
            <Player />
        </div>
    );
};
ReactDOM.render(
    <App />,
    document.getElementById('root')
);