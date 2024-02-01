import axios from "axios";
import React, { useRef , useEffect }from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import {FormContainer, InputArea,Input,Label,Button} from "./styleForm"



const Form = ({  getProdutos ,onEdit , setOnEdit}) =>{
    const ref = useRef();

    useEffect(( ) => {
        if (onEdit){
            const produtos = ref.current;

            produtos.nome.value = onEdit.nome;
            produtos.productDescription.value = onEdit.productDescription;
            produtos.productCode.value = onEdit.productCode;
            produtos.priceProduct.value = onEdit.productCode;

        }
    }, [onEdit]);


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const produtos = ref.current;

        if(
            !produtos.nome.value ||
            !produtos.productDescription.value ||
            !produtos.productCode.value ||
            !produtos.priceProduct.value
        ){
            return toast.warn("Preencha todos os campos!")
        }

        if (onEdit) {
            await axios
            .put("http://localhost:8800/" + onEdit.id , {
                    nome : produtos.nome.value,
                    productDescription : produtos.productDescription.value,
                    productCode : produtos.productCode.value,
                    priceProduct : produtos.priceProduct.value,
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data));
        } else {
            await axios 
            .post("http://localhost:8800", {  
                nome : produtos.nome.value,
                productDescription : produtos.productDescription.value,
                productCode : produtos.productCode.value,
                priceProduct : produtos.priceProduct.value,
            })
            .then(({data}) => toast.success(data))
            .catch(({data}) => toast.error(data));
        }

        produtos.nome.value = "";
        produtos.productDescription.value = "";
        produtos.productCode.value = ""; 
        produtos.priceProduct.value = "";

        setOnEdit(null);
        getProdutos();
    };


return(
    <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
            <Label>Nome do Produto</Label>
            <Input name = "nome"/>
        </InputArea>
        <InputArea>
            <Label>Descrição </Label>
            <Input name = "productDescription" type="text"/>
        </InputArea>
        <InputArea>
            <Label>Codigo do produto </Label>
            <Input name = "productCode" type="text"/>
        </InputArea>
        <InputArea>
            <Label> Preço do produto </Label>
            <Input name = "priceProduct" type="text"/>
        </InputArea>

        <Button type="Submit">SALVAR</Button>
    </FormContainer> 
)};

export default Form;