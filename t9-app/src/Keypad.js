import React from 'react';
import './Keypad.css';

function Keypad({ handleClick }) {
	return (
		<div className="keyboard">
			<div className="row">
				<button onClick={() => handleClick('1')}>1</button>
				<button onClick={() => handleClick('2')}>
					2<br />
					ABC
				</button>
				<button onClick={() => handleClick('3')}>
					3<br />
					DEF
				</button>
			</div>
			<div className="row">
				<button onClick={() => handleClick('4')}>
					4<br />
					GHI
				</button>
				<button onClick={() => handleClick('5')}>
					5<br />
					JKL
				</button>
				<button onClick={() => handleClick('6')}>
					6<br />
					MNO
				</button>
			</div>
			<div className="row">
				<button onClick={() => handleClick('7')}>
					7<br />
					PQRS
				</button>
				<button onClick={() => handleClick('8')}>
					8<br />
					TUV
				</button>
				<button onClick={() => handleClick('9')}>
					9<br />
					WXYZ
				</button>
			</div>
			<div className="row">
				<button onClick={() => handleClick('*')}>*</button>
				<button onClick={() => handleClick('0')}>0</button>
				<button onClick={() => handleClick('#')}>#</button>
			</div>
		</div>
	);
}

export default Keypad;
