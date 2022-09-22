import React from 'react';
import styled from 'styled-components';

export const Title = ({title}) => {
  return (
    <TitleStyled>
        <h2>{title}</h2>
    </TitleStyled>
  )
}

const TitleStyled = styled.div`
margin-bottom: 20px;



`;