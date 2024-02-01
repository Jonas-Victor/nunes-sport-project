import React from "react";
import axios from "axios"
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import {toast} from "react-toastify"
import {Table , Thead ,Tbody , Tr ,Th ,Td} from "./styleGrid"


const Grid = ({produtos , setProdutos ,setOnEdit}) => {

    const handleEdit = (item) => {
        setOnEdit(item)
    }


    const handleDelete = async (id) => {
        await axios
        .delete("http://localhost:8800/" + id)
        .then(({data}) =>{
            const newArray = produtos.filter((produtos) => produtos.id !== id);

            setProdutos(newArray);
            toast.success(data)
        })
    }

    console.log(produtos);
    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome do Produto</Th>
                    <Th>Descrição</Th>
                    <Th>Codigo do produto</Th>
                    <Th>Preço do produto</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>

            <Tbody>
              
                {produtos.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%" >{item.nome}</Td>
                        <Td width="30%" >{item.productDescription}</Td>
                        <Td width="20%" >{item.productCode}</Td>
                        <Td width="30%" >{item.priceProduct}</Td>
                        <Td alingCenter width="5%">
                         <FaEdit onClick={() => handleEdit(item)}/> 
                         </Td>
                        <Td alingCenter width="5%">
                         <FaTrash onClick={() => handleDelete(item.id)} />
                         </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
};

export default Grid;