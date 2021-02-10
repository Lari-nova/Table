import React, { useState, ChangeEvent } from "react";
import './search.css';
import styled from "styled-components";

interface Props {
	onSearch: (value: string) => void,
 	onAddClick: () => void
}

const TableSearch = ({ onSearch, onAddClick }: Props) => {
	const [value, setValue] = useState('');

	const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	};

	return (
		<>
			<div className={'wrapper'}>
			 	<div className={'form'}>
					<input
								type={'text'}
								className={'form-control'}
								onChange={valueChangeHandler}
								value={value}
					/>
					<div className={'button'} onClick={() => onSearch(value)}>Найти</div>
				</div>
			 <AddButton onClick={() => onAddClick}>Добавить</AddButton>
			</div>
		</>
	)
};

const AddButton = styled.div`
  margin: 5px;
	float: left;
	font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
	&:hover { 
	background: rgb(53, 167, 110); 
	}
`;

export default TableSearch;
