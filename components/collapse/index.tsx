import { ClosedArrow, OpenArrow } from '@/public/img';
import { CardDetailsText, TextInter600Lila, TextRoboto700Negro } from '@/ui/text';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { DetalleCardConteiner } from '../servicios/styled';
import { ButtonPaquetes } from '@/ui/buttons/styled';

type CollapseProps = {
    buttonText:string,
    contenido:string,
    paquete?:boolean,
    onClick?:()=>{},
    style?:{}
}

export function CollapseCard(props:CollapseProps) {
const [open, setOpen] = useState(false);

return (
    <>
    <div style={props.style}>
        <DetalleCardConteiner >
        <TextRoboto700Negro>{props.buttonText}</TextRoboto700Negro>
        <Button
        name='collapse-button'
        style={{background:"none", border:"none"}}
        onClick={() => setOpen(!open)}
        aria-controls={"collapse-text" + props.buttonText}
        aria-expanded={open}
        aria-label="expandir"
        >
        {open? <OpenArrow/>:<ClosedArrow/>}
        </Button> 
        
        </DetalleCardConteiner>
        <Collapse in={open}>
        <div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <CardDetailsText>
                    {props.contenido}   
                </CardDetailsText>
                {props.paquete? <ButtonPaquetes onClick={props.onClick}>
                    <TextInter600Lila style={{margin:"0"}}>Ver Paquetes</TextInter600Lila>
                </ButtonPaquetes>
                :
                ""
            }
                
            </div>
        
        </div>
        </Collapse>
    </div>

    </>
);
}

