
import React from 'react'
import styled from 'styled-components'
import { CategorySelect } from './CategorySelect';
import { CountrySelect } from './CountrySelect';
import { IndicatorSelect } from './IndicatorSelect';
import { YearSelect } from './YearSelect';

export const Header = () => {
  return (
    <HeaderStyled>
       <CategorySelect/>
        <YearSelect/>
        <IndicatorSelect/>
        <CountrySelect/>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.div`
display: flex;
gap: 10px;



`;