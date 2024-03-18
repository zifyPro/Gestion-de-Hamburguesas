import express, { request } from "express";
import cors from "cors";

//SDK de MercadoPago
import { MercadoPagoConfig, Preference } from "mercadopago";
const client = new MercadoPagoConfig({
  accessToken: `TEST-4626481007888795-021216-556c3f583911cdf3d4e0d751386d040d-744460388`,
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
      items: req.body.items.map((item) => ({
        title: item.title,
        quantity: parseInt(item.quantity), // Asegúrate de que 'quantity' sea un número entero
        unit_price: Number(item.price),
        currency_id: "ARS",
      })),
    };
    console.log("nnnnnnnnn", req.body);
    const preference = new Preference(client);
    const result = await preference.create({ body });
    console.log(result);
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

// const data = req.body.carrito.map((element) => {
//   return {
//     title: element?.title,
//     quantity: element?.quantity,
//     unit_price: element.price,
//   };
// });
