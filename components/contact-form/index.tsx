import { sendApi } from '@/lib/hooks';
import { ContactFormButton } from '@/ui/buttons';
import { TextInter600Lila } from '@/ui/text';
import { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'


export default function ContactForm() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")
    function handleSubmit(e:any){
        e.preventDefault()
        setNombre(e.target.nombre.value) 
        setEmail(e.target.email.value) 
        setMensaje(e.target.mensaje.value)
        const contactoMensaje = {
            nombre:nombre,
            email:email,
            mensaje:mensaje
        }
        if(contactoMensaje.nombre && contactoMensaje.email && contactoMensaje.mensaje){
            
        sendApi(contactoMensaje)
        Swal.fire({
            title: "Su mensaje fue enviado",
            icon: "success",
            confirmButtonText: "ok",
        }).then(()=>{
            setNombre("");
            setEmail("");
            setMensaje("")
        }
        ); 
        }else{
        Swal.fire({
            title: "Por favor complete todos los campos del formulario para enviar un mensaje",
            icon: "error",
            confirmButtonText: "ok",
        });   
        
        }
    }

    const Input = styled.input`
    padding:10px;
    width: 382px;
    height: 55px;
    background: rgba(152, 144, 227, 0.09);
    border: 1px solid #9890E3;
    border-radius: 14px;
    `
    const TextArea = styled.textarea`
    padding:10px;
    width: 382px;
    background: rgba(152, 144, 227, 0.09);
    border: 1px solid #9890E3;
    border-radius: 14px;
    height: 170px;
    `
    const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px auto;
    `
    const Label = styled.label`
    margin: 10px 0;
    `
return (
    
    <Form onSubmit={handleSubmit}>
        <Label><TextInter600Lila style={{marginBottom: "5px"}}>Tu nombre</TextInter600Lila>
            <Input type="text" name="nombre"/>
        </Label>
        <Label><TextInter600Lila style={{marginBottom: "5px"}}>Tu mail</TextInter600Lila>
            <Input type="email" name="email" />
        </Label>
        <Label><TextInter600Lila style={{marginBottom: "5px"}}>Escribe tu mensaje</TextInter600Lila>
            <TextArea name="mensaje" />
        </Label>
        <div style={{
            width:"382px",
            display: "flex",
            justifyContent: "flex-end"
            }}>
            <ContactFormButton type="submit" text="Enviar mensaje"/> 
        </div>
        
    </Form>
);
}


