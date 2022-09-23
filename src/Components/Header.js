import React from "react";
import styled from "styled-components";
import SelectOptions, { FinishData } from "./SelectOptions";

export const Header = () => {
  return (
    <HeaderStyled>
      <SelectOptions />
    </HeaderStyled>
  );
};
const HeaderStyled = styled.div`
  
`;
