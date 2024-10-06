import { query } from "./strapi";

export function getDeportesInfo() {
  return query("deportes?populate=image")
    .then((res) => {
      console.log("Respuesta de la API:", res);
      return res.data;
    })
    .catch((error) => {
      console.error("Error al obtener la información de deportes:", error);
    });
}
