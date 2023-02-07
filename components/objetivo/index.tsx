import { Check } from "@/ui/img";
import { TextInter700, TextRoboto500 } from "@/ui/text";
import { DetailsConteiner, ObjetivoConteiner, ObjetivosDetailsConteiner } from "./styled";


export function Objetivo(){
    return <ObjetivoConteiner>
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
        </ObjetivoConteiner>
}