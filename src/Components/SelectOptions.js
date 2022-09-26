import React from "react";
import styled from "styled-components";

function SelectOptions({ formData, onSubmit, onChange }) {
  const { category, indicator, country, year } = formData;

  return (
    <SelectOptionsStyled>
      <div className="top-selects-wrapper">
        <form onSubmit={onSubmit}>
          <div className="category-sel">
            <select name="category" id="category" onChange={onChange} required>
              <option value={category}>All</option>
              {category.map((cat) => (
                <option value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="indicator-sel">
            <select
              name="indicator"
              id="indicator"
              onChange={onChange}
              required
            >
              <option value="">All</option>
              {indicator.map((ind) => (
                <option value={ind.id}>{ind.name}</option>
              ))}
            </select>
          </div>
          <div className="year-sel">
            <select name="year" id="year" onChange={onChange} required>
              <option value="">All</option>
              {year.map((y) => (
                <option value={y.year}>{y.year}</option>
              ))}
            </select>
          </div>
          <div className="country-sel">
            <select name="country" id="country" onChange={onChange}>
              <option value="">All</option>
              {country.map((count) => (
                <option value={count.code}>{count.name}</option>
              ))}
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
