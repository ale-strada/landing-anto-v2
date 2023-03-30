import { FaqsDeco } from "@/ui/img";
import { CardDetailsText, TextRoboto700Lila, TextRoboto700Negro } from "@/ui/text";
import { Divide } from "hamburger-react";
import router from "next/router";
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
max-width: 1200px;
margin:100px 0;
` 
const DecoWrap = styled.div`
position: relative;
bottom: 800px;
left: 826px;
width: 0px;
height: 0px;
`
export function Faqs(){
    const handleClickScrollContacto = () => {
        router.push("/contact")
    };

    const handleClickScrollServicios = () => {
        const element = document.getElementById('servicios');
        if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
    };

    return <ResponsiveWrap id="faqs">
        <div style={{margin: "40px 10px 20px"}}>
            <TextRoboto700Lila >FAQS</TextRoboto700Lila>
        </div>
        <CollapseWrap>
            <CollapseFaqs buttonText="¿Necesito sólo un logo?" contenido={<CardDetailsText>Si quieres identificarte y destacar, es mejor invertir tiempo y dinero en crear una identidad visual completa, recordemos que el logo es solo un identificador de tu marca en un sistema visual.</CardDetailsText>} />
            <CollapseFaqs buttonText="¿Qué información necesito?" contenido ={<CardDetailsText>Lo ideal es primero sentar las bases de tu marca, conectando con tu cliente ideal, haciendo 2 tareas: un moodboard y el brief los cuales ayudarán a establecer una visión conceptual.</CardDetailsText>} />
            <CollapseFaqs buttonText="¿Cómo adquiero tus servicios?" contenido ={
                <div>
                    <CardDetailsText>Como primera medida debes conocer los servicios que ofrezco. Si aún no los conoces puedes verlos haciendo <a style={{color:"var(--bs-link-color)"}} onClick={handleClickScrollServicios}>click aquí</a>.</CardDetailsText>
                    <CardDetailsText>Una vez que sepas qué servicio te gustaría contratar, llena el formulario que se encuentra en la parte de Contacto o haz <a style={{color:"var(--bs-link-color)"}} onClick={handleClickScrollContacto}>click aquí</a>.</CardDetailsText>
                    <CardDetailsText>Enviado el formulario, me comunicaré contigo al correo que proporcionaste en un plazo de 72hs hábiles. Recibirás la cotización del servicio solicitado y si estás de acuerdo,  una vez realizada la seña del servicio, agendaremos una videollamada para comenzar a trabajar juntos.</CardDetailsText>                
                </div>
            } />
            <CollapseFaqs buttonText="¿Cómo es el proceso?" contenido={<CardDetailsText>Todo el proceso es por vía email así que debes estar atento a tu correo. Tendremos una reunión al iniciar, una de revisión conceptual y otra al finalizar.</CardDetailsText>}/>
            <CollapseFaqs buttonText="¿Cuál es el método de pago?" contenido={<CardDetailsText>Para clientes dentro de Argentina, se realiza por transferencia bancaria. Para clientes del exterior se realiza por medio de PayPal.</CardDetailsText>}/>
            <CollapseFaqs buttonText="¿Es compatible mi negocio con tu estilo de diseño?" contenido={
                <div>
                    <CardDetailsText>Trabajo con una gran variedad de giros de negocios: gastronomía, peluquería, estética, deco, mascotas, etc.</CardDetailsText>
                    <CardDetailsText>Te recomiendo revisar mi <a href="https://www.behance.net/antonellajaime">portafolio de trabajos</a>  para que tengas una referencia, aunque cada proyecto es único.</CardDetailsText>
                </div>
            }/>
        </CollapseWrap>
        <FaqsDesk>
            <FaqsConrainer>
                <TextRoboto700Negro style={{color:"#878282", fontSize:"32px"}}>¿Necesito sólo un logo?</TextRoboto700Negro>
                <CardDetailsText style={{fontSize:"24px", margin:"10px"}}>Si quieres identificarte y destacar, es mejor invertir tiempo y dinero en crear una identidad visual completa, recordemos que el logo es solo un identificador de tu marca en un sistema visual.</CardDetailsText>
            </FaqsConrainer>
            <FaqsConrainer>
                <TextRoboto700Negro style={{color:"#878282", fontSize:"32px"}}>¿Qué información necesito?</TextRoboto700Negro>
                <CardDetailsText style={{fontSize:"24px", margin:"10px"}}>Lo ideal es primero sentar las bases de tu marca, conectando con tu cliente ideal, haciendo 2 tareas: un moodboard y el brief los cuales ayudarán a establecer una visión conceptual.</CardDetailsText>
            </FaqsConrainer>
            <FaqsConrainer>
                <TextRoboto700Negro style={{color:"#878282", fontSize:"32px"}}>¿Cómo adquiero tus servicios?</TextRoboto700Negro>
                <CardDetailsText style={{fontSize:"24px", margin:"10px"}}>Como primera medida debes conocer los servicios que ofrezco. Si aún no los conoces puedes verlos haciendo <a style={{color:"var(--bs-link-color)", cursor:"pointer"}} onClick={handleClickScrollServicios}>click aquí</a>.</CardDetailsText>
                <CardDetailsText style={{fontSize:"24px", margin:"10px"}}>Una vez que sepas qué servicio te gustaría contratar, llena el formulario que se encuentra en la parte de Contacto o haz <a style={{color:"var(--bs-link-color)", cursor:"pointer"}} onClick={handleClickScrollContacto}>click aquí</a>.</CardDetailsText>
                <CardDetailsText style={{fontSize:"24px", margin:"10px"}}>Enviado el formulario, me comunicaré contigo al correo que proporcionaste en un plazo de 72hs hábiles. Recibirás la cotización del servicio solicitado y si estás de acuerdo,  una vez realizada la seña del servicio, agendaremos una videollamada para comenzar a trabajar juntos.</CardDetailsText>
            </FaqsConrainer>
            <FaqsConrainer>
                <TextRoboto700Negro style={{color:"#878282", fontSize:"32px"}}>¿Cómo es el proceso?</TextRoboto700Negro>
                <CardDetailsText style={{fontSize:"24px", margin:"10px"}}>Todo el proceso es por vía email así que debes estar atento a tu correo. Tendremos una reunión al iniciar, una de revisión conceptual y otra al finalizar.</CardDetailsText>
            </FaqsConrainer>
            <FaqsConrainer>
                <TextRoboto700Negro style={{color:"#878282", fontSize:"32px"}}>¿Cuál es el método de pago?</TextRoboto700Negro>
                <CardDetailsText style={{fontSize:"24px", margin:"10px"}}>Para clientes dentro de Argentina, se realiza por transferencia bancaria. Para clientes del exterior se realiza por medio de PayPal.</CardDetailsText>
            </FaqsConrainer>
            <FaqsConrainer>
                <TextRoboto700Negro style={{color:"#878282", fontSize:"32px"}}>¿Es compatible mi negocio con tu estilo de diseño?</TextRoboto700Negro>
                <CardDetailsText style={{fontSize:"24px", margin:"10px"}}>Trabajo con una gran variedad de giros de negocios: gastronomía, peluquería, estética, deco, mascotas, etc.</CardDetailsText>
                <CardDetailsText style={{fontSize:"24px", margin:"10px"}}>Te recomiendo revisar mi <a href="https://www.behance.net/antonellajaime">portafolio de trabajos</a>  para que tengas una referencia, aunque cada proyecto es único.</CardDetailsText>
            </FaqsConrainer>
            {/* <DecoWrap>
                <FaqsDeco/>
            </DecoWrap> */}
        </FaqsDesk>
    </ResponsiveWrap>
}