import { Header } from '@/components/header'
import { About } from '@/components/about'
import { Servicios } from '@/components/servicios'
import { Objetivo } from '@/components/objetivo'
import { Faqs } from '@/components/faqs'
import { Cartel } from '@/components/cartel'
import ContactForm from '@/components/contact-form'
import { Footer } from '@/components/footer'
import styled from 'styled-components'

const ContactoContainer = styled.div`
@media (min-width: 850px) {
display:flex;
}
`
export function HomePage(){
    return <div>
                <Header/>
                <About/>
                <Servicios/>
                <Objetivo/>
                <Faqs/>
                <ContactoContainer>
                    <Cartel/>
                    <ContactForm/>
                </ContactoContainer>
                <Footer/>
    </div>
}