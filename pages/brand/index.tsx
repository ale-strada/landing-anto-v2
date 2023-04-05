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
    <div style={{borderBottom:"solid 2px", width:"100%"}}>
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
    
    </Layout>
}