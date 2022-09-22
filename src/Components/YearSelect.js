import React, {useState} from 'react';
import styled from 'styled-components';


export const YearSelect = () => {
    const [selectedYear,setSelectedYear] = useState([]);

    function handleSelectChange(event) {
        setSelectedYear(event.target.value);
    }
  return (
    <YearSelectStyled>
        <select value={selectedYear} onChange={handleSelectChange}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
        </select>
    </YearSelectStyled>
  )
}

const YearSelectStyled = styled.div`
 select{
    font-size: 16px;
    border: none;
    padding: 10px;

    option{
    font-size: 16px;

    }
}
`;