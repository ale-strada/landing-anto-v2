import { sendApi, serviciosState, tamañoState } from '@/lib/hooks';
import { ContactFormButton } from '@/ui/buttons';
import { TextInter600Lila } from '@/ui/text';
import { useRecoilState, useRecoilValue } from 'recoil';
import Swal from 'sweetalert2'
import { CheckboxList } from '../checkbox-list';



export default function ContactForm() {
    const tamaño = useRecoilValue(tamañoState)
    const [servicios, setServicios] = useRecoilState(serviciosState)

    function handleSubmit(e:any){
        e.preventDefault()
        const contactoMensaje = {
            NOMBRE:e.target.nombre.value,
            EMAIL:e.target.email.value,
            PAIS: e.target.pais.value,
            TAMAÑO:tamaño,
            LINK: e.target.link.value,
            RUBRO:e.target.rubro.value,
            SERVICIOS_REQUERIDOS:servicios,
            PORQUE_ME_ELIJE:e.target.porque.value,
            PRESUPUESTO:e.target.presupuesto.value,
            MENSAJE:e.target.mensaje.value,
        }
        console.log(contactoMensaje);
        
        if(contactoMensaje.NOMBRE && 
            contactoMensaje.EMAIL && 
            contactoMensaje.PAIS &&
            contactoMensaje.TAMAÑO &&
            contactoMensaje.RUBRO &&
            contactoMensaje.SERVICIOS_REQUERIDOS &&
            contactoMensaje.PRESUPUESTO){
        sendApi(contactoMensaje)
        Swal.fire({
            title: "Su mensaje fue enviado",
            icon: "success",
            confirmButtonText: "ok",
        }).then(()=>{
            setServicios([""])
            const myForm:any = document.getElementById('contacto')
                myForm?.reset()
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

return (
    
    <form className='form-form' id='contacto' onSubmit={handleSubmit}>
        <label className='label-form'><TextInter600Lila style={{marginBottom: "5px"}}>Nombre y Apellido</TextInter600Lila>
            <input className='input-form' type="text" name="nombre"/>
        </label>
        <label className='label-form'><TextInter600Lila style={{marginBottom: "5px"}}>Email</TextInter600Lila>
            <input className='input-form' type="email" name="email" />
        </label>
        <label className='label-form'><TextInter600Lila style={{marginBottom: "5px"}}>¿De qué país eres?</TextInter600Lila>
            <input className='input-form' type="text" name="pais" />
        </label>
        <CheckboxList onChange={true} label="¿Cuál de las siguientes opciones te identifica?" checkbox={["Soy emprendedor / Trabajador independiente","Negocio pequeño","Compañía grande", "Organización sin fines de lucro"]}/>
        <label className='label-form'><TextInter600Lila style={{marginBottom: "5px"}}>Link de página web/Instagram de tu negocio</TextInter600Lila>
            <input className='input-form' type="text" name="link" placeholder='Si todavía no tienen coloca NA' />
        </label>
        <label className='label-form'><TextInter600Lila style={{marginBottom: "5px"}}>¿Cuál es el giro de tu negocio? ¿A qué se dedican o qué venden?</TextInter600Lila>
            <textarea className='textarea-form' name="rubro" />
        </label>
        <CheckboxList label="¿Cuál es el servicio de tu interés?" checkbox={["Branding básico", "Branding & Social Media", "Branding & Packaging","GIFS / Stickers", "Contenido"]}/>
        <label className='label-form'><TextInter600Lila style={{marginBottom: "5px"}}>¿Porqué requieres de mis servicios?</TextInter600Lila>
            <textarea className='textarea-form' name="porque" />
        </label>
        <label className='label-form'><TextInter600Lila style={{marginBottom: "5px"}}>¿Cuánto es tu presupuesto para este proyecto?</TextInter600Lila>
            <input className='input-form' type="text" name="presupuesto" placeholder='Si todavía no tienen coloca NA' />
        </label>
        <label className='label-form'><TextInter600Lila style={{marginBottom: "5px"}}>Mensaje adicional</TextInter600Lila>
            <textarea className='textarea-form' name="mensaje" placeholder='Si elegiste Branding & Packaging aquí puedes especificar en detalle los elementos que se requieren' />
        </label>
        <div className='button-wrap-form'>
            <ContactFormButton type="submit" text="Enviar"/> 
        </div>
    </form>
);
}


