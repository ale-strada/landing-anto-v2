import styled from "styled-components";

export const AboutTextConteiner = styled.div`
    position: absolute;
    bottom: 940px;
    left: 100px;
@media (min-width: 550px) {
    bottom: 130px;
    left: 530px;
}

@media (min-width: 850px) {
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
}
`
export const FotoWrapMovile = styled.div`
@media (min-width: 550px) {
    display: none;
}
`

export const FotoWrapDesktop = styled.div`
    display:none;
@media (min-width: 550px) {
    display:initial
}
`