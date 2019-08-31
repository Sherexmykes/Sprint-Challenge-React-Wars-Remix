import React from "react";
import styled from "styled-components";

const EyeColor = styled.h3`
  color: brown;
`;

export default function CharEyeColor(props) {
  return <EyeColor>EyeColor: {props.eyecolor}</EyeColor>;
}