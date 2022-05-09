import { Board } from './engine/board';
import './styles.css';
import { BasicGameConfig } from './game/config';
import { CatanBoard } from './view/CatanBoard';
import { Debug } from './Debug';

/**
 * What's next?
 * - Edge Component for tiles
 * - Corner/Edge suggestion style (dashed around the edge/corner?, player color)
 * - click-to-build (road or settlement)
 * - [Debug] Toggle diceNumbers
 */

export default function App() {
  const config = new BasicGameConfig();
  const board = new Board(2, config);

  return (
    <div className="App">
      <h1>Catan</h1>
      <Debug>
        <CatanBoard board={board} />
      </Debug>
    </div>
  );
}
