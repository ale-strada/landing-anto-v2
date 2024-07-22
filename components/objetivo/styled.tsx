import styled from "styled-components";

export const ObjetivoConteiner = styled.div `
background: #606060;
height: 685px;
display: flex;
align-items: center;
justify-content: space-around;
@media (min-width: 420px) {
padding: 60px;
}
@media (min-width: 850px) {
padding: 40px;
background-color: #E7E7F9;
}
`
export const DescriptionContainer= styled.div`
@media (min-width: 850px) {
width:50%;
}
`
export const ObjetivosDetailsConteiner = styled.div`
margin: 40px;
@media (min-width: 420px) {
margin-top:90px;
}
` 
export const DetailsConteiner = styled.div`
display: flex;
margin: 20px 0;
@media (min-width: 420px) {
margin-top: 60px;
}
` 

export const Testimonios = styled.div`
display: none;
@media (min-width: 850px) {
display: flex;
flex-direction: column;
width:50%;
margin: 20px 0 0 0;
}
` 

export const TituloConImagen = styled.div`
display: none;
@media (min-width: 420px) {
display: flex;
flex-direction: column;
width:50%;
margin: 20px 0 0 0;
}
` 