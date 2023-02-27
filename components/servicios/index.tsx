import { ChunoDesk, ChunoDeskBig } from "@/ui/img";
import { TextRoboto400, TextRoboto700Lila } from "@/ui/text";
import CarouselServicios from "../carousel";
import { CollapseCard } from "../collapse";
import { DetallesContainer, DetallesPregunta, DetallesTitle, FondoChuno, FondoChunoDesk, ScrollBarDiv, ServiciosConteiner } from "./styled";

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
            <CollapseCard style={{minHeight:"130px"}} contenido="Diseño gráfico y web. Identidades corporativas, flyers publicitarios, papelería, tarjetas e invitaciones digitales, vectorización de imágenes." buttonText="Diseño gráfico y digital"/>
            <CollapseCard style={{minHeight:"130px"}} contenido="Animación de identidad corporativa, presentaciones dinámicas, GIF para redes sociales, stickers para Whatsapp." buttonText="Animación 2d"/>
            <CollapseCard style={{minHeight:"130px", borderBottom: "1px solid #C9C8C8", paddingBottom:"20px"}} contenido="Post e stories para Instagram/Facebook, banners, headers y elementos visuales para potenciar tu web al máximo." buttonText="Redes"/>
            </ScrollBarDiv>  
            <FondoChuno>
                <ChunoDesk/>
            </FondoChuno> 
            <FondoChunoDesk>
                <img src="/chunofondo.png" alt="" />
            </FondoChunoDesk>
            
        </DetallesContainer>
        </div>
}