import { sendApi } from '@/lib/hooks';
import Swal from 'sweetalert2'

export default function ContactForm() {
    function handleSubmit(e:any){
        e.preventDefault()
        const contactoMensaje = {
            nombre: e.target.nombre.value,
            email: e.target.email.value,
            mensaje: e.target.mensaje.value
        }
        if(contactoMensaje.nombre && contactoMensaje.email && contactoMensaje.mensaje){
            
        sendApi(contactoMensaje)
        Swal.fire({
            title: "Su mensaje fue enviado",
            icon: "success",
            confirmButtonText: "ok",
        }); 
        }else{
        Swal.fire({
            title: "Por favor complete todos los campos del formulario para enviar un mensaje",
            icon: "error",
            confirmButtonText: "ok",
        });   
        }

    
    }

return (
    
    <form onSubmit={handleSubmit}>
        <input type="text" name="nombre"/>
        <input type="email" name="email" />
        <textarea name="mensaje" />
        <button type="submit">enviar</button>
    </form>
);
}

function sendEmail(arg0: string) {
    throw new Error('Function not implemented.');
}
