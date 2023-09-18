import { TextRoboto500, TitleWithShadow } from "@/ui/text";
import { AboutSection, AboutTextConteiner, FotoWrapDesktop, FotoWrapMovile, FotoWrapTablet, WrapDesktop, WrapMobile } from "./styled";
import dynamic from 'next/dynamic'

const DynamicAboutPicture = dynamic(() =>
    import('@/public/img').then((mod) => mod.AboutPicture),{ssr: false}
);
const DynamicFotoAbout = dynamic(() =>
    import('@/public/img').then((mod) => mod.FotoAbout),{ssr:false}
);
const DynamicFotoAboutGris = dynamic(() =>
    import('@/public/img').then((mod) => mod.FotoAboutGris),{ssr:false}
);
const DynamicFotoAboutLila = dynamic(() =>
    import('@/public/img').then((mod) => mod.FotoAboutLila),{ssr:false}
);


export function About(){
        return <div id="about">
        <AboutSection >
        <FotoWrapMovile>
            <DynamicFotoAboutLila />
        </FotoWrapMovile>
        <FotoWrapTablet>
            <DynamicAboutPicture/>
        </FotoWrapTablet>
        <FotoWrapDesktop>
            <DynamicFotoAbout/>
        </FotoWrapDesktop>
        <AboutTextConteiner>
            <TitleWithShadow>El Diseño Digital</TitleWithShadow>
            <TitleWithShadow style={{fontWeight:"700"}}>is the new BLACK.</TitleWithShadow>
            <WrapMobile>
                <TextRoboto500>
                    La tecnología actual abre muchos horizontes de crecimiento, si se saben aprovechar.
                </TextRoboto500>
            </WrapMobile>
            <WrapDesktop>
                <TextRoboto500 style={{backgroundColor:"#BCBCEE", marginBottom:"0"}}>
                    La tecnología actual abre muchos horizontes de crecimiento, si se saben
                </TextRoboto500>
                <TextRoboto500 style={{backgroundColor:"#BCBCEE", width: "195px", margin:" 0 auto"}}>
                    aprovechar.
                </TextRoboto500>
                <TextRoboto500 style={{marginTop:"20px", textAlign:"center"}}>¡Es el momento de potenciar tu marca!</TextRoboto500>
            </WrapDesktop>
            <WrapMobile>
                <TextRoboto500>
                    ¡Es el momento de potenciar tu marca!
                </TextRoboto500>
            </WrapMobile>
        </AboutTextConteiner>
        <FotoWrapMovile>
            <DynamicFotoAboutGris/>
        </FotoWrapMovile>
        
    </AboutSection>
        </div>
        
}