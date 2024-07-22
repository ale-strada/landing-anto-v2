import styled,  { keyframes } from "styled-components";

export const AboutTextConteiner = styled.div`
    position: absolute;
    bottom: 940px;
    left: 100px;
@media (min-width: 500px) {
    bottom: 130px;
    left: 530px;
}

@media (min-width: 850px) {
    position: initial;
    height:100%;
    /* width:30%; */
    min-width: 590px;
    text-align: center;
    justify-content:center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    /* background-color: rgba(187, 187, 236, 0.35); */
}
`
export const WrapMobile = styled.div`
max-width:265px;
margin-top:40px;
@media (min-width: 500px) {
    
}

@media (min-width: 850px) {
    display: none
}
`
export const WrapDesktop = styled.div`
display: none;
@media (min-width: 850px) {
    display: initial;
    /* max-width:850px; */
    text-align: center;
}
`
export const AboutSection = styled.section`
background-color:#B1F4CF;
position: relative; 
bottom: 140px;

@media (min-width: 420px) {
position:relative;
bottom:0px !important;
background-color:#BCBCED;
}

@media (min-width: 850px) {
margin-top: 100px;
background:none;
display: flex;
flex-direction: row-reverse;
}
`
export const FotoWrapMovile = styled.div`
@media (min-width: 500px) {
    display: none;
}
`

export const FotoWrapTablet = styled.div`
    display:none;
@media (min-width: 500px) {
    display:initial
}
@media (min-width: 850px) {
    display:none;
}
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const FotoWrapDesktop = styled.div`
    display:none;
    width:100%;
    justify-content: center;
@media (min-width: 500px) {
    display:none;
}
@media (min-width: 850px) {
    display:flex;
    width: fit-content;
    animation: ${fadeIn} 1s ease-in-out; /* Aplica la animación */
}
`


export const AboutDesignSquare = styled.div`
    display:none;
    @media (min-width: 850px) {
        position: absolute;
        display:initial;
        width: 860px;
        height: 815px;
        background-color: rgba(187, 187, 236, 0.35);
        right: 60px;
        top: 70px;
        animation: ${fadeIn} 1s ease-in-out; /* Aplica la animación */
    }
`