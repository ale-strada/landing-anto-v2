import LogoReducido from "./logo-reducido.svg"
import FotoLila from "./fotolilaabaut.svg"
import FotoAbout from "./fotoabout.svg"
import DesktopLogo from "./desktop-outline.svg"
import AnimacionLogo from "./layers.svg"
import RedesLogo from "./logo-wechat.svg"
import Closed from "./arrowClosed.svg"
import Open from "./arrowOpen.svg"
import WhiteCheck from "./check-blanco.svg"
import Telefono from "./Icono-telefono.svg"
import Sobre from "./icono-sobre.svg"
import Direccion from "./icono-direccion.svg"
import LogoLinkedIn from "./Linkedin.svg"
import LogoWhatsApp from "./whatsApp.svg"
import LogoBehance from "./Behance (2).svg"
import AboutPic from "./fotito-ofi03 1.svg"
import Chuno from "./chuno.svg"
import ChunoFoto from "./foto-grande.svg"
import OpenBig from "./arrowopenbig.svg"
import ClosedBig from "./arrowclosedbig.svg"
import styled from "styled-components"
import Alejandro from "./alejandro.svg"
import Alejandro2 from "./alejandro 2.svg"
import Carcajada from "./carcajada.svg"
import Beltran from "./Beltran.svg"
import Vir from "./vir.svg"
import Faqs from "./Frame.svg"

export function LogoReducidoAnto(){
    return <LogoReducido/>
}

export function FotoAboutLila(){
    return <FotoLila/>
}

export function FotoAboutGris(){
    return <FotoAbout style={{position: "relative", bottom: "5px"}}/>
}

export function Desktop(){
    return <DesktopLogo style={{marginBottom:"10px"}} />
}
export function Animacion(){
    return <AnimacionLogo style={{marginBottom:"10px"}} />
}
export function Redes(){
    return <RedesLogo style={{marginBottom:"10px"}} />
}
const ArrowresponsiveWrap = styled.div`
display: none;
@media (min-width: 850px) {
display:inherit;
}
`
const ArrowresponsiveWrapMobile = styled.div`
@media (min-width: 850px) {
display:none;
}
`

export function ClosedArrow(){
    return <div>
            <ArrowresponsiveWrapMobile>
                <Closed />
            </ArrowresponsiveWrapMobile>
            <ArrowresponsiveWrap>
                <ClosedBig/>
            </ArrowresponsiveWrap>
    </div>
   
}
export function OpenArrow(){
    return <div>
        <ArrowresponsiveWrapMobile>
            <Open/>
        </ArrowresponsiveWrapMobile>
        <ArrowresponsiveWrap>
            <OpenBig/>
        </ArrowresponsiveWrap>
    </div>
    
}
export function Check(){
    return <WhiteCheck/>
}
export function Phone(props:any){
    return <Telefono style={props.style}/>
}
export function Mail(props:any){
    return <Sobre style={props.style}/>
}
export function Address(props:any){
    return <Direccion style={props.style}/>
}

export function LinkedIn(props:any){
    return <LogoLinkedIn onClick={props.onClick}/>
}
export function WhatsApp(props:any){
    return <LogoWhatsApp onClick={props.onClick}/>
}
export function Behance(props:any){
    return <LogoBehance onClick={props.onClick}/>
}

export function AboutPicture(){
    return <AboutPic/>
}

export function ChunoDesk(){
    return <Chuno/>
}

export function AboutDesktop(){
    return <ChunoFoto/>
}

export function ChunoDeskBig(){
    return <ChunoDeskBig/>
}

export function AlejandroMessage(){
    return <Alejandro/>
}
export function AlejandroMessageTwo(){
    return <Alejandro2/>
}
export function CarcajadaMessage(){
    return <Carcajada/>
}
export function BeltranMessage(){
    return <Beltran/>
}
export function VirMessage(){
    return <Vir/>
}
export function FaqsDeco(){
    return <Faqs/>
}