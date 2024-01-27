function CircularButton({symbol}) {
    return (
        <button className="Circular-button" type="submit">
            <span className="material-symbols-rounded">{symbol}</span>
        </button>
    );
}

export default CircularButton;