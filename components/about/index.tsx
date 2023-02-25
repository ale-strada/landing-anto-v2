import { AboutDesktop, AboutPicture, FotoAboutGris, FotoAboutLila } from "@/ui/img";
import { TextRoboto500, TitleWithShadow, TitleWithShadowBold } from "@/ui/text";
import { AboutSection, AboutTextConteiner, FotoWrapDesktop, FotoWrapMovile, FotoWrapTablet } from "./styled";

export function About(){
    return <AboutSection id="about">
        <FotoWrapMovile>
            <FotoAboutLila />
        </FotoWrapMovile>
        <FotoWrapTablet>
            <AboutPicture/>
        </FotoWrapTablet>
        <FotoWrapDesktop>
            <AboutDesktop/>
        </FotoWrapDesktop>
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
        <FotoWrapMovile>
            <FotoAboutGris/>
        </FotoWrapMovile>
        
    </AboutSection>
}