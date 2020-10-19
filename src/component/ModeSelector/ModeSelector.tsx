import React from "react";

interface Props {
	onSelect: (url: string) => void
}

const ModeSelector = ({ onSelect }: Props) => {
	const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
	const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

	return (
		<div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
			<button onClick={() => onSelect(smallUrl)} className="btn btn-success">32 элемента</button>
			<button onClick={() => onSelect(bigUrl)} className="btn btn-danger">1000 элементов</button>
		</div>
	)
};

export default ModeSelector;
