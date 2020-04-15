import styled from "styled-components";

const Card = styled.section`
  width: 100%;
  min-height: 280px;
  /* background-color: #599cd6; */
`;

const CardHeader = styled.section`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: #b2c7e6;
  box-shadow: 2px 2px 10px black;
`;

const CardBody = styled.section`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  /* background-color: #b2c7e6; */
  box-shadow: 2px 2px 10px black;
  background-color: white;
`;

export { Card, CardHeader, CardBody };
