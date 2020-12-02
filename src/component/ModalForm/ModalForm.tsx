import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
	handleFormSubmit: () => void,
	handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void,
	id: string,
	firstName: string,
	lastName: string,
	email: string,
	phone: string,
}

const ModalForm = ({handleFormSubmit, handleInputChange, id, firstName, lastName, email, phone}: Props) => {
	return (
		<Container>
			<h3>Add a new item to the table:</h3>
			<div>
				<Label>
						ID:
					<Input id="id" value={id} type="text" name="id" onChange={handleInputChange} />
				</Label>
				<Label>
					First Name:
					<Input value={firstName} type="text" name="firstName" onChange={handleInputChange} />
				</Label>
				<Label>
					Last Name:
					<Input value={lastName} type="text" name="lastName" onChange={handleInputChange} />
				</Label>
				<Label>
					E-mail:
					<Input value={email} type="text" name="email" onChange={handleInputChange} />
				</Label>
				<Label>
					Phone:
					<Input value={phone} type="text" name="phone" onChange={handleInputChange} />
				</Label>
				<Submit onClick={handleFormSubmit} type="submit" value="Submit">Add Item</Submit>
			</div>
		</Container>
	);
};

const Container = styled.div`
	padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px;
  margin: 20px auto;
  text-align: center;
  position: absolute;
  z-index: 1;
  background-color: white;
`;

const Label = styled.label`
	display: block;
  margin: 15px 0;
`;

const Input = styled.input`
	margin-left: 10px;
`;

const Submit = styled.button`
	width: 250px;
  padding: 15px 0;
  background-color: tomato;
  border: none;
  border-radius: 4px;
  color: white;
  margin: 25px 0;
`;

export default ModalForm;




