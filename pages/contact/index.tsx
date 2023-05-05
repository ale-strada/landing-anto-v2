import { ContactTitle, TextRoboto500Gris } from "@/ui/text";
import Head from "next/head";
import React from "react";
import Image from 'next/image'
import picture from "../../public/contacto-img.png"
import dynamic from "next/dynamic";

const DynamicLayout = dynamic(() =>
  import('@/components/layout').then((mod) => mod.Layout),{ssr:false}
);

const DynamicContactForm = dynamic(() =>
  import('@/components/contact-form').then((mod) => mod.ContactForm),{ssr:false}
);

export default function  ContactPage(){
    return <>
    <Head>
        <title>Contacto</title>
    </Head>
    <DynamicLayout>
        <ContactTitle style={{
            marginTop: "195px"
        }}
        >Hablemos de tu proyecto</ContactTitle>
        <React.Fragment>
            <TextRoboto500Gris>Para poder cotizar y agendar tu proyecto, debes rellenar este formulario con el mayor detalle posible. Si cuento con disponibilidad y tu proyecto es un buen match, me estaré poniendo en contacto contigo dentro de las 72h hábiles de haber enviado el formulario.</TextRoboto500Gris>
        </React.Fragment>   
        <DynamicContactForm/>
        <Image className="form-img" src={picture} alt="" /> 
    </DynamicLayout>
    </>
};