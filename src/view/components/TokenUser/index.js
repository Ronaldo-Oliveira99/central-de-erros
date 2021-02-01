import React from "react";
import styled from "styled-components";
const TokenUser = styled.div`
background-color: gray;
  text-align: center;
  padding: 30px;
  color: white;
`;

export default function Home({user}){
return(

    <TokenUser>

            <h5>Bem Vindo {user}.</h5>
        
       
    </TokenUser>
)

}

