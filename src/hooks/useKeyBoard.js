import { useGame } from '../context/GameContext';
import { KEYS, DIRECTION } from '../constants/gameConfig';
import { useEffect } from 'react';


export const useKeyBoard = () => {


    const { gameStarted, setGameStarted, directionQueue, currentDirection } = useGame ();

    useEffect(() => {
        const handleKeyPress = (event) => {
            // démarrer le jeu si ce n'est pas djà le cas
            if (!gameStarted && event.key.startsWith('Arrow')) { // la fonction startWith vérifie que la touche qu'on utilise son nom commence bien par 'Arrow'
                setGameStarted(true);
            };

            const lastDirection =
                directionQueue.current.length > 0 ?
                    directionQueue.current[directionQueue.current.length -1] :
                    currentDirection.current;

            let newDirection = null;
            switch (event.key) { //Empêche d'aller dans la direction opposée
                case KEYS.ARROW_UP:
                    if (lastDirection.y === 0) newDirection = DIRECTION.UP;
                    break;
                case KEYS.ARROW_DOWN:
                    if (lastDirection.y === 0) newDirection = DIRECTION.DOWN;
                    break;
                case KEYS.ARROW_LEFT:
                    if (lastDirection.x === 0) newDirection = DIRECTION.LEFT;
                    break;
                case KEYS.ARROW_RIGHT:
                    if (lastDirection.x === 0) newDirection = DIRECTION.RIGHT;
                    break;
                default:
                    break;
            };

            if (newDirection && directionQueue.current.length < 2) {
                directionQueue.current.push(newDirection);
            };
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [gameStarted, directionQueue, currentDirection, setGameStarted]);
};