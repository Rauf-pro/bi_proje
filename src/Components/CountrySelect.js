import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from "axios"

export const CountrySelect = () => {
    const [selectedCountry,setSelectedCountry] = useState([])
    
    const fetchData = () => {
        axios.get("http://192.168.0.111:8000/country-list/").then(response => {
            setSelectedCountry(response.data)
        })
      }
      useEffect(() => {
        fetchData()
      }, [])
    
    function handleSelectChange(event) {
        setSelectedCountry(event.target.value);
    }
  return (
   
    <CountrySelectStyled>
        <select  onChange={handleSelectChange}>
            <option value="Select a Country">(All)</option>
            {selectedCountry.map((country) => <option value={country.code}>{country.name}</option> )}
            
        </select>
    </CountrySelectStyled>
  )
}

const CountrySelectStyled = styled.div`
select{
    font-size: 16px;
    border: none;
    padding: 10px;


    option{
    font-size: 16px;

    }
}


// `;