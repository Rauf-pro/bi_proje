import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import axios from "axios"

export const IndicatorSelect = () => {
    const [selectedIndicator,setSelectedIndicator] = useState([]);

    const fetchData = () => {
        axios.get("http://192.168.0.111:8000/indicator-list/").then(response => {
            setSelectedIndicator(response.data)
        })
      }
      useEffect(() => {
        fetchData()
      }, [])


    function handleSelectChange(event) {
        setSelectedIndicator(event.target.value);
    }
  return (
    <InidcatorSelectStyled>
        <select value={selectedIndicator} onChange={handleSelectChange}>
        <option>All Indicator</option>
        {selectedIndicator.map((indicator) => <option value={indicator.id}>{indicator.name}</option> )}
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
