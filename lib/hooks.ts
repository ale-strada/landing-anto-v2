export async function sendApi(mensaje: any) {
  return fetch("http://localhost:3000/api/send", {
    method: "POST",
    body: JSON.stringify(mensaje),
  });
}
