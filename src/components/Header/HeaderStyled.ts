import styled from "styled-components"

export const HeaderWrapper = styled.div`
background: rgba(0,0,0,.5);
padding: 0 20%;
`

export const IntroText = styled.p`
    font-size: 1.5em;
    color:white;
    /* Media query for mobile size */
    @media (max-width: 768px) {
      /* Styles specific to mobile size */
      font-size: 1em;
    }

`