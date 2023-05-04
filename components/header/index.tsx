import { LogoDesk, LogoReducidoAnto, LogoTablet } from "@/ui/img";
import { Turn as Hamburger } from 'hamburger-react'
import router from "next/router";
import { useState } from "react";
import { BurgerWrap, DesktopWrap, HeaderConteiner, Hover, MobileWrap, NavMenu, TabletWrap, UlNav } from "./styled";
import { ButtonToContact } from "@/ui/buttons";
import { TextInter700 } from "@/ui/text";

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
        <MobileWrap style={{cursor:"pointer"}} onClick={handleClickLogo}>
            <LogoReducidoAnto />
        </MobileWrap>
        <TabletWrap style={{cursor:"pointer"}} onClick={handleClickLogo} >
            <LogoTablet />
        </TabletWrap>
        <DesktopWrap style={{cursor:"pointer"}} onClick={handleClickLogo} >
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
                <Hover style={{cursor:"pointer"}} onClick={handleClickScrollPortafolio}>Portafolio</Hover>
                <ButtonToContact style={{
                    cursor:"pointer",
                    width:"20%", 
                    height:"50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    top: "-5px"
                    }} onClick={handleClickScrollContacto}>
                    <Hover style={{fontSize:"24px"}}>Contactar</Hover> 
                </ButtonToContact>
            </UlNav>
        </NavMenu>

        </HeaderConteiner>
    
    }