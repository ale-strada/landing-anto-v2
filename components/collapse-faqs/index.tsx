import styled from 'styled-components';
import { TextRoboto700Negro } from '@/ui/text';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const FaqsConteiner = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 10px;
padding: 20px 0px 0 0px;
justify-content: space-between;
`

export function CollapseFaqs(props:any) {
const [open, setOpen] = useState(false);

return (
    <>
        <FaqsConteiner>
            <Button
            style={{background:"none", border:"none"}}
            onClick={() => setOpen(!open)}
            aria-controls={"collapse-text" + props.buttonText}
            aria-expanded={open}
            >
                <TextRoboto700Negro style={{color:"#878282", fontSize: "23px", textAlign: "left"}}>{props.buttonText}</TextRoboto700Negro>
            </Button> 
        </FaqsConteiner>
        <Collapse in={open}>
            <div>
                {props.contenido}   
            </div>
        </Collapse>
    </>
);
}