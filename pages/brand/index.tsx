import { TextRoboto500, TextRoboto700 } from "@/ui/text";
import Image from 'next/image'
import styled from "styled-components";
import dynamic from "next/dynamic";

const DynamicLayout = dynamic(() =>
  import('@/components/layout').then((mod) => mod.Layout),{ssr:false}
);
const DynamicBrandCard = dynamic(() =>
  import('@/components/brand-card').then((mod) => mod.BrandCard),{ssr:false}
);
const HeroContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const BrandHero = styled.div`
width: 390px;
height: 500px;
background: #BCBCEE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 75px;
position: relative;
bottom: 930px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 35px;
@media(min-width: 500px){
    width: 590px;
    height: 523px;
}
@media(min-width: 1000px){
    width: 956px;
    height: 523px;
    padding: 60px;
}
`

const CardsContainer = styled.div`
position: relative;
bottom: 600px;
`
const TagsContainer = styled.div`
height:0px;
position: relative;
bottom: 900px;
left: 0px;
z-index:0;
@media(min-width: 500px){
    left:350px
}
@media(min-width: 850px){
    left:743px;
    bottom:968px
}
`
export default function Brand(){
    return <DynamicLayout>
    <HeroContainer>
    <Image src={"/brand-hero.png"} alt={""} width={1440} height={1370}/>
    <BrandHero>
        <TextRoboto700 >BRANDING</TextRoboto700>
        <TextRoboto500 >Cada marca tiene una identidad, personalidad, valores, atributos y características. </TextRoboto500>
        <TextRoboto500 >
        Desarrollemos el branding de tu marca usando diseños estratégicos para conectar con tu público, logrando una identidad de marca consistente, única y completa.</TextRoboto500>
    </BrandHero>
    </HeroContainer>
    <CardsContainer>
        <div style={{borderBottom:"solid 1px #878282", width:"100%"}}>
        <DynamicBrandCard title="BRANDING" 
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
        <DynamicBrandCard title="BRANDING & SOCIAL MEDIA" 
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
        <DynamicBrandCard title="BRANDING & PACKAGING" 
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
    </DynamicLayout>
}