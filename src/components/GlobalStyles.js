import { createGlobalStyle } from "styled-components"
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Noto Sans KR' !important;
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