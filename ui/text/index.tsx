import styled from "styled-components";

export const TextRoboto500 = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
text-align: justify;
color: #FFFFFF;
@media (min-width: 420px) {
//font-size:32px;
}
@media (min-width: 850px) {
text-align:center;
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
export const TitleWithShadow = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (min-width: 850px) {
    font-size:50px;
    margin: 20px 0;
}
`

export const TitleWithShadowBold = styled(TitleWithShadow)`
font-weight: 700;
`

export const TextRoboto700 = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 42px;
color: #FFFFFF;
    @media (min-width: 850px) {
    font-size:40px;
    }
`

export const TextRoboto400 = styled.p`
font-family: 'Roboto';
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
font-family: 'Roboto';
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
}
`

export const TextInter700 = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 44px;
color: #FFFFFF;

`

export const TextInter600Lila = styled.p`
/* font-family: 'Inter'; */
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 17px;
display: flex;
align-items: center;
color: #9890E3;
`

export const ContactTitle = styled.h1`
font-family: 'Roboto';
font-style: italic;
font-weight: 600;
font-size: 64px;
line-height: 75px;
text-align: center;
color: #878282;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const BrandCardTitle = styled.h2 `
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 56px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
margin: 60px 0;
`
export const BrandCardContent = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 149.19%;
display: flex;
align-items: center;
text-align: justify;
color: #FFFFFF;
`
export const BrandCardList = styled.li `
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 149.19%;
display: flex;
align-items: center;
color: #FFFFFF;
`