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
    left: 940px;
    bottom: 505px;
}
`
export const WrapMobile = styled.div`
max-width:265px;
margin-top:40px;
@media (min-width: 550px) {
    
}

@media (min-width: 850px) {
    max-width:410px;
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

export const FotoWrapTablet = styled.div`
    display:none;
@media (min-width: 550px) {
    display:initial
}
@media (min-width: 850px) {
    display:none;
}
`
export const FotoWrapDesktop = styled.div`
    display:none;
@media (min-width: 550px) {
    display:none;
}
@media (min-width: 850px) {
    display:initial;
}
`