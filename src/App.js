import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema, temaClaro, temaEscuro } from "./Components/UI/temas";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
  const [tema, setTema] = useState(true)
  const toggleTheme = () => {
    setTema((tema) => !tema)
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>

      <GlobalStyle />
      <BtnTema onClick={toggleTheme}>
        <SwitchTheme/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
