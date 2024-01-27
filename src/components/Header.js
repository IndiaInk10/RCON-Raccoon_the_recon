function GameSelector() {
    // game state를 패스 받아서 설정할 수 있도록 해야 함
    // game state는 port와 command list와 묶여서 동작

    return (
        <form action="#">
            <select className="Round-dropdown" name="games" id="game">
                <option value="palworld">Palworld</option>
                <option value="project_zomboid">Project Zomboid</option>
                <option value="valheim">Valheim</option>
            </select>
        </form>
    );
}

function Header() {
    return (
        <header className="App-header">
            <img className="Header-image" src="/images/raccoon.png" alt="raccoon" />
            <div className="Header-right">
                <span className="Header-text">RCON: Raccoon the recon</span>
                <GameSelector />
            </div>
        </header>
    );
}

export default Header;