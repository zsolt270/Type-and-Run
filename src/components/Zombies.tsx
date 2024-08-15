import Zombie from "./Zombie";

interface ZombiesProps {
	status: "idle" | "run" | "dead";
}

export default function Zombies({ status }: ZombiesProps) {
	return (
		<div>
			<Zombie
				status={status}
				type='women'
			/>
			<Zombie
				status={status}
				type='man'
			/>
		</div>
	);
}
