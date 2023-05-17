import { fileBase64State, fileNameState } from '@/lib/hooks';
import Form from 'react-bootstrap/Form';
import { useRecoilState } from 'recoil';

function FormFile() {
    const [fileName, setFileName] = useRecoilState(fileNameState)
    const [fileBase64, setFileBase64] = useRecoilState(fileBase64State)
    function handleSubmit(e:any){
        e.preventDefault()
        setFileName(e.target.files[0].name)
        
        const file = e.target.files[0]; // tu objeto Fil
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        /**
         * Establece la cadena base64 del archivo en el estado después de leerla de un objeto de archivo.
         *
         * @param {Evento} event - El evento de entrada de archivo que contiene el objeto de archivo.
         */
        reader.onload = function () {
            if (typeof reader.result === 'string') {
                const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
                setFileBase64(base64String);
            }
        };
        
    }

    
    console.log(fileName, 'fileName');
    
return (
    <>
    <Form.Group  controlId="formFileSm" className="mb-3">
        <Form.Control onChange={handleSubmit} type="file" size="sm" />
    </Form.Group>
    </>
);
}

export default FormFile;