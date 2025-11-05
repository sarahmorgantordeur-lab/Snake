import { BackgroundEffects } from "./BackgroundEffects";
import { Cell } from "./Cell";
import { Controls } from "./Controls";
import { GameBoard } from "./GameBoard";
import { GameTitle } from "./GameTitle";
import { ScoreBoard } from "./ScoreBoard";
import { RestartButton } from "./RestartButton";

export default function Game() {
  return (
    <div className="mb-6 text-center space-y-3">
      <div className="inline-flex items-center gap-4 bg-[--color-board-bg]/80 px-8 py-4 rounded-2xl border-2 border-[--color-board-border]">
        <GameTitle />
        <h1> -- Retro Edition --</h1>
        <div className="flex flex-col">
          <ScoreBoard />
          <RestartButton />
          <div className="flex flex-col">
            <p>Use Arrow keys to play</p>
            <div className="flex flex-wrap m-3">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6V18M12 6L7 11M12 6L17 11"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>TIP: Eat food to grow and increase score</p>
          </div>
        </div>
      </div>
    </div>
  );
}
