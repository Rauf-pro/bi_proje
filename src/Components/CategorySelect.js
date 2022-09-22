import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios"

export const CategorySelect = () => {
    const [selectedCategory,setSelectedCategory] = useState([]);
   

    const fetchData = () => {
      axios.get("http://192.168.0.111:8000/category-list/").then(response => {
        setSelectedCategory(response.data)
      })
    }
    useEffect(() => {
      fetchData()
    }, [])

   function handleSelectChange(event) {
      console.log(event.target.value)
    }
  return (
    <CategorySelectStyled>
        <select onChange={handleSelectChange}>
        <option>All Category</option>
        {selectedCategory.map((category) => <option value={category.id}>{category.name}</option> )}
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