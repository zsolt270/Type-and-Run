import { GameStatus } from "../types";
import Zombie from "./Zombie";

export default function Zombies({ status }: GameStatus) {
  return (
    <div>
      <Zombie status={status} type='women' />
      <Zombie status={status} type='man' />
    </div>
  );
}
