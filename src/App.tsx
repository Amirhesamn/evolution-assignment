import { useState } from "react";
import Levels from "./components/Levels";

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const handleSelectLevel = (level: number) => {
    setSelectedLevel(level);
  };
  return (
    <div>{selectedLevel ? null : <Levels onSelect={handleSelectLevel} />}</div>
  );
};

export default App;
