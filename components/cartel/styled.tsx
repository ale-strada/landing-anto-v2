import styled from "styled-components";

export const CartelConteiner = styled.div `
height: 380px;
max-width:400px;
background: linear-gradient(180deg, #ACE1C8 0%, #BCBCED 98.44%);
border-radius: 14px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 65px;
margin: 80px auto 0;
@media (min-width: 850px) {
max-width: none;
width: 100%;
margin: 30px 0;
justify-content: space-around;
padding: 100px 65px;
}
`