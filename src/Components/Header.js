import React from "react";
import styled from "styled-components";
import SelectOptions from "./SelectOptions";

export const Header = () => {
  return (
    <HeaderStyled>
      <SelectOptions />
    </HeaderStyled>
  );
};
const HeaderStyled = styled.div`
  
`;
