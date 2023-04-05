import { Footer } from "./footer";
import { Header } from "./header";

export function Layout (props:any){
    return <>
    <Header/>
    {props.children}
    <Footer/>
    </>
}