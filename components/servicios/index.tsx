import { TextRoboto400, TextRoboto700Lila } from "@/ui/text";
import CarouselServicios from "../carousel";
import { CollapseCard } from "../collapse";
import { ScrollBarDiv, ServiciosConteiner } from "./styled";

export function Servicios(){
    return <div id="servicios">
        <ServiciosConteiner>
            <CarouselServicios/>
            <TextRoboto400>Diseño y creación de contenidos multimediales para tu marca, negocio o emprendimiento.</TextRoboto400>
        </ServiciosConteiner>
        <div style={{position: "relative", bottom: "50px"}}>
            <TextRoboto700Lila style={{fontSize: "16px", margin:"0 40px"}}>MÁS EN DETALLE</TextRoboto700Lila>
            <TextRoboto700Lila style={{margin:"0 40px"}}>¿Qué hago?</TextRoboto700Lila>
            <ScrollBarDiv>
            <CollapseCard contenido="Diseño gráfico y web. Identidades corporativas, flyers publicitarios, papelería, tarjetas e invitaciones digitales, vectorización de imágenes." buttonText="Diseño gráfico y digital"/>
            <CollapseCard contenido="Animación de identidad corporativa, presentaciones dinámicas, GIF para redes sociales, stickers para Whatsapp." buttonText="Animación 2d"/>
            <CollapseCard contenido="Post e stories para Instagram/Facebook, banners, headers y elementos visuales para potenciar tu web al máximo." buttonText="Redes"/>
            </ScrollBarDiv>   
        </div>
        </div>
}