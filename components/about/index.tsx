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
const DynamicTextRoboto500 = dynamic(() =>
    import('@/ui/text').then((mod) => mod.TextRoboto500),{ssr:false}
);
const DynamicTitleWithShadow = dynamic(() =>
    import('@/ui/text').then((mod) => mod.TitleWithShadow),{ssr:false}
);

export function About(){
    return <AboutSection id="about">
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
            <DynamicTitleWithShadow>El Diseño Digital</DynamicTitleWithShadow>
            <DynamicTitleWithShadow style={{fontWeight:"700"}}>is the new BLACK.</DynamicTitleWithShadow>
            <WrapMobile>
                <DynamicTextRoboto500>
                    La tecnología actual abre muchos horizontes de crecimiento, si se saben aprovechar.
                </DynamicTextRoboto500>
            </WrapMobile>
            <WrapDesktop>
                <DynamicTextRoboto500 style={{backgroundColor:"#BCBCEE", marginBottom:"0"}}>
                    La tecnología actual abre muchos horizontes de crecimiento, si se saben
                </DynamicTextRoboto500>
                <DynamicTextRoboto500 style={{backgroundColor:"#BCBCEE", width: "135px", margin:" 0 auto"}}>
                    aprovechar.
                </DynamicTextRoboto500>
                <DynamicTextRoboto500 style={{marginTop:"20px"}}>¡Es el momento de potenciar tu marca!</DynamicTextRoboto500>
            </WrapDesktop>
            <WrapMobile>
                <DynamicTextRoboto500 >
                    ¡Es el momento de potenciar tu marca!
                </DynamicTextRoboto500>
            </WrapMobile>
        </AboutTextConteiner>
        <FotoWrapMovile>
            <DynamicFotoAboutGris/>
        </FotoWrapMovile>
        
    </AboutSection>
}