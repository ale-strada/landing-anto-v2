import { AlejandroMessage, AlejandroMessageTwo, BeltranMessage, CarcajadaMessage, Check, VirMessage, ImgObjetivo } from "@/public/img";
import { TextInter700, TextPoppins500, TextPoppins600, TextRoboto500 } from "@/ui/text";
import { DescriptionContainer, DetailsConteiner, ObjetivoConteiner, ObjetivosDetailsConteiner, Testimonios, TituloConImagen } from "./styled";



export function Objetivo(){
    return <div>
    
    <ObjetivoConteiner>
        {/* se eliminan los testimonios */}
        {/* <Testimonios>
            <div style={{position:"relative", top:"-20px"}}>
                <AlejandroMessage/>
            </div>
            <div style={{margin: "20px 0 0 0"}}>
                <CarcajadaMessage/>
            </div>
            <div style={{margin:" 80px 0 0 0"}}>
                <AlejandroMessageTwo/>
            </div>
            <div style={{    
                position: "relative",
                bottom: "150px",
                left: "400px"}}>
                <BeltranMessage/>
            </div>
            <div>
                <VirMessage/>
            </div>
        </Testimonios> */}
        <DescriptionContainer>
            <TextInter700 style={{ margin:"0 60px", paddingTop:"80px"}} displayCustom="none">Mi objetivo con cada cliente:</TextInter700>
                <ObjetivosDetailsConteiner>
                    <DetailsConteiner>
                        <div style={{marginRight: "15px"}}>
                            <Check />
                        </div>
                        <TextRoboto500 fontSizeCustom="29px" colorCustom="#878282" style={{textAlign: "left"}}>Acompañarte en cada proyecto, potenciando la imagen de tu negocio.</TextRoboto500>
                    </DetailsConteiner>
                    <DetailsConteiner>
                        <div style={{marginRight: "15px"}}>
                            <Check/>
                        </div>
                        <TextRoboto500 fontSizeCustom="29px" colorCustom="#878282" style={{textAlign: "left"}}>Llevar esa idea conceptual a visual.</TextRoboto500>
                    </DetailsConteiner>
                    <DetailsConteiner>
                        <div style={{marginRight: "15px"}}>
                            <Check/>
                        </div>
                        <TextRoboto500 fontSizeCustom="29px" colorCustom="#878282" style={{textAlign: "left"}}>Brindarte un plan a la medida de lo que tu marca necesita.</TextRoboto500>
                    </DetailsConteiner>
                </ObjetivosDetailsConteiner>
        </DescriptionContainer>
        <TituloConImagen>
            <div style={{display: "flex", alignItems:"center", justifyContent: "flex-end"}}>
                <div>
                <TextPoppins600 style={{marginLeft: "40px"}} >Mi objetivo</TextPoppins600>
                <TextPoppins600 style={{marginLeft: "40px", paddingTop:"60px", display: "flex" }} >es
                    <span style={{marginLeft: "10px"}}>
                        <TextPoppins600 weightCustom="300" fontStyleCustom="italic">potenciar</TextPoppins600>
                    </span>
                </TextPoppins600>
                <TextPoppins600 style={{marginLeft: "40px", paddingTop:"60px"}} >tu marca.</TextPoppins600>
                </div>
                <ImgObjetivo/>
            </div>
        </TituloConImagen>
        </ObjetivoConteiner>        
    </div>

}