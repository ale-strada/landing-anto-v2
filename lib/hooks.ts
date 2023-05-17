import { atom } from "recoil";

const url = process.env.BASE_URL;

export async function sendApi(mensaje: any, file?: any, fileName?: string) {
  return fetch("/api/send", {
    method: "POST",
    body: JSON.stringify({ mensaje, file, fileName }),
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

export const fileNameState = atom({
  key: "fileNameState",
  default: "",
});

export const fileBase64State = atom({
  key: "fileBase64State",
  default: "",
});
