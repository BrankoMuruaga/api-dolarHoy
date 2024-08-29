import { CotizacionModel } from "../models/cotizacion.js";
import { TIPOS } from "../utils/tipos.js";

export class CotizacionController {
  static async getAll(req, res) {
    const cotizaciones = await CotizacionModel.all();
    return res.json(cotizaciones);
  }

  static async getBlue(req, res) {
    const cotizacion = await CotizacionModel.find({
      tipo: TIPOS.BLUE,
    });
    return res.json(cotizacion);
  }

  static async getOficial(req, res) {
    const cotizacion = await CotizacionModel.find({
      tipo: TIPOS.OFICIAL,
    });
    return res.json(cotizacion);
  }

  static async getBolsa(req, res) {
    const cotizacion = await CotizacionModel.find({
      tipo: TIPOS.BOLSA,
    });
    return res.json(cotizacion);
  }

  static async getContLiqui(req, res) {
    const cotizacion = await CotizacionModel.find({
      tipo: TIPOS.CONT_LIQUI,
    });
    return res.json(cotizacion);
  }

  static async getTarjeta(req, res) {
    const cotizacion = await CotizacionModel.find({
      tipo: TIPOS.TARJETA,
    });
    return res.json(cotizacion);
  }
}
