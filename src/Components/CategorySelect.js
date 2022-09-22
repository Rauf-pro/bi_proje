import React, {useState} from 'react'
import styled from 'styled-components'

export const CategorySelect = () => {
    const [selectedCategory,setSelectedCategory] = useState([]);

    function handleSelectChange(event) {
        setSelectedCategory(event.target.value);
    }
  return (
    <CategorySelectStyled>
        <select value={selectedCategory} onChange={handleSelectChange}>
            <option value="one">(All)</option>
            <option value="two">United States</option>
            <option value="three">China</option>
        </select>
    </CategorySelectStyled>
  )
}

const CategorySelectStyled = styled.div`
   select{
    font-size: 16px;
    border: none;
    padding: 10px;

    option{
    font-size: 16px;

    }
    
   }

`;