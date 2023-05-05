import { Turn as Hamburger } from 'hamburger-react'
import router from "next/router";
import { useState } from "react";
import { BurgerWrap, ButtonToContactHeader, DesktopWrap, HeaderConteiner, Hover, MobileWrap, NavMenu, TabletWrap, UlNav } from "./styled";
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
        router.push("https://www.behance.net/antonellajaime")
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
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollAbout}>Home</Hover>
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollServicios}>Servicios</Hover>
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollFaqs}>FAQS</Hover>
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollPortafolio}>Portafolio</Hover>
                <ButtonToContactHeader onClick={handleClickScrollContacto}>
                    <Hover style={{fontSize:"24px"}}>Contactar</Hover> 
                </ButtonToContactHeader>
            </UlNav>
        </NavMenu>

        </HeaderConteiner>
    
    }