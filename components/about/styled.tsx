import styled from "styled-components";

export const AboutTextConteiner = styled.div`
    position: absolute;
    bottom: 940px;
    left: 100px;
@media (min-width: 500px) {
    bottom: 130px;
    left: 530px;
}

@media (min-width: 850px) {
    left:0;
    bottom: 0px;
    height:100%;
    width:100%;
    text-align: center;
    justify-content:center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(187, 187, 236, 0.35);
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
    max-width:850px;
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
background:none;
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
export const FotoWrapDesktop = styled.div`
    display:none;
    width:100%;
    justify-content: center;
@media (min-width: 500px) {
    display:none;
}
@media (min-width: 850px) {
    display:flex;
}
`