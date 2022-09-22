import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --body-bg-color: #F3F4F6;
    --white-color:#fff;
    --primary-color:#3661BB;

}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;  
    
}
body{
    background: var(--body-bg-color);
}


`;

export default GlobalStyle;