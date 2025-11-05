import { createContext, useContext, useState, useRef } from "react";
import { INITIAL_DIRECTION, INITIAL_FOOD, INITIAL_SNAKE } from "../constants/gameConfig";



const GameContext = createContext(null);

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("useGame must be within a GameProvider");
    }
    return context;
};

export const GameProvider = ({ children }) => {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [food, setFood] = useState(INITIAL_FOOD);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const directionQueue = useRef([]); //mieux pour l'optimisation pour ne pas recharger le composant à chaque déplacement
    const currentDirection = useRef(INITIAL_DIRECTION);

    const value = {

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
    }



    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
};

