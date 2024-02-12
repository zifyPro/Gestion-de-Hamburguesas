import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: "MI_ACEPT_TOKEN" });

export async function POST(request) {
  try {
    const body = {
      items: [
        {
          title: request.json(title),
          quantity: Number(request.quantity),
          unit_price: Number(request.price),
          currency_id: "ARS",
        },
      ],
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });
    return NextResponse.json({ id: result.id });
  } catch {
    console.log(error);
  }
}
