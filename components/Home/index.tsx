import styled from 'styled-components'
import { Arrow } from '@/public/img'
import { TextInter700 } from '@/ui/text'
import router from "next/router";
import dynamic from 'next/dynamic'
import { useState } from 'react';


const ContactoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    justify-content: space-between;
    height: 550px;

    @media (min-width: 850px) {
align-items: center;
margin: 40px auto;
max-width:70%;
}
`
const DynamicLayout = dynamic(() =>
  import('@/components/layout').then((mod) => mod.Layout),{ssr: false}
);
const DynamicAbout = dynamic(() =>
  import('@/components/about').then((mod) => mod.About),{ssr: false}
);
const DynamicServicios = dynamic(() =>
  import('@/components/servicios').then((mod) => mod.Servicios),{ssr: false}
);
const DynamicObjetivo = dynamic(() =>
  import('@/components/objetivo').then((mod) => mod.Objetivo),{ssr: false}
);
const DynamicFaqs = dynamic(() =>
    import('@/components/faqs').then((mod) => mod.Faqs),{ssr: false}
);
const DynamicCartel = dynamic(() =>
    import('@/components/cartel').then((mod) => mod.Cartel),{ssr: false}
);
const DynamicButtonToContact = dynamic(() =>
    import('@/ui/buttons').then((mod) => mod.ButtonToContact),{ssr: false}
);

export function HomePage(){
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
    const styleArrow = {
      marginLeft:"10px",
      strokeColor:" #9890E3",
        ...(isHovered && { strokeColor: '#FFF' }),
    }
    return <DynamicLayout>
                <DynamicAbout/>
                <DynamicServicios/>
                <DynamicObjetivo/>
                <DynamicFaqs/>
                <ContactoContainer>
                    <DynamicCartel/>
                    <DynamicButtonToContact 
                      onClick={()=> {router.push("/contact")}} 
                      style={{alignSelf:"end"}} 
                      onMouseEnter={handleHover}
                      onMouseLeave={handleMouseLeave}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <TextInter700 style={style}>Comenzar un proyecto juntos </TextInter700> 
                            <Arrow style={styleArrow} strokeColor={styleArrow.strokeColor}/>
                        </div>
                    </DynamicButtonToContact>
                </ContactoContainer>
    </DynamicLayout>
}