import style from "./css.modules/modal.module.css";

export default function Modal() {
	return (
		<div
			className='modal show d-block'
			data-bs-backdrop='static'
		>
			<div
				className={`modal-dialog modal-dialog-centered text-white ${style.customModalDialog}`}
			>
				<div className={` modal-content ${style.customModalBG}`}>
					<div className='text-center'>
						<h1 className='modal-title fs-2'>About the game</h1>
					</div>
					<div className='modal-body'>The game is </div>
					<div className='d-flex justify-content-center'>
						<button
							type='button'
							className=''
						>
							Play
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
