import GlobalStyle from "./styles/global"
import styled from "styled-components";
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useState , useEffect} from "react";
// import Form from "./components/form/form"
import Form from "../src/components/form/form"
import Grid from "../src/components/Grid/Grid"
import axios from "axios";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {FooterContainer , IconContainer  ,IconLink } from "./styledApp"

const Container = styled.div`
width: 100%;
max-width: 900px;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`;

const Title = styled.h2`
color:#00835C;`;


function App() {
  const [products , setProdutos] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getProdutos = async () => {
    try{
      const res = await axios.get("http://localhost:8800/");
      setProdutos(res.data.sort((a,b) => (a.nome > b.nome ? 1: -1)));
    } catch (erro) {
      toast.error(erro);
    }
  };

  useEffect(() => {
    getProdutos();
  },[setProdutos]);



  return (
    <>
      <Container>
        <Title>Produtos Nunes Sports</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getProdutos={getProdutos} />
        <Grid produtos={products} setProdutos={setProdutos} setOnEdit={setOnEdit}/>
        <FooterContainer>
      <IconContainer>
        <IconLink href="https://www.instagram.com/jonas_ferreira.7/">
          <FaInstagram />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/jonas-victor-crescencio-ferreira-119855262/">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/Jonas-Victor">
          <FaGithub />
        </IconLink>
      </IconContainer>
    </FooterContainer>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle/>
    </>
  );
}

export default App;
