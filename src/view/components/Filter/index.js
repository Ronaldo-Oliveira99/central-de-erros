import React from "react";
import styled from "styled-components";
import Select from "../../components/Select";

const Container = styled.div`
  display: flex;
  background-color: #2e74b5;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: 972px) {
    /* background-color: lightblue; */
    flex-direction: column;
  }
`;
const SelectContainer = styled.div`
  display: flex;
  /* background-color: red; */
  padding: 20px 20px;
  @media only screen and (max-width: 972px) {
    /* background-color: yellow; */
    justify-content: space-around;
  }
  @media only screen and (max-width: 660px) {
    /* background-color: pink; */
    flex-direction: column;
    align-items: center;
  }
`;
const Input = styled.input`
  width: 200px;
  margin: 10px;
  border-radius: 4px;
  @media only screen and (max-width: 660px) {
    width: 250px;
  }
`;
const InputContainer = styled.div`
  /* width: 25%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: blue; */
  @media only screen and (max-width: 972px) {
    /* background-color: brown; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 660px) {
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function Filter({
  onChangeLink,
  onChangeOrder,
  onchangeBuscar,
  onChangeInput
}) {
  return (
    <Container>
      <SelectContainer>
        <Select
          opcao1="producao"
          opcao2="homologacao"
          opcao3="dev"
          opcao4="vago"
          onChange={onChangeLink}
        />
        <Select
          opcao1="Ordenar Por"
          opcao2="Level"
          opcao3="Frequência"
          opcao4="vago"
          onChange={onChangeOrder}
        />
        <Select
          opcao1="Buscar Por"
          opcao2="Descrição"
          opcao3="Origem"
          opcao4="Data"
          onChange={onchangeBuscar}
        />
      </SelectContainer>

      <InputContainer>
        <Input type="text" placeholder="Search..." onChange={onChangeInput} />
      </InputContainer>
    </Container>
  );
}

/*
--------------OBJETIVO DESTE PROJETO------------------------

-Desenvolver de um sistema que centralize erros 
que possam surgir em diversas camadas de aplicações.​

-Cadastro e Autenticação de Usuários para acesso ao 
sistema.​

-Filtrar erros registrados no banco de dados e retornar 
ao usuário conforme a necessidade de visualização destes
dados.​

- Apagar ou Arquivar registro de erros.

*/
