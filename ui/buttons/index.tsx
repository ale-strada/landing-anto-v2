import { useState } from "react"
import { ClosedArrow, OpenArrow } from "../img"
import { ButtonSinFondo } from "./styled"


export function ArrowButton(){
    const [open, setOpen] = useState(false)
    return <ButtonSinFondo onClick={()=>{setOpen(!open)}}>
        {open? <OpenArrow/>:<ClosedArrow/>}
    </ButtonSinFondo>
}