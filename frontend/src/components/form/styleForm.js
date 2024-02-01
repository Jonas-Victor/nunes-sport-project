import styled from "styled-components";


export const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 30px;
    flex-wrap: wrap;
    background-color: #26262B;
    padding: 20px;
    box-shadow: 0px 0px 5px;
    border-radius: 5px;
`;

export  const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 140px;
    padding: 0 10px;
    border: 1px solid #121214;
    border-radius: 3px;
    height: 40px;
    background-color:#121214;
    color: #fff;
   
`;
export const Label = styled.label`
color:#fff;
padding-bottom: 5px;
text-align: center;
`;

export const Button = styled.button`
padding: 10px;
cursor: pointer;
border-radius: 5px;
border: none;
background-color: #03875F;
color: white;
height: 42px;
`;
