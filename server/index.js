import express from "express";
import cors from "cors";

//SDK de MercadoPago
import { MercadoPagoConfig, Preference } from "mercadopago";
const client = new MercadoPagoConfig({
  accessToken: process.env.MI_ACEPT_TOKEN,
});

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("soy el server :)");
});

app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "http://youtube.com",
        failure: "http://youtube.com",
        pending: "http://youtube.com",
      },
      auto_return: "approved",
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "error al crear la preferencia :(",
    });
  }
});

app.listen(port, () => {
  console.log("El servidor esta corriendo en el puerto 3001");
});
