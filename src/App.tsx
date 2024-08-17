import { useState } from "react";
import MainChar from "./components/MainChar";
import Zombies from "./components/Zombies";
import Modal from "./components/ui/Modal";

function App() {
	const [charStatus, setCharStatus] = useState<"idle" | "run" | "dead">("idle");
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<>
			{isPlaying ? "" : <Modal />}
			<Zombies status={charStatus} />
			<MainChar status={charStatus} />
		</>
	);
}

export default App;
