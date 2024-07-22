import styled,  { keyframes } from "styled-components";

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
@media (min-width: 850px) {
    background: none;
    padding: 0 80px;
}
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

@media (min-width: 500px) {
    display:flex;
    height: 140px;
    background: none;
    flex-direction: row;
    justify-content: flex-end;
    width: 80%;
    position: inherit;
}

@media (min-width: 850px) {
    width: 50%
}

`

export const UlNav = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
height: 60%;
margin-top: 60px;

@media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
}
`

export const BurgerWrap = styled.div`
z-index:5;
@media (min-width: 500px) {
    display:none
}
`



const fadeIn = keyframes`
    from {
        width: 0%;
        left: 0;
    }
    to {
        width: 100%;
        left: 0;
    }
`;

export const Hover = styled.div`
    font-family: var(--font-poppins);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: justify;
    color: #fff;
    width: fit-content;
    position: relative;
    
    @media (min-width: 850px) {
        font-size: 24px;
        color: #878282;
        
        &:hover {
            color: #9692D7;
        }

        &:after {
            content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #9692D7;
        transition: width 0.5s ease, left 0.5s ease; /* Transición progresiva durante medio segundo */
    }
    
    &:hover::after {
        animation: ${fadeIn} 0.5s forwards; /* Aplicar la animación fadeIn al hacer hover */
    }
}
`;


export const MobileWrap = styled.div`
@media (min-width: 500px) {
    display:none
}
`
export const DesktopWrap = styled.div`
display: none;
@media (min-width: 850px) {
    display:inherit
}
`
export const TabletWrap = styled.div`
display: none;
@media (min-width: 500px) {
    display:inherit
}
@media (min-width: 850px) {
    display:none;
}
`
export const ButtonToContactHeader = styled.button`
    font-family: var(--font-poppins);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: justify;
    color: #fff;
    cursor: pointer;
    display: flex;
    background: #9692D7;
    border: none;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -5px;
    width: 100%;
    
    @media (min-width: 500px) {
        width: 25%;
        height: 35%;
        top: -2;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 14px;
        border: none;
        padding: 0 10px;
    }
    
    @media (min-width: 850px) {
    top: -5px;
    height: 50%;
    font-size: 24px;
}
&:hover {
    color: #9692D7;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: 1px solid #9692D7;
}
`