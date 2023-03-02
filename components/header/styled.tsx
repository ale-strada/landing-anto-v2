import styled from "styled-components";

export const HeaderConteiner = styled.div`
width: 100%;
height: 144px;
background: linear-gradient(180deg, #ACE1C8 0%, #BCBCED 98.44%);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 40px;
z-index: 5;
position:sticky;
`
export const NavMenu = styled.div`
width:70%;
height: 500px;
border-radius:0 0 0 10px; 
position: absolute;
top: 0px;
right: 0px;
display: none;
justify-content: space-around;
flex-direction: column;
align-items: center;
background: #9692D7;

@media (min-width: 550px) {
    display:flex;
    height: 140px;
    background: none;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
}

@media (min-width: 850px) {
    width: 40%
}

`

export const UlNav = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
height: 60%;
margin-top: 60px;

@media (min-width: 550px) {
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
}
`

export const BurgerWrap = styled.div`
z-index:5;
@media (min-width: 550px) {
    display:none
}
`

export const Hover = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
text-align: justify;
color: #FFFFFF;
:hover{
    color:#9692D7
}
`

export const MobileWrap = styled.div`
@media (min-width: 550px) {
    display:none
}
`
export const DesktopWrap = styled.div`
display: none;
@media (min-width: 550px) {
    display:inherit
}
`