import { useState } from "react"
import { ClosedArrow, OpenArrow } from "../img"
import { Button, ButtonSinFondo, ContactButton } from "./styled"


export function ArrowButton(){
    const [open, setOpen] = useState(false)
    return <ButtonSinFondo onClick={()=>{setOpen(!open)}}>
        {open? <OpenArrow/>:<ClosedArrow/>}
    </ButtonSinFondo>
}


export function ContactFormButton(props:any){
    return <ContactButton type={props.type}>{props.text}</ContactButton>
}

export function ButtonToContact(props:any){
    return <Button onClick={props.onClick} style={props.style}>{props.children}</Button>
}
