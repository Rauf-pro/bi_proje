import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import FinishData from "../Components/FinishData";
import { Header } from "../Components/Header";
import { Title } from "../Components/Title";
import { Mainlayout } from "../styles/Layouts";
import SelectOptions from "../Components/SelectOptions";
import axios from "axios";
import UseFetchData from "../hooks/UseFetchData";

export const DashboardPage = () => {
  const [formData, setFormData] = useState({
    category: [],
    indicator: [],
    country: [],
    year: [],
  });

  const [apiData, setApiData] = useState([]);

  const onChange = (event) => {
    console.log(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    const valueData = Object.fromEntries(datas.entries());
    console.log(valueData, 'submit data')

     axios.get( `http://192.168.0.113:8000/business-intelligence-list/?countries__codes=${valueData.country}&categories=${valueData.category}&indicators=${valueData.indicator}&years__year=${valueData.year}`).then((res) =>  {setApiData(res.data); console.log(res.data, "dsfdsdsd")} ).catch((err) => console.log(err))
    
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

  const data = [];
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
        />
        <Row>
          <Col xl={6} lg={6} md={12} sm={12}>
            <FinishData data={apiData} />
          </Col>
          <Col xl={6} lg={6}>
          
          </Col>
        </Row>
        </Container>
      </DashboardStyled>
      
    </Mainlayout>
  );
};
const DashboardStyled = styled.div``;
