import style from "./css.modules/zombies.module.css";

type ZombieProps = {
	status: "idle" | "run" | "dead";
	type: "women" | "man";
};

export default function Zombie({ status, type }: ZombieProps) {
	if (status === "idle") {
		return (
			<div
				className={type == "women" ? style.ladyZombieIdle : style.manZombieIdle}
			></div>
		);
	} else if (status === "run") {
		return (
			<div
				className={type == "women" ? style.ladyZombieRun : style.manZombieRun}
			></div>
		);
	} else {
		return (
			<div
				className={
					type == "women" ? style.ladyZombieAttack : style.manZombieAttack
				}
			></div>
		);
	}
}
