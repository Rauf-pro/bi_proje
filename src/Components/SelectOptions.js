import React from "react";
import styled from "styled-components";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    track: {
      color: "#8f23b3",
      height: "3px",
      borderRadius: "3px"
    },
    rail: {
      opacity: 1,
      backgroundColor: "#e6e9ea",
      height: "3px",
      borderRadius: "3px"
    },
    thumb: {
      color: "white",
      width: "1rem",
      height: "1rem",
      marginTop: "-6px",
      border: "2px solid #8f23b3",
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.09)",
      "&$focusVisible,&:hover": {
        boxShadow: "0 0 0 8px rgba(155, 38, 182, 0.2)"
      },
      "&$active": {
        boxShadow: "0 0 0 14px rgba(155, 38, 182, 0.2)"
      }
    },
    // don't remove the following lines
    focusVisible: {},
    active: {}
  },
  { name: "MuiSlider" }
);

function SelectOptions({ formData, onSubmit, onChange }) {
  const { category, indicator, country, year } = formData;
  const [val2, setVal2] = React.useState([0, 100]);
  console.log(val2, "sddsdsddfvvb2323")
  const animatedComponents = makeAnimated();
  const options = country.map((count) => ({ value: count.code, label: count.name }))
  const classes = useStyles();

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

          <div className="App" style={{ maxWidth: "100vw" }}>
      {/* <h1>Range inputs</h1> */}

      <div>
        <div>
          <Slider
            //disabled
            classes={classes}
            step={5}
            min={0}
            max={100}
            value={val2}
            onChange={(ev, v) => setVal2(v)}
            // onChangeCommitted={(ev, v) => console.log(v,"12323dddsd")}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1rem 0",
            fontWeight: 500,
            color: "#8f23b3"
          }}
        >
          <div>{`${val2[0]}`}</div>
          <div>{`${val2[1]}`}</div>
        </div>
        
      </div>
    </div>
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
