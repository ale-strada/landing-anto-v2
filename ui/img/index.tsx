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
import Linea from "./Line 3.svg"
import AboutPic from "./fotito-ofi03 1.svg"

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
export function ClosedArrow(){
    return <Closed />
}
export function OpenArrow(){
    return <Open/>
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
export function Line(){
    return <Linea/>
}

export function AboutPicture(){
    return <AboutPic/>
}