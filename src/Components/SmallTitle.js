import React from 'react'
import styled from 'styled-components'

export const SmallTitle = ({title}) => {
  return (
    <SmallTitleStyled>
        <h3>{title}</h3>
    </SmallTitleStyled>
  )
}
const SmallTitleStyled = styled.div`
  h3{
    font-size: 20px;
  }


`;