import styled from "styled-components";
import { Animacion, Desktop, Redes } from "../img";
import { TextRoboto700 } from "../text";

const ServicioCardConteiner = styled.div `
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
`

export function DisenoCard(){
    return <ServicioCardConteiner>
        <Desktop/>
        <TextRoboto700>Diseño</TextRoboto700>
    </ServicioCardConteiner>
}
export function AnimacionCard(){
    return <ServicioCardConteiner>
        <Animacion/>
        <TextRoboto700>Animación</TextRoboto700>
    </ServicioCardConteiner>
}
export function RedesCard(){
    return <ServicioCardConteiner>
        <Redes/>
        <TextRoboto700>Redes</TextRoboto700>
    </ServicioCardConteiner>
}