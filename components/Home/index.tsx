import { About } from '@/components/about'
import { Servicios } from '@/components/servicios'
import { Objetivo } from '@/components/objetivo'
import { Faqs } from '@/components/faqs'
import { Cartel } from '@/components/cartel'
import ContactForm from '@/components/contact-form'
import styled from 'styled-components'

const ContactoContainer = styled.div`
@media (min-width: 850px) {
display:flex;
}
`
export default function HomePage(){
    return <div>
                <About/>
                <Servicios/>
                <Objetivo/>
                <Faqs/>
                <ContactoContainer>
                    <Cartel/>
                    <ContactForm/>
                </ContactoContainer>
    </div>
}