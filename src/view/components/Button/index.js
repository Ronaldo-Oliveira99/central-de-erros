import styled from "styled-components";

const Button = styled.button`
  height: 35px;
  margin-left: 10px;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  margin: 10px 0;
  width: 90%;
  display: flex;

  @media only screen and (max-width: 660px) {
    justify-content: space-around;
  }
`;

export { Button, ButtonGroup };
