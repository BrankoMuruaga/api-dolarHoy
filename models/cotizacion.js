import { JSDOM } from "jsdom";
import { TIPOS } from "../utils/tipos.js";

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

  static async find({ tipo }) {
    const url = `https://www.dolarhoy.com/${tipo}`;
    const { compra, venta } = await this.getCotizacion({ url });

    tipo = tipo.replaceAll("-", "").replace("cotizaciondolar", "");

    return {
      tipo,
      compra,
      venta,
    };
  }

  static async all() {
    const cotizaciones = [
      { tipo: TIPOS.BLUE },
      { tipo: TIPOS.OFICIAL },
      { tipo: TIPOS.BOLSA },
      { tipo: TIPOS.CONT_LIQUI },
      { tipo: TIPOS.OFICIAL },
    ];

    return Promise.all(
      cotizaciones.map(async ({ tipo }) => {
        return await this.find({ tipo });
      })
    );
  }
}
