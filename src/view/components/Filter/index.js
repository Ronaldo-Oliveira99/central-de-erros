import React from "react";
import styled from "styled-components";
import {SelAmbient,SelOrdenar,SelBuscar} from "../../components/Select";
import Buttons from "../Button"
import Input from "../Input"


const Filters = styled.div`
  padding-top: 30px;

`;


export default function Filter({
  onChangeLink,
  onChangeOrder,
  onChangeBuscar,
  onChangeInput,
  deleteHandler,
  arquivarHandler,
  validInput,
  readonly
  //arquivados
  
}) {
  return (
    <Filters className="container-fluid">
        <div className="row">
          
          <SelAmbient
            opcao0="Escolha Ambiente"
            opcao1="Produção"
            opcao2="Homologação"
            opcao3="Dev"
            //opcao4= {`Arquivados(${arquivados})`}
            onChange={onChangeLink}
          />

          <SelOrdenar
            opcao0="Ordenar Por:"
            opcao1="Level"
            opcao2="Frequência"
            onChange={onChangeOrder}
          />
          
          <SelBuscar
            opcao0="Buscar Por:"
            opcao1="Descrição"
            opcao2="Origem"
            opcao3="Data"
            onChange={onChangeBuscar}
          />
          <Input onChange={onChangeInput} validInput={validInput}/>
        
        </div>
        <Buttons deleteHandler={deleteHandler} arquivarHandler={arquivarHandler}
        />
    </Filters>
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
