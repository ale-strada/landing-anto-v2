import { Address,
        // Behance,
        // LinkedIn,
        Mail,
        // Phone,
        // WhatsApp
        } from "@/public/img"
import { TextPoppins500 } from "@/ui/text"
import styled from "styled-components"

const FooterContainer = styled.div`
height: 260px;
background: #BCBCEE;
padding:40px 0;
position: relative;
z-index: 5;
bottom: 0;

@media (min-width: 850px) {
    background:#606060;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-end;
    padding: 40px 20px;
}
`
const InfoContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 315px;
margin: 5px 20px;
@media (min-width: 850px) {
margin-left:100px;
width: fit-content;
margin: 0 20px;
}
`
// const RedesContainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// margin:20px 0;
// `
// const LogosContainer= styled.div`
// display: flex;
// width: 40%;
// max-width:200px;
// align-items: center;
// justify-content: space-around;
// `
const Derechos = styled.p`
font-family: var(--font-poppins);
font-style: normal;
font-weight: 300;
font-size: 11px;
line-height: 13px;
color: #FFFFFF;
margin: 10px;
@media (min-width: 850px) {
    height: fit-content;
    align-self: flex-end;
}
`
// const LineContainer= styled.div`
// border: solid 2px #FFFF;
// width:85px;
// @media (min-width: 420px) {
//     width:295px;
//     }
// @media (min-width: 850px) {
// width:598px;
// }
// `

export function Footer(){

    return <FooterContainer>
        <div style={{alignSelf:"flex-end", height:"fit-content" }}>
            {/* <InfoContainer><Phone style={{marginRight:"10px"}}/><TextRoboto500 style={{fontSize:"16px", marginBottom:"0"}}>+549 3512 401811</TextRoboto500></InfoContainer> */}
            <InfoContainer onClick={() => window.open("mailto:hello.antonelladesign@gmail.com")} style={{cursor:"pointer"}}><Mail style={{marginRight:"10px"}}/><TextPoppins500 style={{fontSize:"16px", marginBottom:"0"}}>hello.antonelladesign@gmail.com</TextPoppins500></InfoContainer>
            <InfoContainer><Address style={{marginRight:"10px"}}/><TextPoppins500 style={{fontSize:"16px", marginBottom:"0",  width:"100%"}}>De Córdoba - Argentina para el mundo.</TextPoppins500></InfoContainer>
        </div>
        <Derechos>Copyright©2024 | Todos los derechos reservados</Derechos>
        {/* <RedesContainer>
            <LineContainer/>
            <LogosContainer>
                    <a style={{cursor:"pointer"}} aria-label="acceso a linkedin" href="https://www.linkedin.com/in/antonella-jaime-baa707201/"><LinkedIn /></a>
                    <a style={{cursor:"pointer"}} aria-label="acceso a whatsapp" href="https://wa.me/+5493512401811?text=Hola%20Antonella,%20me%20gustaría"><WhatsApp /></a>
                    <a style={{cursor:"pointer"}} aria-label="acceso a behance" href="https://www.behance.net/antonellajaime"><Behance/></a>
            </LogosContainer>
            <LineContainer/>
        </RedesContainer> */}
    </FooterContainer>
}