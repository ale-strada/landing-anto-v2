import sgMail from "@sendgrid/mail";
import fs from "fs";
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendEmail(mensaje: any) {
  // const file = fs.readFileSync("../public/contacto-img.png");
  // const base64File = file.toString("base64");
  // console.log(base64File);

  const msg = {
    to: "jaime.antonella29@gmail.com", // Change to your recipient
    from: "buscador.de.mascotas.app@gmail.com", // Change to your verified sender
    subject: "mensaje de la web",
    text: mensaje,
    // attachments: [
    //   {
    //     content: base64File,
    //     filename: "CV Alejandro Strada2023.pdf",
    //     type: "application/pdf",
    //     disposition: "attachment",
    //   },
    // ],
  };
  //prueba
  await sendEmailLib(msg);
  return { m: "ok" };
}

async function sendEmailLib(mensaje: any) {
  try {
    await sgMail.send(mensaje);
    console.log("Email sent");
  } catch (error) {
    console.log(error);
  }
}
