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
/* height: 400px; */
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
    padding: 60px 35px;
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
export default function Gifs(){
    return <DynamicLayout>
    <HeroContainer>
    <Image src={"/gifs-hero.png"} alt={""} width={1440} height={1370}/>
    <BrandHero>
        <TextRoboto700 style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>GIFS</TextRoboto700>
        <TextRoboto500 >
            GIF quiere decir Graphics Interchange Format, en español, Formato de Intercambio de Gráficos. 
        </TextRoboto500>
        <TextRoboto500 >
            Son stickers que tienen movimiento, dependiendo el paquete que elijas puedes utilizarlos para Whatsapp o en plataformas com Instagram y Tiktok. 
        </TextRoboto500>
        <TextRoboto500 >
            Te invito a crear una manera personalizada de comunicarte con tus clientes. 
        </TextRoboto500>
    </BrandHero>
    </HeroContainer>
    <CardsContainer>
        <div style={{borderBottom:"solid 1px #878282", width:"100%"}}>
        <DynamicBrandCard conteinerStyle={{marginTop:"150px"}}
        title="PARA WHATSAPP" 
        content="Se diseñan exclusivamente para vos, con la tipografía, colores y
        recursos que vayan con tu marca, con ideas tuyas o mías. Se utilizan como stickers en tus conversaciones, ideal para una comunicación más cercana y amigable con tus clientes."
        list={[
            "Análisis de marca",
            "Definición de estilo",
            "5 diseños de GIFs"
        ]}
        buttonText="Quiero este paquete"
        />
        </div>
        <div style={{borderBottom:"solid 1px #878282", width:"100%"}}>
        <DynamicBrandCard title="PARA INSTAGRAM BÁSICO" 
        content="Se diseñan exclusivamente para vos, con la tipografía, colores y
        recursos que vayan con tu marca, con ideas tuyas o mías."
        content2="Para que sean “buscables” en Instagram se deben subir a GIPHY (un buscador de GIFS), *para aplicar a este buscador es necesario que cumplas 2 requisitos: Mail corporativo (por ejemplo contacto@tumarca .com)
        y tener un sitio web"
        
        list={[
            "Análisis de marca",
            "Definición de estilo",
            "5 diseños de GIFs",
            "Subida a GIPHY*",
            "Mini manual de uso"
        ]}
        buttonText="Quiero este paquete"
        />
        </div>
        <div style={{borderBottom:"solid 1px #878282", width:"100%"}}>
        <DynamicBrandCard title="PARA INSTAGRAM PREMIUM" 
        content="Se diseñan exclusivamente para vos, con la tipografía, colores y
        recursos que vayan con tu marca, con ideas tuyas o mías."
        
        content2="Para que sean “buscables” en Instagram se deben subir a GIPHY (un buscador de GIFS), *para aplicar a este buscador es necesario que cumplas 2 requisitos: Mail corporativo (por ejemplo contacto@tumarca .com)
        y tener un sitio web"
        list={[
            "Análisis de marca",
            "Definición de estilo",
            "10 diseños de GIFs",
            "Subida a GIPHY*",
            "Mini manual de uso",
            "Utilizables en Whatsapp",
            "Fondo diseñado con tus GIFs",
        ]}
        buttonText="Quiero este paquete"
        />
        </div>
    </CardsContainer>
    <TagsContainer>
        <div style={{width:"795px", height:"982px",display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
            <img src="/gif-hand.png" alt=""/>
        </div>
    </TagsContainer>
    </DynamicLayout>
    }