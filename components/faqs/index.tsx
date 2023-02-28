import { FaqsDeco } from "@/ui/img";
import { CardDetailsText, TextRoboto700Lila, TextRoboto700Negro } from "@/ui/text";
import styled from "styled-components";
import { CollapseFaqs } from "../collapse-faqs";

const ResponsiveWrap = styled.div`
padding: 60px 5px 5px 10px;
width:100%;
background:#F5F5F5;
@media (min-width: 420px) {
padding:50px;
}
@media (min-width: 850px) {
padding:80px;
}
`
const CollapseWrap = styled.div`
@media (min-width: 850px) {
display: none;
}
`
const FaqsDesk = styled.div`
display:none;
@media (min-width: 850px) {
display: inherit;
margin-top: 60px;
}
`
const FaqsConrainer = styled.div`
max-width: 890px;
margin:45px 0;
` 
const DecoWrap = styled.div`
position: absolute;
top: 3483px;
left: 855px;
`
export function Faqs(){
    return <ResponsiveWrap id="faqs">
        <div style={{margin: "40px 30px 20px"}}>
            <TextRoboto700Lila >FAQS</TextRoboto700Lila>
        </div>
        <CollapseWrap>
            <CollapseFaqs buttonText="¿Necesito sólo un logo?" contenido="Si quieres identificarte y destacar, es mejor invertir tiempo y dinero en crear una identidad visual completa, recordemos que el logo es solo un identificador de tu marca en un sistema visual."/>
            <CollapseFaqs buttonText="¿Qué información necesito?" contenido ="Lo ideal es primero sentar las bases de tu marca, conectando con tu cliente ideal, haciendo 2 tareas: un moodboard y el brief los cuales ayudarán a establecer una visión conceptual."/>
            <CollapseFaqs buttonText="¿Cómo es el proceso?" contenido="Todo el proceso es por vía email así que debes estar atento a tu correo. Tendremos una reunión al iniciar, una de revisión conceptual y otra al finalizar."/>
        </CollapseWrap>
        <FaqsDesk>
            <FaqsConrainer>
                <TextRoboto700Negro style={{color:"#878282", fontSize:"32px"}}>¿Necesito sólo un logo?</TextRoboto700Negro>
                <CardDetailsText style={{fontSize:"24px"}}>Si quieres identificarte y destacar, es mejor invertir tiempo y dinero en crear una identidad visual completa, recordemos que el logo es solo un identificador de tu marca en un sistema visual.</CardDetailsText>
            </FaqsConrainer>
            <FaqsConrainer>
                <TextRoboto700Negro style={{color:"#878282", fontSize:"32px"}}>¿Qué información necesito?</TextRoboto700Negro>
                <CardDetailsText style={{fontSize:"24px"}}>Lo ideal es primero sentar las bases de tu marca, conectando con tu cliente ideal, haciendo 2 tareas: un moodboard y el brief los cuales ayudarán a establecer una visión conceptual.</CardDetailsText>
            </FaqsConrainer>
            <FaqsConrainer>
                <TextRoboto700Negro style={{color:"#878282", fontSize:"32px"}}>¿Cómo es el proceso?</TextRoboto700Negro>
                <CardDetailsText style={{fontSize:"24px"}}>Todo el proceso es por vía email así que debes estar atento a tu correo. Tendremos una reunión al iniciar, una de revisión conceptual y otra al finalizar.</CardDetailsText>
            </FaqsConrainer>
            <DecoWrap>
                <FaqsDeco/>
            </DecoWrap>
        </FaqsDesk>
    </ResponsiveWrap>
}