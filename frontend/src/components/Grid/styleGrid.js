import styled from "styled-components";


export const Table = styled.table`
width: 100%;
background-color: #fff;
padding: 25px;
box-shadow: 0px 0px 5px #26262B;
border-radius: 5px;
max-width: 1000px;
margin: 20px auto;
word-break: break-all;
background-color: #26262B;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
 text-align: center;
 border-bottom: inset #03875F;
 border-radius: 5px;
 padding-bottom: 5px;
 margin-right: 10px;
 padding-left: 5px;
 color: #fff;

 @media ( max-width: 600px) {
    ${(props) => props.onlyweb && "display : none"}
}
`;

export const Td = styled.td`
padding-top: 15px;
text-align: ${(props) => (props.aligncenter ? "center" : "start")};
width: ${(props) => (props.width ? props.width : "auto")};
color: #fff;

text-align: center;

@media (max-Width : 600px){
     ${(props) => props.onlyweb && "display:none"}
}
`;