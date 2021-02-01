import React, { useState }from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {Div, H2, FormInitial} from './style'

function Welcome() {
     const dispatch = useDispatch();
     const [validInput, setValidacao] = useState(true);


    const handleInput= (e)=>{
        const inputChange = e.target.value;

        inputChange === ""
        ? setValidacao(true)
        : setValidacao(false);
            dispatch({ type: "NAME_USER", inputChange })
    }

        return (
            <Div>
                <H2>Bem vindo à central de erros</H2>
                <FormInitial>
                    <input onChange={handleInput} type="text" placeholder="Digite seu nome"></input>
                    <button disabled={validInput}><Link to={"/app"}>Entrar</Link></button>
                </FormInitial>
            </Div>


        );
}

export default Welcome;