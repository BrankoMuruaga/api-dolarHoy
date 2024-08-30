import { Router } from "express";
import { CotizacionController } from "../controllers/cotizaciones.js";

export const cotizacionRouter = Router();

cotizacionRouter.get("/", CotizacionController.getAll);
cotizacionRouter.get("/:tipo", CotizacionController.getCotizacion);
