import { ButtonToContact } from "@/ui/buttons"
import { BrandCardContent, BrandCardList, BrandCardTitle, TextInter600Lila } from "@/ui/text"
import router from "next/router"
import styled from "styled-components"

const CardContainer = styled.div`
width: 90%;
/* height: 1330px; */
background: #BCBCEE;
margin: 70px auto;
padding: 20px 15px;
display: flex;
flex-direction: column;
@media(min-width: 850px) {
width: 80%;
padding: 60px;
}
`
const ListContainer = styled.ul`
padding-left: 0;
width: 100%;
@media(min-width: 850px) {
width: 60%;
margin: 60px auto;
}
`
//este es el componente brand card. requiere por props el contenido para mostrar. titulo, descripcion, lista de servicios incluidos.

type cardBrandProps = {
    title:string,
    content:string,
    list:string[],
    listDescription?:string,
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
            <BrandCardContent style={{marginBottom:"80px"}}>{props.listDescription? props.listDescription : ""}</BrandCardContent>
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
            alignSelf: "end",
            zIndex:"5",
        }}>
            <TextInter600Lila style={{margin:"0"}}>Cotizar este paquete</TextInter600Lila>
        </ButtonToContact>
    </CardContainer>
    </>
}