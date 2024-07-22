import { useEffect, useState } from "react";
import { TextPoppins500Gris, TextPoppins500GrisSpan, TextRoboto500, TitleSpanNew, TitleWithShadow, TextInter700 } from "@/ui/text";
import { AboutDesignSquare, AboutSection, AboutTextConteiner, FotoWrapDesktop, FotoWrapMovile, FotoWrapTablet, WrapDesktop, WrapMobile } from "./styled";
import dynamic from 'next/dynamic'
import { ButtonToContact } from "@/ui/buttons";
import router from "next/router";


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
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
      const style = {
        color:" #9890E3", fontSize:"16px", margin:"0px",
          ...(isHovered && { color: '#FFF' }),
        };

        return <div id="about">
        <AboutSection >
        <FotoWrapMovile>
            <DynamicFotoAboutLila />
        </FotoWrapMovile>
        <FotoWrapTablet>
            <DynamicAboutPicture/>
        </FotoWrapTablet>
        <FotoWrapDesktop>
            <AboutDesignSquare/>
            <DynamicFotoAbout/>
        </FotoWrapDesktop>
        <AboutTextConteiner>
            <WrapMobile>
                <TextRoboto500>
                    La tecnología actual abre muchos horizontes de crecimiento, si se saben aprovechar.
                </TextRoboto500>
            </WrapMobile>
            <div style={{display:"flex", flexDirection:"column", alignItems:"start"}}>
            <TitleWithShadow>El Diseño Digital</TitleWithShadow>
            <TitleWithShadow>is the <TitleSpanNew>new</TitleSpanNew>  BLACK.</TitleWithShadow>
            <WrapDesktop>
                <div style={{width:"530px", margin: "30px 0", textAlign:"left", alignSelf:"left"}}>
                <TextPoppins500Gris >
                La tecnología actual abre muchos horizontes de crecimiento para las marcas, <TextPoppins500GrisSpan>si se saben aprovechar.</TextPoppins500GrisSpan>
                </TextPoppins500Gris>
                <TextPoppins500Gris >
                ¿Estás listo para potenciar tu marca?
                </TextPoppins500Gris>
                </div>
                {/* <TextRoboto500 style={{marginTop:"20px", textAlign:"center", color: "red"}}>¡Quiero potenciar mi marca!</TextRoboto500> */}
                <ButtonToContact
                      onClick={()=> {router.push("/contact")}} 
                      style={{alignSelf:"end"}} 
                      onMouseEnter={handleHover}
                      onMouseLeave={handleMouseLeave}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <TextInter700 style={style}>¡Quiero potenciar mi marca! </TextInter700> 
                        </div>
                    </ButtonToContact>
            </WrapDesktop>
            </div>
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