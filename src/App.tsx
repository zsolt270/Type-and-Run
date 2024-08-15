import { useState } from "react";
import MainChar from "./components/MainChar";
import Zombies from "./components/Zombies";

function App() {
	const [charStatus, setCharStatus] = useState<"idle" | "run" | "dead">("idle");

	return (
		<>
			<Zombies status={charStatus} />
			<MainChar status={charStatus} />
		</>
	);
}

export default App;
