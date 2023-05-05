import { ChunoDesk, ChunoDeskBig } from "@/public/img";
import { TextRoboto400, TextRoboto700Lila } from "@/ui/text";
import styled from "styled-components";
import CarouselServicios from "../carousel";
import { CollapseCard } from "../collapse";
import { DetallesContainer, DetallesPregunta, DetallesTitle, FondoChuno, FondoChunoDesk, ScrollBarDiv, ServiciosConteiner } from "./styled";
import router from "next/router";
const CardResponsiveWrap = styled.div`
@media (min-width: 850px) {
min-height:130px;
}
`
export function Servicios(){

    function handleBrand (){
        router.push("/brand")
        return true
    }

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
                <CollapseCard paquete={true}  onClick = {handleBrand} contenido="Un buen branding se compone de una identidad visual que conecta, transmite, es consistente y coherente. Trabajamos a través de su historia, valores y personalidad." buttonText="Branding"/>
            </CardResponsiveWrap>
            <CardResponsiveWrap>
                <CollapseCard contenido="La integración de este tipo de contenidos en canales como Instagram, impactan en la memoria de tu público, haciendo que tu marca sea más memorable." buttonText="GIFS y Stickers"/>
            </CardResponsiveWrap>
            <CardResponsiveWrap>
                <CollapseCard style={{borderBottom: "1px solid #C9C8C8", paddingBottom:"20px"}} contenido="Este servicio es el indicado para vos que ya tenés un diseño de marca, pero que buscás un empujón a la hora de crear contenido. Pensar qué subir a redes y de qué forma hacerlo puede ser agobiante. Pero acá estoy para darte una mano." buttonText="Contenido"/>
            </CardResponsiveWrap>
            </ScrollBarDiv>  
            <FondoChuno>
                <ChunoDesk/>
            </FondoChuno> 
        </DetallesContainer>
        </div>
}