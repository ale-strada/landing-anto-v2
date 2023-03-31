import { About } from '@/components/about'
import { Servicios } from '@/components/servicios'
import { Objetivo } from '@/components/objetivo'
import { Faqs } from '@/components/faqs'
import { Cartel } from '@/components/cartel'
import styled from 'styled-components'
import { ButtonToContact } from '@/ui/buttons'
import { Arrow } from '@/ui/img'
import { TextInter700 } from '@/ui/text'
import router from "next/router";


const ContactoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    justify-content: space-between;
    height: 550px;

    @media (min-width: 850px) {
align-items: center;
margin: 40px auto;
max-width:70%;
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
                    <ButtonToContact onClick={()=> {router.push("/contact")}} style={{alignSelf:"end"}}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <TextInter700 style={{color:" #9890E3", fontSize:"16px", margin:"0px"}}>Comenzar un proyecto juntos </TextInter700> 
                            <Arrow style={{marginLeft:"10px"}}/>
                        </div>
                    </ButtonToContact>
                </ContactoContainer>
    </div>
}