import React from "react";
import styled from "styled-components";
import Select from 'react-select'
import "sanitize.css";
import "../style.scss";
import makeAnimated from 'react-select/animated';
import InputRange from "react-input-range";

function SelectOptions({ formData, onSubmit, onChange, onChangeCompletes }) {
  const { category, indicator, country, year } = formData;
  const [val, setVal] = React.useState({ min: 0, max: 195 });
  const animatedComponents = makeAnimated();
  const options = country.map((count) => ({ value: count.code, label: count.name }))

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
          <Select 
          options={options}
          closeMenuOnSelect={false}
          components={animatedComponents}
          onChange={onChange}
          isMulti
          />
          </div>

        {/* Range Start */}
          <div className="App">
                <div>
                
                  <div>
                    <InputRange
                      step={1}
                      formatLabel={value => null}
                      draggableTrack={false}
                      allowSameValues={false}
                      maxValue={195}
                      minValue={0}
                      value={val}
                      onChange={setVal}
                      onChangeComplete={onChangeCompletes}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                      fontWeight: 500,
                      color: "#8f23b3"
                    }}
                  >
                    <div>{`${val.min}`}</div>
                    <div>{`${val.max}`}</div>
                  </div>
                </div>
          </div>
        {/* Range Finish */}

          <button type="submit">Show data</button>
        </form>
      </div>
    </SelectOptionsStyled>
  );
}
const SelectOptionsStyled = styled.div`
margin-bottom: 20px;
  .top-selects-wrapper {
    form {
      display: flex;
      gap: 20px;
      @media screen and (max-width:991px){
         flex-direction: column;
        }

      select {
        width: 300px;
        font-size: 16px;
        border: none;
        padding: 10px;
        @media  (max-width: 991px){
          width: 100%;
        }
        @media (min-width: 992px) and (max-width: 1024px){
          width: 160px;
        }
        @media (min-width: 1025px) and (max-width: 1199px){
          width: 170px;
        }
        @media (min-width: 1200px) and (max-width: 1399px){
          width: 210px;
        }
        
        option {
          font-size: 16px;
        }
      }
      button{
        border: none;
        font-size: 16px;
        background: #3386FF;
        color: #fff;
        padding: 10px 15px;
        border-radius: 6px;
        @media (min-width: 1200px) and (max-width: 1399px){
          padding: 5px 10px;
        }
      }
    }
  }
`;
export default SelectOptions;
