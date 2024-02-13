import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

export async function POST(request) {
  const client = new MercadoPagoConfig({
    accessToken: process.env.MI_ACEPT_TOKEN,
  });

  try {
    const body = {
      items: [
        {
          title: request.body.title,
          quantity: parseInt(request.body.quantity),
          unit_price: Number(request.body.price),
        },
      ],
    };
    console.log(request.body.title);
    console.log(request.body.quantity);
    console.log(body);
    const preference = new Preference(client);
    const response = await preference.create({ body });
    const id = response.id;
    return NextResponse.json(id);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
