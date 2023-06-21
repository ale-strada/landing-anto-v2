import {  TextRoboto700 } from "@/ui/text";
import Image from 'next/image'
import styled from "styled-components";
import dynamic from "next/dynamic";

const DynamicLayout = dynamic(() =>
    import('@/components/layout').then((mod) => mod.Layout),{ssr:false}
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


export default function Contenido(){
    return <DynamicLayout>
    <HeroContainer>
    <Image src={"/contenido-proximamente.png"} alt={""} width={1440} height={1370}/>
    <BrandHero style={{
        width:"90%",
        height:"25%", 
        borderRadius:"30px",
        position:"relative",
        bottom:"665px"
        }}>
        <TextRoboto700 style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>PRÓXIMAMENTE PODRÁS VER ESTE SERVICIO</TextRoboto700>
    </BrandHero>
    </HeroContainer>
    </DynamicLayout>
    }