import express from "express";
import { cotizacionRouter } from "../routes/cotizaciones.js";

const app = express();

app.use("/", cotizacionRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running in port ${port}`);
});
