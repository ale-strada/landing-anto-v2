import { LogoReducidoAnto } from "@/ui/img";
import { Turn as Hamburger } from 'hamburger-react'
import { useState } from "react";
import { HeaderConteiner } from "./styled";


export function Header(){

    const [isOpen, setOpen] = useState(false)


    return<HeaderConteiner>
        <LogoReducidoAnto/>
        <Hamburger color="#FFFFFF" toggled={isOpen} toggle={setOpen} />
        </HeaderConteiner>
    
    }