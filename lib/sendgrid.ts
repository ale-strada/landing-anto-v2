import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendEmail(mensaje: any) {
  const msg = {
    to: "jaime.antonella29@gmail.com", // Change to your recipient
    from: "buscador.de.mascotas.app@gmail.com", // Change to your verified sender
    subject: "mensaje de la web",
    text: mensaje,
  };
  //prueba
  await sendEmailLib(msg);
}

async function sendEmailLib(mensaje: any) {
  sgMail
    .send(mensaje)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
