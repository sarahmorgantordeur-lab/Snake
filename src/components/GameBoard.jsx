import { Cell } from '../Cell';
import { GRID_SIZE, CELL_SIZE } from '../constants/gameConfig';
import { usegame } from '../context/GameContext';


export const GameBoard = () => {

    const { snake, food } = useGame() ;

    const isSnake = (x, y) => {
        return snake.some((segment) => segment.x === x && segment.y === y);
    };

    const iseSnakeHead = (x, y) => {
        return snake[0].x === x && snake[0].y === y;
    };

    const isFood = (x, y) => {
        return food.x === x && food.y === y;
    };
    
    return (
    <div>
    

    </div>
    );
};