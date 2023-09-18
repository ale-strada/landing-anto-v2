import styled from "styled-components";

export const ButtonSinFondo = styled.button`
border: none;
background: none;
`

export const ContactButton = styled.button`
width: 199px;
height: 43px;
background: rgba(150, 146, 215, 1);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
font-family: var(--font-inter);
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 15px;
color: #FFFFFF;
&:hover{
    background: #BCBCEE;
}
`

export const Button = styled.button`
width: 100%;
height: 50px;
border: 3px solid #9890E3;
border-radius: 14px;
background:none;
box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
color: #9890E3;
@media (min-width: 500px) {
    width:362px;
}
&:hover{
    border-radius: 14px;
    border: 1px solid #9890E3;
    background: rgba(152, 144, 227, 0.53) !important;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
`
export const ButtonPaquetes = styled.button`
border: 3px solid #9890E3;
border-radius: 14px;
box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
background: white;
display: flex;
align-items: center;
justify-content: center;
align-self: end;
z-index: 5;
width: 110px;
height: 30px;
@media (min-width: 500px) {
    width: 190px;
    height: 35px;
}
@media (min-width: 850px) {
    width: 254px;
    height: 43px;
    margin-top:50px;
}
&:hover{
    border-radius: 14px;
    border: 3px solid #878282;
    background: #E8E6E6;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
`