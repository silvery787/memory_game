import React from "react";
import "./Score.css";

const Score = props => (
	<div className='container score-panel'>
		<div className='row'>
			<div className='col-lg-4'>
				<p className='title'>Clicky-Cat</p>
			</div>
			<div className='col-lg-2'>
				<span className=
					{ props.msg==="You Loose!" ? "message-red" : "message-green" }
				>
				{props.msg}</span>
			</div>
			<div className='col-lg-2'>
				<span className="score">{"  "}Score: {props.score}</span>
			</div>
			<div className='col-lg-4'>
				<p>Total: 
				wins: <span className="message-green">{props.wins},{" "}</span>
				loses: <span className="message-red">{props.loses}</span>
				</p>
			</div>
		</div>
	</div>
);

export default Score;
