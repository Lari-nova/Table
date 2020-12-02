import React from "react";
import { bigUrl, smallUrl } from "../../data/urls";
import styled from "styled-components";

interface Props {
	onSelect: (url: string) => void
}

const ModeSelector = ({ onSelect }: Props) => {
	return (
		<div>
			<div onClick={() => onSelect(smallUrl)}>32 элемента</div>
			<div onClick={() => onSelect(bigUrl)}>1000 элементов</div>
		</div>
	)
};

const Container = styled.div`
	align-items: center;
	vertical-align: center;
`;

const SmallButton = styled.div`
	
`;

const BigButton = styled.div`
	
`;

export default ModeSelector;
