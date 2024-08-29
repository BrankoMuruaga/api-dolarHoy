import { Router } from "express";
import { CotizacionController } from "../controllers/cotizaciones.js";

export const cotizacionRouter = Router();

cotizacionRouter.get("/", CotizacionController.getAll);
cotizacionRouter.get("/blue", CotizacionController.getBlue);
cotizacionRouter.get("/bolsa", CotizacionController.getBolsa);
cotizacionRouter.get("/contadoConLiqui", CotizacionController.getContLiqui);
cotizacionRouter.get("/oficial", CotizacionController.getOficial);
cotizacionRouter.get("/tarjeta", CotizacionController.getTarjeta);
