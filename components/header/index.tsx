import { LogoReducidoAnto } from "@/ui/img";
import { TextRoboto500 } from "@/ui/text";
import { Turn as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { HeaderConteiner, NavMenu, UlNav } from "./styled";

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

    const style={
    }
    const styleNone ={
        display:"none"
    }
    return<HeaderConteiner>
        <LogoReducidoAnto/>
        <Hamburger color="#FFFFFF" toggled={isOpen} toggle={setOpen} />
        <NavMenu style={isOpen? style:styleNone}>
            <UlNav>
                <TextRoboto500 onClick={handleClickScrollAbout}>home</TextRoboto500>
                <TextRoboto500 onClick={handleClickScrollServicios}>Servicios</TextRoboto500>
                <TextRoboto500 onClick={handleClickScrollFaqs}>Faqs</TextRoboto500>
                <TextRoboto500 onClick={handleClickScrollContacto}>Contacto</TextRoboto500>
            </UlNav>
        </NavMenu>

        </HeaderConteiner>
    
    }