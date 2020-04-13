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

    .vertical-timeline::before {
        background-color: #ddd;
    }

    .vertical-timeline-element-icon {
        box-shadow: 0 0 0 4px #ddd, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05);
    }

    .vertical-timeline-element-content {
        box-shadow: 1px 2px 3px #ddd;
    }
`;

export default GlobalStyles;