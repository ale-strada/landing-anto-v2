import styled from "styled-components";

export const TextRoboto500 = styled.p<{colorCustom?:string, fontSizeCustom?:string}>`
font-family: var(--font-roboto);
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 28px;
text-align: justify;
color: #FFFFFF;
@media (min-width: 420px) {
    //font-size:32px;
}
@media (min-width: 1000px) {
    text-align:justify;
    font-size:${(props) => props.fontSizeCustom || "36px"};
    line-height: 42px;
    color: ${(props) => props.colorCustom || "#FFFFFF"};
}
`
export const TextPoppins500 = styled.p`
font-family: var(--font-poppins);
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 28px;
text-align: justify;
color: #FFFFFF;
@media (min-width: 420px) {
//font-size:32px;
}
@media (min-width: 1000px) {
text-align:justify;
font-size:36px;
/* line-height: 42px; */
}
`
export const TextRoboto500Gris = styled(TextRoboto500)`
font-size: 20px;
color: #878282;
max-width:1000px; 
text-align:justify; 
margin:70px auto;
padding: 20px;
@media (min-width: 850px) {
font-size: 24px;
}
`

// tecto de seccion about
export const TextPoppins500Gris = styled.p`
color: #949090;
font-family: var(--font-poppins);
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
// span gris de seccion about
export const TextPoppins500GrisSpan = styled.span`
color: #949090;
font-family: var(--font-poppins);
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const TitleWithShadow = styled.h2`
font-family: var(--font-roboto);
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (min-width: 850px) {
    color: #BCBCEE;
    font-family:var(--font-poppins);
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-shadow: none;
}
`

export const TitleSpanNew = styled.span`
@media (min-width: 850px) {
    font-family: var(--font-poppins);
    color: #FFF;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    background: #BCBCEE;
    padding: 0 10px;
}
`
export const TextRoboto700 = styled.h3`
font-family: var(--font-roboto);
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 42px;
color: #FFFFFF;
    @media (min-width: 850px) {
    font-size:40px;
    }
    @media (min-width: 1000px) {
    font-size:50px;
    }

`

export const TextRoboto400 = styled.p`
font-family: var(--font-roboto);
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #FFFFFF;
@media (min-width: 850px) {
font-size:32px;
line-height: 40px;
}
`
export const TextRoboto700Lila = styled(TextRoboto700)`
color: #BCBCEE;
@media (min-width: 420px) {
font-size:48px;
}
`
export const TextRoboto700Negro = styled(TextRoboto700)`
font-size: 24px;
line-height: 28px;
color: #000000;
margin: 10px;
@media (min-width: 850px) {
font-size:48px;
}
`
export const CardDetailsText = styled.p`
font-family: var(--font-roboto);
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 194.52%;
/* display: flex; */
/* align-items: center; */
color: #878282;
margin: 10px 30px;
flex-direction:column;
@media (min-width: 850px) {
font-size:28px;
display:inherit;
margin: 0 auto;
padding:10px;
}
`

export const TextInter700 = styled.h2<{ displayCustom?: string }> `
font-family: var(--font-inter);
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 44px;
color: #FFFFFF;
@media (min-width: 500px) {
    display: ${(props) => props.displayCustom || "initial"};
}
`

export const TextPoppins600 = styled.p<{ fontStyleCustom?: string, weightCustom?: string }> `
font-family: var(--font-poppins);
font-style: ${(props) => props.fontStyleCustom || "normal"};
font-weight: ${(props) => props.weightCustom || "600"};
font-size: 60px;
line-height: 24px;
color: #878282;
width: fit-content
`


export const TextInter600Lila = styled.p`
/* font-family: 'Inter'; */
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 17px;
display: flex;
align-items: center;
color: #9890E3;
@media (min-width: 500px) {
    font-size:16px;
}
`

export const ContactTitle = styled.h1`
font-family: var(--font-roboto);
font-style: italic;
font-weight: 600;
font-size: 64px;
line-height: 75px;
text-align: center;
color: #878282;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const BrandCardTitle = styled.h2 `
font-family: var(--font-roboto);
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 56px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 60px 0;
@media(min-width: 850px) {
font-size:48px;
}
`
export const BrandCardContent = styled.p`
font-family: var(--font-roboto);
font-style: normal;
font-weight: 500;
font-size: 19px;
line-height: 149.19%;
display: flex;
align-items: center;
text-align: justify;
color: #FFFFFF;
@media(min-width: 850px) {
font-size:30px;
}
`
export const BrandCardList = styled.li `
font-family: var(--font-roboto);
font-style: normal;
font-weight: 500;
font-size: 19px;
line-height: 149.19%;
display: flex;
align-items: center;
color: #FFFFFF;
@media(min-width: 850px) {
font-size:30px;
}
`