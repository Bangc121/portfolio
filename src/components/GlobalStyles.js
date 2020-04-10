import { createGlobalStyle } from "styled-components"
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(255, 255, 255, 1);
        color: black;
    }
    .slick-prev:before {
        color: black;
        font-size: 25px;
    }

    .slick-next:before {
        color: black;
        font-size: 25px;
    }
`;

export default GlobalStyles;