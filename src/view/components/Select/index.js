import React from "react";
import styled from "styled-components";

const OptionsContainer = styled.div`
  padding-bottom: 7px;
`;

const Select = styled.select`
  width: 150px;
  height: 25px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  border-radius: 4px;
  @media only screen and (max-width: 660px) {
    width: 250px;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    border-radius: 4px;
  }
`;
function Selects({ opcao1, opcao2, opcao3, opcao4, onChange, type }) {
  return (
    <OptionsContainer>
      <Select onChange={onChange}>
        {/* <option value="" hidden>
          {type}
        </option> */}
        {/* <option value="">{opcao0}</option> */}
        <option value={0}>{opcao1}</option>
        <option value={1}>{opcao2}</option>
        <option value={2}>{opcao3}</option>
        <option value={3}>{opcao4}</option>
      </Select>
    </OptionsContainer>
  );
}

export default Selects;
