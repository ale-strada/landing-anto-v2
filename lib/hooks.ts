import { atom } from "recoil";

const url = process.env.BASE_URL;

export async function sendApi(mensaje: any) {
  return fetch("/api/send", {
    method: "POST",
    body: JSON.stringify(mensaje),
  });
}

export const tamañoState = atom({
  key: "tamañoState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const serviciosState = atom({
  key: "serviciosState", // unique ID (with respect to other atoms/selectors)
  default: [""], // default value (aka initial value)
});
