import { Turn as Hamburger } from 'hamburger-react'
import router from "next/router";
import { useState } from "react";
import { BurgerWrap, ButtonToContactHeader, DesktopWrap, HeaderConteiner, MobileWrap, NavMenu, TabletWrap, UlNav } from "./styled";
import dynamic from 'next/dynamic'

export function Header(){

    const [isOpen, setOpen] = useState(false)

    function handleClickLogo(){
        router.push("/")
    }
    
    const handleClickScrollAbout = () => {
        router.push("/").then(()=>{
            const element = document.getElementById('about');
            if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
        })
    };
    const handleClickScrollServicios = () => {
        router.push("/").then(()=>{
            const element = document.getElementById('servicios');
            if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
        })
    };
    const handleClickScrollFaqs = () => {
        router.push("/").then(()=>{
            const element = document.getElementById('faqs');
            if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
        })
    };
    const handleClickScrollContacto = () => {
        router.push("/contact")
    };
    const handleClickScrollPortafolio = () => {
        window.open("https://www.behance.net/antonellajaime", "_blank");
    };


    const DynamicLogoDesk = dynamic(() =>
      import('@/public/img').then((mod) => mod.LogoDesk),{ssr:false}
    );
    const DynamicLogoReducidoAnto = dynamic(() =>
      import('@/public/img').then((mod) => mod.LogoReducidoAnto),{ssr:false}
    );
    const DynamicLogoTablet = dynamic(() =>
      import('@/public/img').then((mod) => mod.LogoTablet),{ssr:false}
    );
    const DynamicHover = dynamic(() =>
      import('./styled').then((mod) => mod.Hover),{ssr:false}
    );
    return<HeaderConteiner>
        <MobileWrap style={{cursor:"pointer"}} onClick={handleClickLogo}>
            <DynamicLogoReducidoAnto />
        </MobileWrap>
        <TabletWrap style={{cursor:"pointer"}} onClick={handleClickLogo} >
            <DynamicLogoTablet />
        </TabletWrap>
        <DesktopWrap style={{cursor:"pointer"}} onClick={handleClickLogo} >
            <DynamicLogoDesk />
        </DesktopWrap>
        <BurgerWrap>
            <Hamburger color="#FFFFFF" toggled={isOpen} toggle={setOpen} />
        </BurgerWrap>
        <NavMenu style={isOpen?{display:"flex"}:{}}>
            <UlNav>
                <DynamicHover style={{cursor:"pointer"}} onClick={handleClickScrollAbout}>Home</DynamicHover>
                <DynamicHover style={{cursor:"pointer"}} onClick={handleClickScrollServicios}>Servicios</DynamicHover>
                {/* <DynamicHover style={{cursor:"pointer"}} onClick={handleClickScrollFaqs}>FAQS</DynamicHover> */}
                <DynamicHover style={{cursor:"pointer"}} onClick={handleClickScrollPortafolio}>Portafolio</DynamicHover>
                <ButtonToContactHeader  onClick={handleClickScrollContacto}>
                   Contactar
                </ButtonToContactHeader>
            </UlNav>
        </NavMenu>

        </HeaderConteiner>
    
    }