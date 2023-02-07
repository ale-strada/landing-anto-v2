import LogoReducido from "./logo-reducido.svg"
import FotoLila from "./fotolilaabaut.svg"
import FotoAbout from "./fotoabout.svg"
import DesktopLogo from "./desktop-outline.svg"
import AnimacionLogo from "./layers.svg"
import RedesLogo from "./logo-wechat.svg"
import Closed from "./arrowClosed.svg"
import Open from "./arrowOpen.svg"

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