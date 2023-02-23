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
height:250px;
border-radius: 10px; 
position: absolute;
top: 140px;
right: 0px;
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
background: #BCBCEE;

`

export const UlNav = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
height: 90%;
`