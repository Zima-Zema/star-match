import PlayAgain from '../PlayAgain/PlayAgain';
import PlayNumber from '../PlayNumber/PlayNumber';
import StarsDisplay from '../StarsDisplay/StarsDisplay';
import { range, sum } from '../utils/utils';
import useGameState from './useGameState';

const StarMatch = (props) => {
    const { starts, availableNums, candidateNums, secondLeft, setGameState } = useGameState(); 
    const candidatesAreWrong = sum(candidateNums) > starts;
    const gameStatus = availableNums.length === 0 
    ? 'won'
    : secondLeft === 0 ? 'lost' : 'active';
    
    const numberStatus = (number) => {
        if(!availableNums.includes(number))
            return 'used';
        if(candidateNums.includes(number))
            return candidatesAreWrong ? 'wrong' : 'candidate';
        return 'available';
    }

    const onNumberClick = (number, currentStatus) => {
        if(currentStatus === 'used' || gameStatus !== 'active')
            return;
        const newCandidateNums = currentStatus === 'available' 
            ? candidateNums.concat(number)
            : candidateNums.filter(candidate => candidate !== number);
        setGameState(newCandidateNums);
    }

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
           { gameStatus !== 'active' ? (
              <PlayAgain gameStatus={gameStatus} onResetGame={props.startNewGame} />
           ) :  <StarsDisplay count={starts} />}
          </div>
          <div className="right">
          {range(1, 9).map(number => <PlayNumber 
            key={number}
            number={number}
            status={numberStatus(number)}
            onNumberClick={onNumberClick} />)}
          </div>
        </div>
        <div className="timer">Time Remaining: {secondLeft}</div>
      </div>
    );
  };
  export default StarMatch;  