import { GameStatus } from "../types";
import style from "./css.modules/mainChar.module.css";

export default function MainChar({ status }: GameStatus) {
  // ha statusz dead akkor returnolje a divvet a mainchar dead anime classal
  //ha tatusz meg nem kezdődött a game akkor az idle anime classal
  //ha elkezdődött akkor a run classal és ugyan ezek szerint a zombikat is

  if (status === "idle") {
    return <div className={style.mainCharIdle}></div>;
  } else if (status === "run") {
    return <div className={style.mainCharRun}></div>;
  } else {
    return <div className={style.mainCharDie}></div>;
  }
}
