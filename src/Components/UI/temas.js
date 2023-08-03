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
  text: textoFundoClaro
}

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro
}

export const BtnTema = styled.button`
position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  
`
