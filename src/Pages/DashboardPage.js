import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import BarChart from "../Components/BarChart";
import LineChart from "../Components/LineChart"
import { Header } from "../Components/Header";
import { Title } from "../Components/Title";
import { Mainlayout } from "../styles/Layouts";
import SelectOptions from "../Components/SelectOptions";
import axios from "axios";

export const DashboardPage = () => {
  const [formData, setFormData] = useState({
    category: [],
    indicator: [],
    country: [],
    year: [],
  });
  const [countriesValue, setCountriesValue] = useState([]);
  const [rangeValue, setRangeValue] = useState({});
  
  const [apiData, setApiData] = useState([]);
  const [fullApiData, setFullApiData] = useState([]);

  const onChange = (val) => setCountriesValue(val);
  
  const onChangeCompletes = (arg) => setRangeValue(arg)



  const onSubmit = (event) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    const valueData = Object.fromEntries(datas.entries());
    console.log(rangeValue, "range val")
    let count
    let min
    let max
    // eslint-disable-next-line no-mixed-operators
    if(countriesValue.length > 0){
      count = `${countriesValue.map((c) => c.value )}`
    }else{
      count = ''
      
    }

    if(rangeValue.min && rangeValue.max){
      min = rangeValue.min
      max = rangeValue.max
    }else{
      min = ''
      max = ''
    }
     axios.get( `http://192.168.0.113:8000/business-intelligence-list/?countries__codes=${count}&categories=${valueData.category}&indicators=${valueData.indicator}&years__year=${valueData.year}&min_rank=${min}&max_rank=${max}`).then((res) =>  {setApiData(res.data); console.log(res.data, "dsfdsdsd")} ).catch((err) => console.log(err))
     axios.get( `http://192.168.0.113:8000/custom-business-intelligence-list/?countries__codes=${count}&categories=${valueData.category}&indicators=${valueData.indicator}`).then((res) =>  {setFullApiData(res.data); console.log(res.data, "dsfdsdsd")} ).catch((err) => console.log(err))
  };
  
  const fetchData = () => {
    axios.get("http://192.168.0.113:8000/category-list/").then((response) => {
      setFormData((prevState) => ({
        category: response.data,
        indicator: [...prevState.indicator],
        country: [...prevState.country],
        year: [...prevState.year],
      }));
    });
    axios.get("http://192.168.0.113:8000/year-list/").then((response) => {
      setFormData((prevState) => ({
        category: [...prevState.category],
        indicator: [...prevState.indicator],
        country: [...prevState.country],
        year: response.data,
      }));
    });

    axios.get("http://192.168.0.113:8000/indicator-list/").then((response) => {
      setFormData((prevState) => ({
        category: [...prevState.category],
        indicator: response.data,
        country: [...prevState.country],
        year: [...prevState.year],
      }));
    });

    axios.get("http://192.168.0.113:8000/country-list/").then((response) => {
      setFormData((prevState) => ({
        category: [...prevState.category],
        indicator: [...prevState.indicator],
        country: response.data,
        year: [...prevState.year],
      }));
    });
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Mainlayout>
      <DashboardStyled>
        <Title title={"GDP Dashboard"} />
        <Header />
        <Container fluid>
        <SelectOptions
          onChange={onChange}
          onSubmit={onSubmit}
          formData={formData}
          onChangeCompletes={onChangeCompletes}

        />
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
          <BarChart sdata={apiData} />
          </Col>
          <Col xl={6} lg={6}>
            <LineChart sdata={fullApiData} years={formData.year} />
          </Col>
        </Row>
        </Container>
      </DashboardStyled>
      
    </Mainlayout>
  );
};
const DashboardStyled = styled.div``;
