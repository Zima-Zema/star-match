import { useEffect, useState } from 'react';
import { random, randomSumIn, range, sum } from '../utils/utils';

export default function useGameState() {
    const [starts, setStars] = useState(random(1, 9));
    const [availableNums, setAvailableNums] = useState(range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondLeft, setSecondLeft] = useState(10);

    useEffect(() => {
        if(secondLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondLeft(secondLeft - 1);
            }, 1000);

            return () => clearTimeout(timerId);
        }
    });

    const setGameState = (newCandidateNums) => {
        if(sum(newCandidateNums) !== starts) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(available => !newCandidateNums.includes(available));
            setStars(randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return {
        starts,
        availableNums,
        candidateNums,
        secondLeft,
        setGameState
    }
}