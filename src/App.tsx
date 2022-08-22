import { useState } from "react";
import Levels from "./components/Levels";
import Game from "./components/Game";
import useMap from "./hooks/useMap";
import { useAppDispatch } from "./redux";
import { setInitialMap } from "./redux/mapSlice";


const App = () => {
  const dispatch = useAppDispatch();

  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  const handleSelectLevel = (level: number) => {
    setSelectedLevel(level);
    setWebSocket(new WebSocket("wss://hometask.eg1236.com/game-pipes/"));
  };

  const reset = (): void => {
    setSelectedLevel(null);
    dispatch(setInitialMap([]))
  };
  return (
    <div>
      {selectedLevel ? (
        <Game
          onReset={reset}
          level={selectedLevel}
          socket={webSocket as WebSocket}
        />
      ) : (
        <Levels onSelect={handleSelectLevel} />
      )}
    </div>
  );
};

export default App;
