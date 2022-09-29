import React from "react";
import styled from "styled-components";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import InputRange from "react-input-range";

function SelectOptions({ formData, onSubmit, onChange, onChangeCompletes }) {
  const { category, indicator, country, year } = formData;
  const [val, setVal] = React.useState({ min: 0, max: 195 });
  const animatedComponents = makeAnimated();
  const options = country.map((count) => ({
    value: count.code,
    label: count.name,
  }));

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
                  formatLabel={(value) => null}
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
                  marginTop: "-2.5rem",
                  fontWeight: 500,
                  color: "#3663B5",
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
      align-items: center;
      @media screen and (max-width: 991px) {
        flex-direction: column;
      }

      select {
        width: 250px;
        font-size: 16px;
        border: none;
        padding: 10px;
        @media (max-width: 991px) {
         
        }
        @media (min-width: 992px) and (max-width: 1024px) {
          width: 140px;
        }
        @media (min-width: 1025px) and (max-width: 1199px) {
          width: 140px;
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
          width: 170px;
        }
        @media (min-width: 1400px) and (max-width: 1576px) {
          width: 200px;
        }

        option {
          font-size: 16px;
        }
      }
      .country-sel {
        width: 250px;
        @media (min-width: 992px) and (max-width: 1024px) {
          width: 160px;
        }
        @media (min-width: 1025px) and (max-width: 1199px) {
          width: 200px;
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
          width: 200px;
        }
        @media (min-width: 1400px) and (max-width: 1576px) {
          width: 200px;
        }
      }
      .App {
        text-align: center;
        width: 250px;
        background: #fff;
        padding: 20px 10px;
        /* margin: 0 auto; */
        @media (min-width: 992px) and (max-width: 1024px) {
          width: 150px;
        }
        @media (min-width: 1025px) and (max-width: 1199px) {
          width: 150px;
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
          width: 180px;
        }
        @media (min-width: 1400px) and (max-width: 1576px) {
          width: 180px;
        }
      }
      .input-range__slider {
        border-radius: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1rem * 2;
        width: 1rem * 2;

        margin-left: 1rem * -1;
        margin-top: 1rem * -1;
        outline: none;
        position: absolute;
        top: -8px;
        transition: left 200ms ease-out;
        will-change: left;

        &::before {
          background: #ffffff;
          border-radius: 100%;
          display: block;
          content: "";
          height: 1rem;
          /* width: 1rem; */
          transition: left 200ms ease-out;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);
          will-change: transform, box-shadow;
          border: 2px solid #3663b5;
        }

        &:active::before {
          transform: scale(1.15);
        }

        &:focus::before {
          box-shadow: 0 0 0 5px rgba(#3663b5, 0.2);
        }

        .input-range--disabled &::before {
          background: #cccccc;
          border: 1px solid #cccccc;
          box-shadow: none;
          transform: none;
        }
      }
      .input-range__label-container {
        display: none;
        .input-range__label--min,
        .input-range__label--max {
          display: none;
        }
      }

      /* _input-range-track.scss */
      .input-range__track {
        background: #e6e9ea;
        border-radius: 3px;
        cursor: pointer;
        display: block;
        height: 3px;
        position: relative;
        transition: left 200ms ease-out, width 200ms ease-out;
        will-change: left, width;

        .input-range--disabled & {
          background: #e6e9ea;
        }
      }

      .input-range__track--background {
        margin-top: -0.5 * 3px;
        top: 50%;
        position: absolute;
        left: 0;
        right: 0;
      }

      .input-range__track--active {
        background: #3663b5;
      }

      /* input-range */
      .input-range {
        height: 1rem;
        position: relative;
        width: 95%;
       
      }

      button {
        border: none;
        font-size: 16px;
        background: #3386ff;
        color: #fff;
        padding: 10px 15px;
        border-radius: 6px;
        @media (min-width: 992px) and (max-width: 1024px) {
          width: 150px;
          padding: 10px;
        }
        @media (min-width: 1025px) and (max-width: 1199px) {
          width: 120px;
          padding: 10px;
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
          padding:  10px;
          width: 120px;
        }
      }
    }
  }
`;
export default SelectOptions;
