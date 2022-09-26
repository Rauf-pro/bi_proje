import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
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

  const [finishData, setFinishData] = useState({});
  const [apiData, setApiData] = useState([]);

  const onChange = (event) => {
    console.log(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const datas = new FormData(event.target);
    const valueData = Object.fromEntries(datas.entries());
    setFinishData(valueData);
    const data = UseFetchData(
      `http://192.168.0.111:8000/business-intelligence-list/?categories=${finishData.category}&indicators=${finishData.indicator}&years__year=${finishData.year}`
    );
    setApiData(data);
  };

  const fetchData = () => {
    axios.get("http://192.168.0.111:8000/category-list/").then((response) => {
      setFormData((prevState) => ({
        category: response.data,
        indicator: [...prevState.indicator],
        country: [...prevState.country],
        year: [...prevState.year],
      }));
    });
    axios.get("http://192.168.0.111:8000/year-list/").then((response) => {
      setFormData((prevState) => ({
        category: [...prevState.category],
        indicator: [...prevState.indicator],
        country: [...prevState.country],
        year: response.data,
      }));
    });

    axios.get("http://192.168.0.111:8000/indicator-list/").then((response) => {
      setFormData((prevState) => ({
        category: [...prevState.category],
        indicator: response.data,
        country: [...prevState.country],
        year: [...prevState.year],
      }));
    });

    axios.get("http://192.168.0.111:8000/country-list/").then((response) => {
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
        <SelectOptions
          onChange={onChange}
          onSubmit={onSubmit}
          formData={formData}
        />
        <Row>
          <Col xl={6} lg={6}>
            <FinishData data={apiData} />
          </Col>
          <Col xl={6} lg={6}></Col>
        </Row>
      </DashboardStyled>
    </Mainlayout>
  );
};
const DashboardStyled = styled.div``;
