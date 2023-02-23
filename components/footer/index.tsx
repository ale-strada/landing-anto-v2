import { Address, Behance, Line, LinkedIn, Mail, Phone, WhatsApp } from "@/ui/img"
import { TextRoboto500 } from "@/ui/text"
import styled from "styled-components"

const FooterContainer = styled.div`
height: 260px;
background: #BCBCEE;
padding:40px 0;
`
const InfoContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 315px;
margin: 5px 20px;
`
const RedesContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin:20px 0;
`
const LogosContainer= styled.div`
display: flex;
width: 40%;
align-items: center;
justify-content: space-around;
`
const Derechos = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 11px;
line-height: 13px;
color: #FFFFFF;
margin: 10px;
`
export function Footer(){
    return <FooterContainer>
        <div>
            <InfoContainer><Phone style={{marginRight:"10px"}}/><TextRoboto500 style={{fontSize:"16px", marginBottom:"0"}}>+549 3512 401811</TextRoboto500></InfoContainer>
            <InfoContainer><Mail style={{marginRight:"10px"}}/><TextRoboto500 style={{fontSize:"16px", marginBottom:"0"}}>hello.antonelladesign@gmail.com</TextRoboto500></InfoContainer>
            <InfoContainer><Address style={{marginRight:"10px"}}/><TextRoboto500 style={{fontSize:"16px", marginBottom:"0"}}>De Córdoba - Argentina para el mundo.</TextRoboto500></InfoContainer>
        </div>
        <RedesContainer>
            <div><Line/></div>
            <LogosContainer>
                    <LinkedIn/>
                    <WhatsApp/>
                    <Behance/>
            </LogosContainer>
            <div><Line/></div>
        </RedesContainer>
        <Derechos>Copyright©2022 | Todos los derechos reservados</Derechos>
    </FooterContainer>
}