import CircularButton from './Circular-button';

function CommandPreset() {
    return (
        <div className="Command-preset">
            <span className="title-text">Command</span>
            <div className="presets">
                <button className="Round-button">Command 1</button>
                <button className="Round-button">Command 2</button>
                <button className="Round-button">Command 3</button>
                <button className="Round-button">Command 4</button>
                <button className="Round-button">Command 5</button>
            </div>
        </div>
    );
}

function PlayerItem({key, name}) {
    return (
        <li key={key} className="Player-item">
            <span className="Player-name">{name}</span>
            <div>
                <button className="Kick-button">Kick</button>
                <button className="Ban-button">Ban</button>
            </div>
        </li>
    );
}
function PlayerList() {
    const playerInfos = ["John", "Dave", "Steve", "John", "Dave", "Steve", "John", "Dave", "Steve", "John", "Dave", "Steve", "John", "Dave", "Steve", "John", "Dave", "Steve", "John", "Dave", "Steve"];
    const players = playerInfos.map((name, steamID) => {
        return (
            <PlayerItem key={steamID} name={name} />
        );
    });

    return (
        <div className="Player-list">
            <div className="Player-title">
                <span className="title-text">Player List</span>
                <span className="sub-text">99 online</span>
            </div>
            <ul className="Round-container">{players}</ul>
        </div>
    );
}

function ServerInfo() {
    return (
        <div className="Server-info">
            <div className="Server-title">
                <span className="Server-name">Server Name</span>
                <span className="sub-text">version</span>
            </div>
            <CircularButton symbol="link" />
        </div>
    );
}

function ServerSection() {
    return (
        <div className="Server-section">
            <ServerInfo />
            <PlayerList />
            <CommandPreset />
        </div>
    );
}

export default ServerSection;