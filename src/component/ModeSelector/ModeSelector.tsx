import React from "react";
import { bigUrl, smallUrl } from "../../data/urls";
import styled from "styled-components";

interface Props {
	onSelect: (url: string) => void
}

const ModeSelector = ({ onSelect }: Props) => {
	return (
		<Container>
        <SmallButton onClick={() => onSelect(smallUrl)}>32 элемента</SmallButton>
        <BigButton onClick={() => onSelect(bigUrl)}>1000 элементов</BigButton>
		</Container>
	)
};

const Container = styled.div`
	align-items: center;
	vertical-align: center;
	display: inline-block;
`;

const SmallButton = styled.div`
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

const BigButton = styled.div`
	margin: 5px;
	float: right;
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

export default ModeSelector;
