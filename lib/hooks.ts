import { atom } from "recoil";

export async function sendApi(mensaje: any) {
  return fetch("http://localhost:3000/api/send", {
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
