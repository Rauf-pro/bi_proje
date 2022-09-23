import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import FinishData from "../Components/FinishData";
import { Header } from "../Components/Header";
import { Title } from "../Components/Title";
import { Mainlayout } from "../styles/Layouts";




export const DashboardPage = () => {
  return (
    <Mainlayout>
      <DashboardStyled>
        <Title title={"GDP Dashboard"} />
        <Header/>
        <Row>
          <Col xl={6} lg={6}>
           <FinishData/>
          </Col>
          <Col xl={6} lg={6}>
          
         

          </Col>
        </Row>
      </DashboardStyled>
    </Mainlayout>
  );
};
const DashboardStyled = styled.div``;
