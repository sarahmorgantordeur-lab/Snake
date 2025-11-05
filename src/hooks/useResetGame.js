import { useGame } from "../context/GameContext";
import { INITIAL_DIRECTION, INITIAL_SNAKE, INITIAL_FOOD } from "../constants/gameConfig";
import { useCallback } from "react";



export const useResetGame = () => {

    const {
        setSnake,
        setDirection,
        setFood,
        setGameOver,
        setScore,
        setGameStarted,
        directionQueue,
        currentDirection
    } = useGame();

    const resetGame = useCallback(() => {
        setSnake(INITIAL_SNAKE);
        setDirection( INITIAL_DIRECTION);
        setFood(INITIAL_FOOD);
        setGameOver(false);
        setScore(0);
        setGameStarted(false);
        directionQueue.current = [];
        currentDirection.current = INITIAL_DIRECTION;
    }, [
        setSnake,
        setDirection,
        setFood,
        setGameOver,
        setScore,
        setGameStarted,
        directionQueue,
        currentDirection,
    ]);

    return resetGame;
}