import {
  fundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoClaro,
  textoFundoEscuro,
  conteudoClaro,
  corPrimaria
} from "./variaveis";
import styled from "styled-components";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: ""
};

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)"
};

export const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;

`;
