import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendEmail(mensaje: any, file?: any, fileName?: string) {
  if (file && fileName) {
    const msg = {
      to: "hello.antonelladesign@gmail.com", // Change to your recipient (produccion)
      //to: "strada.ale92@gmail.com", // mail para pruebas en desarrollo
      from: "buscador.de.mascotas.app@gmail.com", // Change to your verified sender
      subject: "mensaje de la web",
      text: mensaje,
      attachments: [
        {
          content: file,
          filename: fileName,
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    };
    await sendEmailLib(msg);
    return { m: "ok" };
  } else {
    const msg = {
      to: "hello.antonelladesign@gmail.com", // Change to your recipient (produccion)
      //to: "strada.ale92@gmail.com", // mail para pruebas en desarrollo
      from: "buscador.de.mascotas.app@gmail.com", // Change to your verified sender
      subject: "mensaje de la web",
      text: mensaje,
    };

    await sendEmailLib(msg);
    return { m: "ok" };
  }
}

async function sendEmailLib(mensaje: any) {
  try {
    await sgMail.send(mensaje);
    console.log("Email sent");
  } catch (error) {
    console.log(error);
  }
}
