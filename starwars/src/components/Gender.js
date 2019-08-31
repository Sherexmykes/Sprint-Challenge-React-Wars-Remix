import React from "react";
import styled from "styled-components";

const CharColorMF = styled.h2`
  color: ${props => (props.gender === "female" ? "orange" : "pink")};
`;

export default function CharGender(props) {
  return <CharColorMF>Gender: {props.gender}</CharColorMF>;
}