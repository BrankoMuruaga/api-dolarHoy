export const NOMBRE_DE_ENDPOINTS = {
  BLUE: "cotizaciondolarblue",
  OFICIAL: "cotizaciondolaroficial",
  BOLSA: "cotizaciondolarbolsa",
  CONT_LIQUI: "cotizaciondolarcontadoconliqui",
  TARJETA: "cotizacion-dolar-tarjeta",
};

export const TIPOS = [
  { tipo: "blue", endPoint: NOMBRE_DE_ENDPOINTS.BLUE, nombre: "Dólar Blue" },
  {
    tipo: "bolsa",
    endPoint: NOMBRE_DE_ENDPOINTS.BOLSA,
    nombre: "Dólar Bolsa",
  },
  {
    tipo: "contadoConLiqui",
    endPoint: NOMBRE_DE_ENDPOINTS.CONT_LIQUI,
    nombre: "Dólar Contado con Liqui",
  },
  {
    tipo: "oficial",
    endPoint: NOMBRE_DE_ENDPOINTS.OFICIAL,
    nombre: "Dólar Oficial",
  },
  {
    tipo: "tarjeta",
    endPoint: NOMBRE_DE_ENDPOINTS.TARJETA,
    nombre: "Dólar Tarjeta",
  },
];
