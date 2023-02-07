import { TextRoboto400, TextRoboto700Lila } from "@/ui/text";
import CarouselServicios from "../carousel";
import { CollapseCard } from "../collapse";
import { ServiciosConteiner } from "./styled";

export function Servicios(){
    return <div>
        <ServiciosConteiner>
            <CarouselServicios/>
            <TextRoboto400>Diseño y creación de contenidos multimediales para tu marca, negocio o emprendimiento.</TextRoboto400>
        </ServiciosConteiner>
        <TextRoboto700Lila style={{fontSize: "16px"}}>MÁS EN DETALLE</TextRoboto700Lila>
        <TextRoboto700Lila>¿Qué hago?</TextRoboto700Lila>
        <CollapseCard contenido="Diseño gráfico y web. Identidades corporativas, flyers publicitarios, papelería, tarjetas e invitaciones digitales, vectorización de imágenes." buttonText="Diseño gráfico y digital"/>
        <CollapseCard contenido="Animación de identidad corporativa, presentaciones dinámicas, GIF para redes sociales, stickers para Whatsapp." buttonText="Animación 2d"/>
        <CollapseCard contenido="Post e stories para Instagram/Facebook, banners, headers y elementos visuales para potenciar tu web al máximo." buttonText="Redes"/>
            

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nobis eius! Nulla nihil debitis mollitia voluptas odit atque maxime magni adipisci optio pariatur nam fuga, iusto, at eum. Libero, blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia sint ipsa blanditiis doloremque laboriosam voluptatem. Doloribus, quam, a animi libero perferendis in vitae praesentium blanditiis quod corporis ipsum. Officiis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia illum tempora vitae esse corrupti maiores in nisi necessitatibus iusto aliquam, est architecto ducimus quos? Voluptate rerum impedit atque error quasi.
        </div>
        </div>
}