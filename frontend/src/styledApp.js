import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #26262B;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const IconLink = styled.a`
  color: #03875F;
  margin: 0 10px;
  font-size: 24px;

  @media screen and (max-width: 800px) {
    margin: 5px; /* Espaçamento menor entre os ícones */
  }
`;

