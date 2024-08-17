export default function Modal() {
	return (
		<div
			className='modal show d-block'
			data-bs-backdrop='static'
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header justify-content-center'>
						<h1 className='modal-title fs-2'>About the game</h1>
					</div>
					<div className='modal-body'>The game is </div>
					<div className='modal-footer d-flex justify-content-center'>
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
