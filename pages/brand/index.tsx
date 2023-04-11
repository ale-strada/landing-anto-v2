import { BrandCard } from "@/components/brand-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { TextRoboto500, TextRoboto700 } from "@/ui/text";
import Image from 'next/image'
import styled from "styled-components";

const HeroContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const BrandHero = styled.div`
width: 956px;
height: 523px;
background: #BCBCEE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 75px;
position: relative;
bottom: 930px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 30px;
`
const CardsContainer = styled.div`
position: relative;
bottom: 600px;
`
const TagsContainer = styled.div`
/* width: 990px; */
position: relative;
bottom: 968px;
left: 743px;
z-index:0;
`
export default function Brand(){
    return <Layout>
    <HeroContainer>
    <Image src={"/brand-hero.png"} alt={""} width={1440} height={1370}/>
    <BrandHero>
        <TextRoboto700 style={{fontSize:"64px"}}>BRANDING</TextRoboto700>
        <TextRoboto500 style={{fontSize:"36px", lineHeight: "42px"}}>Cada marca tiene una identidad, personalidad, valores, atributos y características. </TextRoboto500>
        <TextRoboto500 style={{fontSize:"36px", lineHeight: "42px"}}>
        Desarrollemos el branding de tu marca usando diseños estratégicos para conectar con tu público, logrando una identidad de marca consistente, única y completa.</TextRoboto500>
    </BrandHero>
    </HeroContainer>
    <CardsContainer>
        <div style={{borderBottom:"solid 1px #878282", width:"100%"}}>
        <BrandCard title="BRANDING" 
        content="Cada marca tiene una identidad, personalidad, valores, atributos y características. Desarrollemos el branding de tu marca usando diseños estratégicos para conectar con tu público, logrando una identidad de marca consistente, única y completa."
        list={["Estudio y dirección visual",
                " Concepto de identidad visual",
                " Moodboard",
                "Diseño de logotipo",
                " Variaciones de logo",
                "Brandboard",
                "Mini manual de uso",
                "Paleta de colores",
                "Tipografía",
        ]}
        />
        </div>
        <div style={{borderBottom:"solid 1px #878282", width:"100%"}}>
        <BrandCard title="BRANDING & SOCIAL MEDIA" 
        content="Este paquete es perfetcto para tener la identidad completa dentro de una de las redes sociales más importantes del momento: Instagram."
        list={["Estudio y dirección visual",
            "Concepto de identidad visual",
            "Moodboard",
            "Diseño de logotipo",
            "Variaciones de logo",
            "Brandboard",
            "Mini manual de uso",
            "Paleta de colores",
            "Tipografía",
            "10 elementos gráfcios",
            "6 plantillas editables",
            "4 portadas destacadas",
        ]}
        />
        </div>
        <div style={{borderBottom:"solid 1px #878282", width:"100%"}}>
        <BrandCard title="BRANDING & PACKAGING" 
        content="Trabajaremos en el diseño de tus empaques para causar impacto y una mejor experiencia en tu consumidor, combinando lo visual con lo funcional."
        list={[
            " Diseño de cajas para envío",
            "Diseño de cajas de producto",
            "Diseño de bolsa",
            "Diseño de etiquetas de producto",
            "Tarjeta de agradecimiento",
            "Stickers",
            "Tarjeta de presentación",
        ]}
        listDescription="Paquete de Branding base + elementos de packaging que requieras:"
        />
        </div>
    </CardsContainer>
    <TagsContainer>
        <img src="/tags.png" alt="" />
    </TagsContainer>
    </Layout>
}