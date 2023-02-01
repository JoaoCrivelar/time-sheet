import { createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-size: 10px; // configurando REM (medida relativa)
  }

  body{
    background:${(props) => props.theme.colors.black};
    padding:8rem 16rem;
    color:${(props) => props.theme.colors["gray-300"]};
    -webkit-font-smoothing:antialiased;
  }

  body,input,textarea,button{
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`;

