import { JSDOM } from "jsdom";
import { TIPOS, NOMBRE_DE_ENDPOINTS } from "../utils/tipos.js";

export class CotizacionModel {
  static async getCotizacion({ url }) {
    try {
      const response = await fetch(url);

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const html = await response.text();
      const doc = new JSDOM(html).window.document;

      const [compraValue, ventaValue] = doc.querySelectorAll(
        ".cotizacion_value .is-8 .value"
      );

      const compra = compraValue?.textContent.trim();
      const venta = ventaValue?.textContent.trim();

      return {
        compra,
        venta,
      };
    } catch (error) {
      console.error("Error al obtener la cotización:", error);
      return { compra: null, venta: null };
    }
  }

  static async find({ endPoint }) {
    const url = `https://www.dolarhoy.com/${endPoint}`;
    const { compra, venta } = await this.getCotizacion({ url });

    const tipo = TIPOS.find((item) => item.endPoint == endPoint).nombre;

    return {
      tipo,
      compra,
      venta,
    };
  }

  static async all() {
    const cotizaciones = [
      { endPoint: NOMBRE_DE_ENDPOINTS.BLUE },
      { endPoint: NOMBRE_DE_ENDPOINTS.OFICIAL },
      { endPoint: NOMBRE_DE_ENDPOINTS.BOLSA },
      { endPoint: NOMBRE_DE_ENDPOINTS.CONT_LIQUI },
      { endPoint: NOMBRE_DE_ENDPOINTS.OFICIAL },
    ];

    return Promise.all(
      cotizaciones.map(async ({ endPoint }) => {
        return await this.find({ endPoint });
      })
    );
  }
}
