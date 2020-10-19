import React from "react";
import styled from "styled-components";

export const Loader = () => (
	<DualRing />
);

const DualRing = styled.div`
	width: 64px;
  height: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
	&:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid rgb(40, 3, 253);
    border-color: rgb(40, 3, 253) transparent rgb(40, 3, 253) transparent;
  	animation: DualRing 1.2s linear infinite;
	}
	@keyframes DualRing {
  	0% {
    	transform: rotate(0deg);
  	}
  	100% {
    	transform: rotate(360deg);
  	}
  }
`;
