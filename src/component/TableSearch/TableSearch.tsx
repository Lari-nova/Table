import React, { useState, ChangeEvent } from "react";

interface Props {
	onSearch: (value: string) => void
}

const TableSearch = ({ onSearch }: Props) => {
	const [value, setValue] = useState('');

	const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	};

	return (
		<>
			<div className="input-group mb-3 mt-3">
				<div className="input-group-prepend">
					<button
						className="btn btn-outline-secondary"
						onClick={() => onSearch(value)}
					>
						Найти
					</button>
				</div>
				<input
					type="text"
					className="form-control"
					onChange={valueChangeHandler}
					value={value}
				/>
			</div>
		</>
	)
};

export default TableSearch;
