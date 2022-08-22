import { useState } from "react";
import Levels from "./components/Levels";
import Game from "./components/Game";

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  const handleSelectLevel = (level: number) => {
    setSelectedLevel(level);
    setWebSocket(new WebSocket("wss://hometask.eg1236.com/game-pipes/"));
  };
  return (
    <div>
      {selectedLevel ? (
        <Game level={selectedLevel} socket={webSocket as WebSocket} />
      ) : (
        <Levels onSelect={handleSelectLevel} />
      )}
    </div>
  );
};

export default App;
