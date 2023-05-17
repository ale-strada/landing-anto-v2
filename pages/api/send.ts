import { NextApiRequest, NextApiResponse } from "next";
import { handlerCORS } from "@/lib/middlewares";
import methods from "micro-method-router";
import { sendEmail } from "@/lib/sendgrid";

async function handlerMessage(req: NextApiRequest, res: NextApiResponse) {
  try {
    const bodyParseado = JSON.parse(req.body);
    const { mensaje, file, fileName } = bodyParseado;

    const email = await sendEmail(JSON.stringify(mensaje), file, fileName);
    console.log("mensaje enviado endpoint");
    res.send(email);
  } catch (error) {
    res.status(400).send(error);
  }
}

const handler = methods({
  post: handlerMessage,
});

export default handlerCORS(handler);
