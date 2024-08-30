import { CotizacionModel } from "../models/cotizacion.js";
import { TIPOS } from "../utils/tipos.js";

export class CotizacionController {
  static async getAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const cotizaciones = await CotizacionModel.all();
    return res.json(cotizaciones);
  }

  static async getCotizacion(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const endPoint = TIPOS.find(
      (item) => req.params.tipo == item.tipo
    )?.endPoint;

    if (!endPoint) {
      return res
        .status(404)
        .json({ error: "Tipo de cotización no encontrado" });
    }

    const cotizacion = await CotizacionModel.find({
      endPoint,
    });
    return res.json(cotizacion);
  }
}
