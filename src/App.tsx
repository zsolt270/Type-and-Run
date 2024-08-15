import { useState } from "react";
import MainChar from "./components/MainChar";

function App() {
	const [charStatus, setCharStatus] = useState<"idle" | "run" | "dead">("dead");

	return (
		<>
			<MainChar />
		</>
	);
}

export default App;
