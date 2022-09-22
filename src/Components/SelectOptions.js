import React, { useState } from "react";
import styled from "styled-components";

function SelectOptions() {
  const [formData, setFormData] = useState({
    category:"",
    year:1992,
    indicator:"",
    country:""


  });
  const {
    category,
    year,
    indicator,
    country
  } = formData;
  return (
    <SelectOptionsStyled>
      <div className="top-selects-wrapper">
        <form>
          <div className="category-sel">
            <select name="" id="category">
              <option value="">All</option>
              {category.map((cat) => <option value={cat.id}>{cat.name}</option> )}
            </select>
          </div>
          <div className="year-sel">
            <select name="" id="year">
              <option value="">All</option>
            </select>
          </div>
          <div className="indicator-sel">
            <select name="" id="indicator">
              <option value="">All</option>
            </select>
          </div>
          <div className="country-sel">
            <select name="" id="country">
              <option value="">All</option>
            </select>
          </div>
        </form>
      </div>
    </SelectOptionsStyled>
  );
}
const SelectOptionsStyled = styled.div``;
export default SelectOptions;
