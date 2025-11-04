import { GameProvider } from "./context/GameContext"
import Game from './components/Game'

function App() {


  return (
    <GameProvider>
      <h1>Snake Game</h1>
    </GameProvider>
  )
}

export default App
