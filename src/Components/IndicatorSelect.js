import React, {useState} from 'react'
import styled from 'styled-components';

export const IndicatorSelect = () => {
    const [selectedIndicator,setSelectedIndicator] = useState([]);

    function handleSelectChange(event) {
        setSelectedIndicator(event.target.value);
    }
  return (
    <InidcatorSelectStyled>
        <select value={selectedIndicator} onChange={handleSelectChange}>
            <option value="one">GDP</option>
            <option value="two">GDP</option>
            <option value="three">PGD</option>
        </select>
    </InidcatorSelectStyled>
  )
}

const InidcatorSelectStyled = styled.div`
select{
    font-size: 16px;
    border: none;
    padding: 10px;


    option{
    font-size: 16px;

    }
}

`;