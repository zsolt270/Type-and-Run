import { useState } from "react";
import style from "./css.modules/mainChar.module.css";

export default function MainChar() {
	const [charStatus, setCharStatus] = useState<"idle" | "run" | "dead">("dead");
	// ha statusz dead akkor returnolje a divvet a mainchar dead anime classal
	//ha tatusz meg nem kezdődött a game akkor az idle anime classal
	//ha elkezdődött akkor a run classal és ugyan ezek szerint a zombikat is

	if (charStatus === "idle") {
		return <div className={style.mainCharIdle}></div>;
	} else if (charStatus === "run") {
		return <div className={style.mainCharRun}></div>;
	} else {
		return <div className={style.mainCharDie}></div>;
	}
}
