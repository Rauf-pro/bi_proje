import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"

function SelectOptions() {
  const [formData, setFormData] = useState({
    category: [],
    indicator: [],
    country: [],
    year: [],
  });
  const { category, indicator,country, year } = formData;

  const fetchData = () => {
    axios.get("http://192.168.0.111:8000/category-list/").then(response => {
        
        setFormData(prevState => ({
            category:response.data,
            indicator:[ ...prevState.indicator],
            country:[ ...prevState.country],
            year:[ ...prevState.year],

        }))
    })
    axios.get("http://192.168.0.111:8000/year-list/").then(response => {
        setFormData(prevState => ({
            category:[ ...prevState.category],
            indicator:[ ...prevState.indicator],
            country: [ ...prevState.country],
            year:response.data
        }))
    })

    axios.get("http://192.168.0.111:8000/indicator-list/").then(response => {
        setFormData(prevState => ({
            category:[ ...prevState.category],
            indicator:response.data,
            country: [ ...prevState.country],
            year:[ ...prevState.year],
        }))
    })

    axios.get("http://192.168.0.111:8000/country-list/").then(response => {
        setFormData(prevState => ({
            category:[ ...prevState.category],
            indicator:[ ...prevState.indicator],
            country: response.data,
            year:[ ...prevState.year],
        }))
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

 function onChange(event) {
    console.log(event.target.value)
  }

  const onSubmit= (e) =>{
    e.preventDefault()
    console.log(formData)

  }

  return (
    <SelectOptionsStyled>
      <div className="top-selects-wrapper">
        <form onSubmit={onSubmit}>
          <div className="category-sel">
            <select name="" id="category" onChange={onChange}>
              <option value={category}>All</option>
              {category.map((cat) => <option value={cat.id}>{cat.name}</option> )}
            </select>
          </div>
          <div className="year-sel">
            <select name="" id="year" onChange={onChange}>
              <option value="">All</option>
              {year.map((y) => <option value={y.id}>{y.year}</option> )}
            </select>
          </div>
          <div className="indicator-sel">
            <select name="" id="indicator" onChange={onChange}>
              <option value="">All</option>
              {indicator.map((ind) => <option value={ind.id}>{ind.name}</option> )}
            </select>
          </div>
          <div className="country-sel">
            <select name="" id="country" onChange={onChange}>
              <option value="">All</option>
              {country.map((count) => <option value={count.code}>{count.name}</option> )}
            </select>
          </div>
          <button type="submit">Show data</button>
        </form>
      </div>
    </SelectOptionsStyled>
  );
}
const SelectOptionsStyled = styled.div`
  .top-selects-wrapper {
    form {
      display: flex;
      gap: 20px;

      select {
        width: 300px;
        font-size: 16px;
        border: none;
        padding: 10px;
        option {
          font-size: 16px;
        }
      }
    }
  }
`;
export default SelectOptions;
