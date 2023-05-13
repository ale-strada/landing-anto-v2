import { NextApiRequest, NextApiResponse } from "next";
import { handlerCORS } from "@/lib/middlewares";
import methods from "micro-method-router";
import { sendEmail } from "@/lib/sendgrid";

async function handlerMessage(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.body, "email");
    const email = await sendEmail(req.body);
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
