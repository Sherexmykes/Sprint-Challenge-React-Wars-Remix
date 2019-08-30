import React from "react";
import styled from "styled-components";

const CharColorMF = styled.h3`
  color: ${props => (props.gender === "male" ? "blue" : "pink")};
`;

export default function CharacterGender(props) {
  return <CharColorMF>Gender: {props.gender}</CharColorMF>;
}