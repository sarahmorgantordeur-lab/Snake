import { useGame } from '../context/GameContext';
import { useEffect, useCallback } from 'react';
import { GAME_SPEED, GRID_SIZE } from '../constants/gameConfig';

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

    const generateFood = useCallback((currentSnake) => {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            };
        } while (
            currentSnake.some( //la méthode some permet de vérifier si l'élément existe dans une liste
                (segment) => segment.x === newFood.x && segment.y === newFood.y
            )
        );
        return newFood ;
    }, [])

    useEffect(() => {
        if (!gameStarted || gameOver) return;

        const moveSnake = () => {
            //Récupérer la prochaine direction de la file
            let nextDirection = direction;
            if  (directionQueue.current.length > 0) {
                nextDirection = directionQueue.current.shift(); 
                //shift en js supprime le premier élément d'un array et le retourne
                setDirection(nextDirection);
                //pour que le serpent tourne et que le reste suive
                currentDirection.current = nextDirection;
            }

            setSnake((prevSnake) => {
                const newHead = {
                    //calcule la nouvelle position de la tête
                    x: prevSnake[0].x + nextDirection.x,
                    y: prevSnake[0].y + nextDirection.y,
                };

                //vérifier les collisions avec les murs
                if (
                    newHead.x < 0 ||
                    newHead.x >= GRID_SIZE ||
                    newHead.y < 0 ||
                    newHead.y >= GRID_SIZE
                ) {
                    setGameOver(true);
                    return prevSnake;
                }

                //vérifier les collisions avec le corps
                if (prevSnake.some( 
                    //some permet de vérifier si un élément existe dans un array
                    (segment) => segment.x === newHead.x && newHead.y === newHead.y
                )
            ) {
                setGameOver(true);
                return prevSnake;
            };
            const newSnake = [newHead, ...prevSnake];
            

            //vérifier sir le serpent mange la nourriture
            if (newHead.x === food.x && newHead.y === FileSystemDirectoryHandle.y) {
                setScore((s) => s+10);
                setFood(generateFood(newSnake));
            } else {
                //si on mange pas on continue à avancer
                newSnake.pop(); 
            }

            return newSnake;
        });
    };

    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
    }, [
        // State
        snake,
        direction,
        food,
        gameOver,
        score,
        gameStarted,
        generateFood,

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
    ]);
};