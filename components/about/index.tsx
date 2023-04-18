import { AboutDesktop, AboutPicture, FotoAbout, FotoAboutGris, FotoAboutLila } from "@/ui/img";
import { TextRoboto500, TitleWithShadow, TitleWithShadowBold } from "@/ui/text";
import { AboutSection, AboutTextConteiner, FotoWrapDesktop, FotoWrapMovile, FotoWrapTablet, WrapDesktop, WrapMobile } from "./styled";

export function About(){
    return <AboutSection id="about">
        <FotoWrapMovile>
            <FotoAboutLila />
        </FotoWrapMovile>
        <FotoWrapTablet>
            <AboutPicture/>
        </FotoWrapTablet>
        <FotoWrapDesktop>
            <FotoAbout/>
        </FotoWrapDesktop>
        <AboutTextConteiner>
            <TitleWithShadow>El Diseño Digital</TitleWithShadow>
            <TitleWithShadowBold>is the new BLACK.</TitleWithShadowBold>
            <WrapMobile>
                <TextRoboto500>
                    La tecnología actual abre muchos horizontes de crecimiento, si se saben aprovechar.
                </TextRoboto500>
            </WrapMobile>
            <WrapDesktop>
                <TextRoboto500 style={{backgroundColor:"#BCBCEE", marginBottom:"0"}}>
                    La tecnología actual abre muchos horizontes de crecimiento, si se saben
                </TextRoboto500>
                <TextRoboto500 style={{backgroundColor:"#BCBCEE", width: "135px", margin:" 0 auto"}}>
                    aprovechar.
                </TextRoboto500>
                <TextRoboto500 style={{marginTop:"20px"}}>¡Es el momento de potenciar tu marca!</TextRoboto500>
            </WrapDesktop>
            <WrapMobile>
                <TextRoboto500 >
                    ¡Es el momento de potenciar tu marca!
                </TextRoboto500>
            </WrapMobile>
            
        </AboutTextConteiner>
        <FotoWrapMovile>
            <FotoAboutGris/>
        </FotoWrapMovile>
        
    </AboutSection>
}