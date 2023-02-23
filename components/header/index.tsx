import { LogoReducidoAnto } from "@/ui/img";
import { TextRoboto500 } from "@/ui/text";
import { Turn as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { BurgerWrap, HeaderConteiner, NavMenu, UlNav } from "./styled";

export function Header(){

    const [isOpen, setOpen] = useState(false)
    
    const handleClickScrollAbout = () => {
        const element = document.getElementById('about');
        if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
    };
    const handleClickScrollServicios = () => {
        const element = document.getElementById('servicios');
        if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
    };
    const handleClickScrollFaqs = () => {
        const element = document.getElementById('faqs');
        if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
    };
    const handleClickScrollContacto = () => {
        const element = document.getElementById('contacto');
        if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
    };

    return<HeaderConteiner>
        <LogoReducidoAnto/>
        <BurgerWrap>
            <Hamburger color="#FFFFFF" toggled={isOpen} toggle={setOpen} />
        </BurgerWrap>
        <NavMenu style={isOpen?{display:"flex"}:{}}>
            <UlNav>
                <TextRoboto500 style={{cursor:"pointer"}} onClick={handleClickScrollAbout}>Home</TextRoboto500>
                <TextRoboto500 style={{cursor:"pointer"}} onClick={handleClickScrollServicios}>Servicios</TextRoboto500>
                <TextRoboto500 style={{cursor:"pointer"}} onClick={handleClickScrollFaqs}>FAQS</TextRoboto500>
                <TextRoboto500 style={{cursor:"pointer"}} onClick={handleClickScrollContacto}>Contacto</TextRoboto500>
            </UlNav>
        </NavMenu>

        </HeaderConteiner>
    
    }