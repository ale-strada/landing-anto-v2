import { LogoDesk, LogoReducidoAnto, LogoTablet } from "@/ui/img";
import { Turn as Hamburger } from 'hamburger-react'
import router from "next/router";
import { useState } from "react";
import { BurgerWrap, DesktopWrap, HeaderConteiner, Hover, MobileWrap, NavMenu, TabletWrap, UlNav } from "./styled";

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


    return<HeaderConteiner>
        <MobileWrap onClick={handleClickLogo}>
            <LogoReducidoAnto />
        </MobileWrap>
        <TabletWrap onClick={handleClickLogo} >
            <LogoTablet />
        </TabletWrap>
        <DesktopWrap onClick={handleClickLogo} >
            <LogoDesk />
        </DesktopWrap>
        <BurgerWrap>
            <Hamburger color="#FFFFFF" toggled={isOpen} toggle={setOpen} />
        </BurgerWrap>
        <NavMenu style={isOpen?{display:"flex"}:{}}>
            <UlNav>
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollAbout}>Home</Hover>
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollServicios}>Servicios</Hover>
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollFaqs}>FAQS</Hover>
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollContacto}>Contacto</Hover>
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollPortafolio}>Portafolio</Hover>
            </UlNav>
        </NavMenu>

        </HeaderConteiner>
    
    }