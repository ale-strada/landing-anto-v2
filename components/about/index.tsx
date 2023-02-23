import { FotoAboutGris, FotoAboutLila } from "@/ui/img";
import { TextRoboto500, TitleWithShadow, TitleWithShadowBold } from "@/ui/text";
import { AboutTextConteiner } from "./styled";

export function About(){
    return <section id="about" style={{backgroundColor:"#B1F4CF",position: "relative", bottom: "140px"}}>
        <FotoAboutLila />
        <AboutTextConteiner>
            <TitleWithShadow>El Diseño Digital</TitleWithShadow>
            <TitleWithShadowBold>is the new BLACK.</TitleWithShadowBold>
            <TextRoboto500 style={{maxWidth:"265px", marginTop:"40px"}}>
                La tecnología actual abre muchos horizontes de crecimiento, si se saben aprovechar.
            </TextRoboto500>
            <TextRoboto500 style={{maxWidth:"265px", marginTop:"40px"}}>
                ¡Es el momento de potenciar tu marca!
            </TextRoboto500>
        </AboutTextConteiner>
        <FotoAboutGris/>
    </section>
}