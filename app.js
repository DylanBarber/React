function Header(){
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
            
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
            <span className="counter-score">35</span>
            <button className="counter-subtract">+</button>
        </div>
    );
};
ReactDOM.render(
    <Player />,
    document.getElementById('root')
);