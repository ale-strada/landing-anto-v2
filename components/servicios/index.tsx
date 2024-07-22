import { ChunoDesk, ChunoDeskBig, LogoReducidoWhite } from "@/public/img";
import { useState, useEffect } from "react";
import { TextRoboto400, TextRoboto700Lila } from "@/ui/text";
import styled, { keyframes } from "styled-components";
import CarouselServicios from "../carousel";
import { CollapseCard } from "../collapse";
import { DetallesContainer, DetallesPregunta, DetallesTitle, FondoChuno, FondoChunoDesk, ScrollBarDiv } from "./styled";
import router from "next/router";

const CardResponsiveWrap = styled.div`
@media (min-width: 850px) {
min-height:130px;
}
`

const ServiciosTextConteiner = styled.div`
margin: 0 25px;
@media (min-width: 850px) {
display: none;
}
` 
const PresentacionText = styled.h3`
display: none;
@media (min-width: 850px) {
    display: initial;
    color: #FFF;
    font-family: var(--font-poppins);
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    max-width: 580px;
    margin: auto;
}
`
const DescripcionText = styled.p`
display: none;
@media (min-width: 850px) {
    display: initial;
    color: #949090;
    font-family: var(--font-poppins);
    font-size: 29px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 705px;
}
`
const RigthContent = styled.div`
display: none;
@media (min-width: 850px) {
    display:flex;
    flex-direction: column;
}
`

export function Servicios(){
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        
        // Verificar si el usuario está scrollando
        if (window.scrollY > 190) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      };
  
      // Agregar el evento de scroll al ventana
      window.addEventListener('scroll', handleScroll);
  
      // Limpiar el evento al desmontar el componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    function handleBrand (){
        router.push("/brand")
        return true
    }
    function handleGifs (){
        router.push("/gifs")
        return true
    }
    function handleContenido (){
        router.push("/contenido")
        return true
    }

   
const slideInFromBottom = isScrolling ? keyframes`
from {
  transform: translateY(100%);
  opacity: 0;
}
to {
  transform: translateY(0);
  opacity: 1;
}
` : null;

const ServiciosConteiner = styled.div`
height: 380px;
background: linear-gradient(180deg, #ACE1C8 0%, #BCBCED 98.44%);
position: relative;
bottom: 140px;
/* max-width:1190px; */
margin:0 auto;
@media (min-width: 420px) {
bottom:100px;
}
@media (min-width: 850px) {
display:grid;
grid-template-columns: 1fr 1fr;
align-items: end;
padding:50px;
height:600px;
top: 70px;
background:#D9D9D9;
margin-bottom: 30px;
animation: ${slideInFromBottom} 1s ease-in-out forwards; /* Aplica la animación */
}
`

    return <div id="servicios">
        <ServiciosConteiner>
            <CarouselServicios/>
            <ServiciosTextConteiner>
                <TextRoboto400>Diseño y creación de contenidos multimediales para tu marca, negocio o emprendimiento.</TextRoboto400>
            </ServiciosTextConteiner>
            {/* nuevo diseño 2024------------------------------------------------------------------------------- */}
            <PresentacionText>Soy Anto, diseñadora gráfica y digital.</PresentacionText>
            <RigthContent>
            <DescripcionText>Te propongo a través de mis servicios, potenciar tu marca y llegar mejor a tus clientes, con una identidad sólida, comunicaciones acordes, creativas y estratégicas.</DescripcionText>
            <LogoReducidoWhite style={{alignSelf: "end"}}/>
            </RigthContent>

        </ServiciosConteiner>
        <DetallesContainer>
            <DetallesTitle>MÁS EN DETALLE</DetallesTitle>
            <DetallesPregunta>¿Qué hago?</DetallesPregunta>
            <ScrollBarDiv>
            <CardResponsiveWrap>
                <CollapseCard 
                // paquete={true}  
                onClick = {handleBrand} 
                contenido="Un buen branding se compone de una identidad visual que conecta, transmite, es consistente y coherente. Trabajamos a través de su historia, valores y personalidad.
                            Este servicio es ideal si vas a iniciar una marca o tenés una marca pero buscás darle un giro a su identidad." 
                buttonText="Branding"
                />
            </CardResponsiveWrap>
            <CardResponsiveWrap>
                <CollapseCard 
                // paquete={true}  
                onClick = {handleGifs} 
                contenido="La integración de este tipo de contenidos en canales como Instagram o Whatsapp, impactan en la memoria de tu público, haciendo que tu marca sea más memorable." 
                buttonText="GIFS y Stickers"
                />
            </CardResponsiveWrap>
            <CardResponsiveWrap>
                <CollapseCard 
                // paquete={true}  
                onClick = {handleContenido} 
                contenido="Te ofrezco un plan integral para las comunicaciones de tu marca en redes sociales. Con este servicio vas a poder optimizar tu tiempo y potenciar la presencia de tu marca en redes." 
                buttonText="Contenido"
                />
            </CardResponsiveWrap>
            <CardResponsiveWrap>
                <CollapseCard 
                // paquete={true}  
                onClick = {handleContenido} 
                contenido="Diseño y creo tu sitio web a la medida. Ya sea para promocionar tu negocio, mostrar tu trabajo, o compartir información, una página web se ha convertido en una herramienta esencial en la era digital." 
                buttonText="Web"
                />
            </CardResponsiveWrap>
            <CardResponsiveWrap>
                <CollapseCard 
                // paquete={true}  
                onClick = {handleContenido} 
                style={{borderBottom: "1px solid #C9C8C8", paddingBottom:"20px"}} 
                contenido="Diseño de cartelería y papelería en general, tarjetas personales, folletos, banners, etc." 
                buttonText="Diseño Gráfico"
                />
            </CardResponsiveWrap>
            </ScrollBarDiv>  
            <FondoChuno>
                <ChunoDesk/>
            </FondoChuno> 
        </DetallesContainer>
        </div>
}