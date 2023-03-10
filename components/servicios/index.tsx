import { ChunoDesk, ChunoDeskBig } from "@/ui/img";
import { TextRoboto400, TextRoboto700Lila } from "@/ui/text";
import styled from "styled-components";
import CarouselServicios from "../carousel";
import { CollapseCard } from "../collapse";
import Image from 'next/image'
import { DetallesContainer, DetallesPregunta, DetallesTitle, FondoChuno, FondoChunoDesk, ScrollBarDiv, ServiciosConteiner } from "./styled";
const CardResponsiveWrap = styled.div`
@media (min-width: 850px) {
min-height:130px;
}
`
export function Servicios(){
    return <div id="servicios">
        <ServiciosConteiner>
            <CarouselServicios/>
            <div style={{margin: "0 25px"}}>
                <TextRoboto400>Diseño y creación de contenidos multimediales para tu marca, negocio o emprendimiento.</TextRoboto400>
            </div>
        </ServiciosConteiner>
        <DetallesContainer>
            <DetallesTitle>MÁS EN DETALLE</DetallesTitle>
            <DetallesPregunta>¿Qué hago?</DetallesPregunta>
            <ScrollBarDiv>
            <CardResponsiveWrap>
                <CollapseCard contenido="Diseño gráfico y web. Identidades corporativas, flyers publicitarios, papelería, tarjetas e invitaciones digitales, vectorización de imágenes." buttonText="Diseño gráfico y digital"/>
            </CardResponsiveWrap>
            <CardResponsiveWrap>
                <CollapseCard contenido="Animación de identidad corporativa, presentaciones dinámicas, GIF para redes sociales, stickers para Whatsapp." buttonText="Animación 2d"/>
            </CardResponsiveWrap>
            <CardResponsiveWrap>
                <CollapseCard style={{borderBottom: "1px solid #C9C8C8", paddingBottom:"20px"}} contenido="Post e stories para Instagram/Facebook, banners, headers y elementos visuales para potenciar tu web al máximo." buttonText="Redes"/>
            </CardResponsiveWrap>
            </ScrollBarDiv>  
            <FondoChuno>
                <ChunoDesk/>
            </FondoChuno> 
            <FondoChunoDesk>
                <Image src="/chunofondo.png" alt="" width= "789" height="789" />
            </FondoChunoDesk>
            
        </DetallesContainer>
        </div>
}