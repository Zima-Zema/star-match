
const PlayAgain = (props) => {
    return (
        <div className='game-done'>
            <div 
                className='message'
                style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
                >
                    {props.gameStatus === 'lost' ? 'Game Over!' : 'Nicely Done'}
            </div>
            <button onClick={props.onResetGame}>Paly Again</button>
        </div>
    )
};


export default PlayAgain;