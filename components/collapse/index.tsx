import { ClosedArrow, OpenArrow } from '@/ui/img';
import { CardDetailsText, TextRoboto700Negro } from '@/ui/text';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { DetalleCardConteiner } from '../servicios/styled';

export function CollapseCard(props:any) {
const [open, setOpen] = useState(false);

return (
    <>
        <DetalleCardConteiner>
            <TextRoboto700Negro>{props.buttonText}</TextRoboto700Negro>
        <Button
        style={{background:"none", border:"none"}}
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
        >
        {open? <OpenArrow/>:<ClosedArrow/>}
        </Button> 
        </DetalleCardConteiner>
        <Collapse in={open}>
        <div id="collapse-text">
        <CardDetailsText>
          {props.contenido}   
        </CardDetailsText>
        </div>
        </Collapse>
    </>
);
}

