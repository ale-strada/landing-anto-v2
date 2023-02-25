import { TextRoboto700Lila } from "@/ui/text";
import styled from "styled-components";
import { CollapseFaqs } from "../collapse-faqs";

const ResponsiveWrap = styled.div`
padding: 60px 5px 5px 10px;
width:100%;
background:#F5F5F5;
@media (min-width: 420px) {
padding:50px;
}
`

export function Faqs(){
    return <ResponsiveWrap id="faqs">
        <div style={{margin: "40px 30px 20px"}}>
            <TextRoboto700Lila >FAQS</TextRoboto700Lila>
        </div>
        <CollapseFaqs buttonText="¿Necesito sólo un logo?" contenido="Si quieres identificarte y destacar, es mejor invertir tiempo y dinero en crear una identidad visual completa, recordemos que el logo es solo un identificador de tu marca en un sistema visual."/>
        <CollapseFaqs buttonText="¿Qué información necesito?" contenido ="Lo ideal es primero sentar las bases de tu marca, conectando con tu cliente ideal, haciendo 2 tareas: un moodboard y el brief los cuales ayudarán a establecer una visión conceptual."/>
        <CollapseFaqs buttonText="¿Cómo es el proceso?" contenido="Todo el proceso es por vía email así que debes estar atento a tu correo. Tendremos una reunión al iniciar, una de revisión conceptual y otra al finalizar."/>
    </ResponsiveWrap>
}