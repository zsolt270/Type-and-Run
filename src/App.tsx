import { useState } from "react";
import MainChar from "./components/MainChar";
import Zombies from "./components/Zombies";
import Modal from "./components/ui/Modal";
import { GameStatus } from "./types";

function App() {
  const [charStatus, setCharStatus] = useState<GameStatus["status"]>("idle");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {isPlaying ? "" : <Modal setGameStatus={setIsPlaying} />}
      <Zombies status={charStatus} />
      <MainChar status={charStatus} />
    </>
  );
}

export default App;
