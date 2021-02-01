import styled from "styled-components"




const Div  = styled.div`
background-color: linear-gradient(to right, rgb(83, 105, 118), rgb(41,46,73));
height:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const H2 = styled.h2`
width:50%;
text-align:center;
`
const FormInitial = styled.form`
width: 20em;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 40px;

 input{
    text-align: center;
    width: 17em;
    height: 30px;

    border-radius:4px;
    &:focus {
    background-color: #fffccc;
}
 }
 button{
    text-align: center;
    font-size:20px;
    padding: 15px 30px;
    background-color: #4286f4;
    border-radius:5px;
    margin-top :30px;
    &:hover {
    background-color: #4286f4cc;
    }
    &:disabled {
    background-color: #979797;
    cursor: not-allowed;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
 }
`
export  {Div,H2, FormInitial }