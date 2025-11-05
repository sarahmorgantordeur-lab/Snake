import { useGame } from "../context/GameContext";
import { useCallback, useEffect } from "react";
import { GAME_SPEED, GRID_SIZE } from "../constants/gameConfig";

export const useGameLoop = () => {
  const {
    snake,
    setSnake,
    direction,
    setDirection,
    food,
    setFood,
    gameOver,
    setGameOver,
    gameStarted,
    setScore,
    directionQueue,
    currentDirection,
  } = useGame();

  // Générer une nouvelle position pour la nourriture
  const generateFood = useCallback((currentSnake) => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      currentSnake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  }, []);
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const moveSnake = () => {
      // Récupérer la prochaine direction de la file
      let nextDirection = direction;
      if (directionQueue.current.length > 0) {
        //shift retire le premier élément de la queue et le retourne
        nextDirection = directionQueue.current.shift();
        setDirection(nextDirection);
        currentDirection.current = nextDirection;
      }

      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + nextDirection.x,
          y: prevSnake[0].y + nextDirection.y,
        };

        // Vérifier les collisions avec les murs
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Vérifier les collisions avec le corps
        if (
          prevSnake.some(
            (segment) => segment.x === newHead.x && segment.y === newHead.y
          )
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Vérifier si le serpent mange la nourriture
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
  }, [
    direction,
    food,
    gameOver,
    gameStarted,
    generateFood,
    setSnake,
    setDirection,
    setFood,
    setGameOver,
    setScore,
    directionQueue,
    currentDirection,
  ]);
};
