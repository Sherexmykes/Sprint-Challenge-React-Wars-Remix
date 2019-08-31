import React from "react";
import Gender from "./Gender";
import BirthYear from "./BirthYear";
import styled from "styled-components";
import EyeColor from "./EyeColor";
import HairColor from "./HairColor";
import Height from "./Height";

const Cards = styled.div`
  border: 2px solid black;
  width: 300px;
  margin: 20px auto;
  background: rgba(125, 168, 12, 0.5);
`;
const Names = styled.h2`
  color: blue;
`;

export default function CharCards(props) {
  console.log("card: props: ", props);
  return (
    <Cards>
      <Names> {props.chars.name}</Names>
      <Gender gender={props.chars.gender} />
      <BirthYear birthyear={props.chars.birth_year} />
      <HairColor haircolor={props.chars.hair_color} />
      <EyeColor eyecolor={props.chars.eye_color} />
      <Height height={props.chars.height} />
    </Cards>
  );
}