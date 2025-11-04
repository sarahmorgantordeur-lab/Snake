import { useGame } from '../context/GameContext';
import { GAME_SPEED, GAME_SIZE } from '../constants/gameConfig';


export const useGameLoop = () => {
    const { 
        
        // State
        snake,
        direction,
        food,
        gameOver,
        score,
        gameStarted,

        // Setters
        setSnake,
        setDirection,
        setFood,
        setGameOver,
        setScore,
        setGameStarted,

        // Refs
        directionQueue,
        currentDirection,

    } = useGame();

    const generateLoop = useCallback((currentSnake) => {
        letNewFood;
        do {
            newFood = {
                x:Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            };
        } while (
            currentSnake.some(
                (segment) => segment.x === newFood.x && segment.y === newFood.y
            )
        );
        return newFood ;
    })
};