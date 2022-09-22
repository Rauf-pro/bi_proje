import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

export const CountrySelect = () => {
    const [selectedCountry,setSelectedCountry] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5000/country-list", { method: "GET", redirect: "follow" })
          .then((res) => res.json())
          .then((json) => {
            setSelectedCountry(json)
            
          })
          .catch((err) => console.log(err));
      }, []);
    
    function handleSelectChange(event) {
        setSelectedCountry(event.target.value);
    }
  return (
   
    <CountrySelectStyled>
        <select  onChange={handleSelectChange}>
            <option value="Select a Country">(All)</option>
            {selectedCountry.map((country) => <option >{country.label}</option> )}
            
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