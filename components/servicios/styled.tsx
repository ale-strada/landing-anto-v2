import { TextRoboto700Lila } from "@/ui/text";
import styled from "styled-components";

export const ServiciosConteiner = styled.div`
height: 380px;
background: linear-gradient(180deg, #ACE1C8 0%, #BCBCED 98.44%);
position: relative;
bottom: 140px;
max-width:1190px;
margin:0 auto;
@media (min-width: 420px) {
bottom:0px;
}
@media (min-width: 850px) {
padding:50px;
height:484px;
}


`
export const DetalleCardConteiner = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
border-top: 1px solid #C9C8C8;
margin-top: 30px;
padding: 20px 0px 0 0px;
justify-content: space-between;
@media (min-width: 850px) {
padding:50px 0;

}
`

export const ScrollBarDiv = styled.div`
border-left: 8px solid #BCBCEE;
padding: 0px 20px;
margin-left: 10px;
@media (min-width: 420px) {
position: inherit;
z-index:10;
}
@media (min-width: 850px) {
margin: 100px 50px;
max-width: 675px;
min-height: 450px;
}
`

export const DetallesContainer = styled.div`
position: relative; 
bottom: 50px;
max-width: 1365px;
margin: 0 auto;
@media (min-width: 420px) {
margin-top:70px;
bottom:0px;
margin-bottom: 50px
}
`
export const DetallesTitle = styled(TextRoboto700Lila)`
font-size: 16px;
margin:0 40px;
@media (min-width: 420px) {
font-size:24px
}
@media (min-width: 850px) {
margin-top:60px;
font-size:30px;
}
`
export const DetallesPregunta = styled(TextRoboto700Lila)`
margin:0 40px;
@media (min-width: 420px) {
margin:45px 40px;
font-size:48px;
position: inherit;
z-index: 10;
}
@media (min-width: 850px) {
margin:60px 40px;
font-size:64px;
position: inherit;
z-index: 10;
}
`

export const FondoChuno = styled.div`
display: none;
@media (min-width: 420px) {
display:initial;
opacity:0.8;
position: absolute;
top: -45px;
right: 0;
}
@media (min-width: 850px) {
display:none;
}
`
export const FondoChunoDesk = styled.div`
display:none;
@media (min-width: 850px) {
display:block;
opacity:0.8;
position: absolute;
top: 0;
right: 0;
}
` 