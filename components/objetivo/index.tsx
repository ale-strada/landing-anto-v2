import { AlejandroMessage, AlejandroMessageTwo, BeltranMessage, CarcajadaMessage, Check, VirMessage } from "@/public/img";
import { TextInter700, TextRoboto500 } from "@/ui/text";
import { DescriptionContainer, DetailsConteiner, ObjetivoConteiner, ObjetivosDetailsConteiner, Testimonios } from "./styled";



export function Objetivo(){
    return <div>
    
    <ObjetivoConteiner>
        <Testimonios>
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
        </Testimonios>
        <DescriptionContainer>
            <TextInter700 style={{ margin:"0 60px", paddingTop:"80px"}}>Mi objetivo con cada cliente:</TextInter700>
                <ObjetivosDetailsConteiner>
                    <DetailsConteiner>
                        <div style={{marginRight: "15px"}}>
                            <Check/>
                        </div>
                        <TextRoboto500 style={{textAlign: "left"}}>Acompañar en sus proyectos y potenciar su imágen de negocio.</TextRoboto500>
                    </DetailsConteiner>
                    <DetailsConteiner>
                        <div style={{marginRight: "15px"}}>
                            <Check/>
                        </div>
                        <TextRoboto500 style={{textAlign: "left"}}>Llevar una idea conceptual a visual.</TextRoboto500>
                    </DetailsConteiner>
                    <DetailsConteiner>
                        <div style={{marginRight: "15px"}}>
                            <Check/>
                        </div>
                        <TextRoboto500 style={{textAlign: "left"}}>Brindar planes flexibles y a la medida de lo que sus marcas necesitan.</TextRoboto500>
                    </DetailsConteiner>
                </ObjetivosDetailsConteiner>
        </DescriptionContainer>
        </ObjetivoConteiner>        
    </div>

}