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
    const data = req.body.carrito.map((element) => {
      return {
        title: element?.title,
        quantity: element?.quantity,
        unit_price: element.price,
      };
    });
    // items: [
    //   {
    //     title: req.body.title,
    //     quantity: req.body.quantity,
    //     unit_price: Number(req.body.price),
    //     currency_id: "ARS",
    //   },
    // ],
    // back_urls: {
    //   success: "http://youtube.com",
    //   failure: "http://youtube.com",
    //   pending: "http://youtube.com",
    // },
    // auto_return: "approved",
    // };
    console.log(data);
    console.log("nnnnnnnnn", req.body);
    const preference = new Preference(client);
    const result = await preference.create({ element: data });
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
