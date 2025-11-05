import { BackgroundEffects } from "./BackgroundEffects";
import { Controls } from "./Controls";
import { GameBoard } from "./GameBoard";
import { GameTitle } from "./GameTitle";
import { ScoreBoard } from "./ScoreBoard";
import { RestartButton } from "./RestartButton";
import { useKeyBoard } from "../hooks/useKeyBoard";
import { useGameLoop } from "../hooks/useGameLoop";

export default function Game() {
  useKeyBoard();
  useGameLoop();

  return (
    <div className="m-6 p-3 text-center space-y-3">
      <BackgroundEffects />
      <div className="inline-flex flex-col items-center gap-4 bg-[--color-board-bg]/80 px-8 py-4 rounded-2xl border-2 border-[--color-board-border]">
        <GameTitle />
        <div className="flex flex-wrap m-3 p-3 items-center">
          <div className="p-3 flex flex-col items-center">
            <ScoreBoard />
            <RestartButton />
            <Controls />
            {/* <div className="flex flex-col">
              <p>USE ARROW TO PLAY</p>
              <div className="flex flex-wrap m-3 p-2">
                <svg
                  className="m-2 transform rotate-0 border border-black rounded-lg w-[60px] h-[60px]"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V18M12 6L7 11M12 6L17 11"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <svg
                  className="m-2 transform rotate-90 border border-black rounded-lg w-[60px] h-[60px]"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V18M12 6L7 11M12 6L17 11"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <svg
                  className="m-2 transform rotate-180 border border-black rounded-lg w-[60px] h-[60px]"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V18M12 6L7 11M12 6L17 11"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <svg
                  className="m-2 transform rotate-270 border border-black rounded-lg w-[60px] h-[60px]"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V18M12 6L7 11M12 6L17 11"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>TIP: Eat food to grow and increase score</p>
            </div> */}
          </div>
          <GameBoard />
        </div>
      </div>
    </div>
  );
}
