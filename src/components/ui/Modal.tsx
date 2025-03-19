import style from "./css.modules/modal.module.css";

export default function Modal({ setGameStatus }: { setGameStatus: (isPlaying: boolean) => void }) {
  return (
    <div className={style.customModalBG}>
      <div className={style.customModalDialog}>
        <div className='row text-center'>
          <h2 className=''>Type and Run</h2>
        </div>
        <div className='row mt-3'>
          <p>This is a typer game about running from the danger of a zombie appocalyps.</p> <br />
          <p>The goal of the game is to</p>
          {/* Ez a modal lehetne inkább egy lapozható, ami leirja magát a játékot, a célját és lehetne talán belerakni egy-két képet a példaként */}
        </div>
      </div>
    </div>
  );
}
