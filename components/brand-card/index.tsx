import { ButtonToContact } from "@/ui/buttons"
import { BrandCardContent, BrandCardList, BrandCardTitle, TextInter600Lila } from "@/ui/text"
import router from "next/router"
import styled from "styled-components"

const CardContainer = styled.div`
width: 80%;
/* height: 1330px; */
background: #BCBCEE;
margin: 70px auto;
padding: 60px;
display: flex;
flex-direction: column;
`
const ListContainer = styled.ul`
margin: 120px auto;
width: 60%;
`
//este es el componente brand card. requiere por props el contenido para mostrar. titulo, descripcion, lista de servicios incluidos.

type cardBrandProps = {
    title:string,
    content:string,
    list:string[],
}
export function BrandCard(props:cardBrandProps){
    function handleClick(){
        router.push("/contact")
    }
    return<>
    <CardContainer>
        <BrandCardTitle>{props.title}</BrandCardTitle>
        <BrandCardContent>{props.content}</BrandCardContent>
        <ListContainer >
            {props.list.map((s:string)=>{
                return <BrandCardList key={s}>· {" "+s}</BrandCardList>
            })}
        </ListContainer>
        <ButtonToContact onClick={handleClick} style={{
            background: "white",
            width: "233px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "end"
        }}>
            <TextInter600Lila style={{margin:"0"}}>Cotizar este paquete</TextInter600Lila>
        </ButtonToContact>
    </CardContainer>
    </>
}