import { TextRoboto700Lila } from "@/ui/text";
import { CollapseFaqs } from "../collapse-faqs";

export function Faqs(){
    return <div style={{margin: "20px"}}>
        <TextRoboto700Lila style={{margin: "40px 30px 20px;"}}>FAQS</TextRoboto700Lila>
        <CollapseFaqs buttonText="¿Necesito solo un logo?" contenido="Si quieres identificarte y destacar, es mejor invertir tiempo y dinero en crear una identidad visual completa, recordemos que el logo es solo un identificador de tu marca en un sistema visual."/>
        <CollapseFaqs buttonText="¿Qué información necesito?" contenido ="Lo ideal es primero sentar las bases de tu marca, conectando con tu cliente ideal, haciendo 2 tareas: un moodboard y el brief los cuales ayudarán a establecer una visión conceptual."/>
        <CollapseFaqs buttonText="¿Cómo es el proceso?" contenido="Todo el proceso es por vía email así que debes estar atento a tu correo. Tendremos una reunión al iniciar, una de revisión conceptual y otra al finalizar."/>
    </div>
}