import { serviciosState, tamañoState } from "@/lib/hooks"
import { TextInter600Lila } from "@/ui/text"
import { useState } from "react"
import { useRecoilState } from "recoil"

export function CheckboxList(props: any){
    const [list, setList] = useState(props.checkbox) 
    const [value, setValue] = useRecoilState(tamañoState)
    const [valueList, setValueList] = useRecoilState(serviciosState)
    
    function handleChange(event:any){
        const itemIndex = list.findIndex((el:any) => el === event.target.id);
        const label = document.getElementById(props.label)
        list.map((item:any)=>{
            const index = list.indexOf(item)
            
            if(index != itemIndex){
                const element: any = label?.children.item(index+1)?.children[0]
                element.checked = false
            }
        })
    }

    function handleChangeInput(e:any){
        const currentValue:string = e.target.value
        
        if(e.target.checked === true){
            if(props.onChange){
                setValue(currentValue)
            }else{
                setValueList([...valueList,currentValue]) 
            }
        }else{
            if(props.onChange){
                setValue("")
            }else{
                const newValue = valueList.filter(val => val != currentValue );
                setValueList(newValue) 
            }
        }
        
        
    }

    return <>
        <label id={props.label} onChange={props.onChange?handleChange:()=>{}} className='label-form'><TextInter600Lila style={{marginBottom: "5px"}}>{props.label}</TextInter600Lila>
            {list.map((c:any)=>{
                return <label  className='checkbox-wrap'key ={c}>
                            <input id={c} onClick={handleChangeInput} name={c}  className='checkbox-input' type="checkbox" value={c}/><TextInter600Lila style={{margin:"0px 5px"}}>{c}</TextInter600Lila>
                        </label>
            })}
        </label>
    </>
}
