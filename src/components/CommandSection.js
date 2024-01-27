import CircularButton from "./Circular-button";

function CommandInput() {
    return (
        <form className="Command-input" action="#" method="get">
            <input className="Round-input-container" type="text" name="command" />
            <CircularButton symbol="send" />
        </form>
    );
}

function LogView() {
    return (
        <textarea className="Round-text-container" rows="12"/>
    );
}

function CommandSection() {
    return (
        <div className="Command-section">
            <CommandInput />
            <LogView />
        </div>
    );
}

export default CommandSection;