import style from "./css.modules/modal.module.css";

export default function Modal({ setGameStatus }: { setGameStatus: (isPlaying: boolean) => void }) {
  return (
    <div className={style.customModalBG}>
      <div className={style.customModalDialog}>
        <h1>valami</h1>
      </div>
    </div>
  );
}
