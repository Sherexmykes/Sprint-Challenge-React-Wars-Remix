import React from "react";
import styled from "styled-components";



const Color = styled.h3`
  color: blue;
`;

export default function BirthYear(props) {
  return <Color>BirthYear: {props.birthyear}</Color>;
}