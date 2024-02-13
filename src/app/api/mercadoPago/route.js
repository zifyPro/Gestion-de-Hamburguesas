import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

export function POST(request) {
  const client = new MercadoPagoConfig({
    accessToken: process.env.MI_ACEPT_TOKEN,
  });

  const preference = new Preference(client);

  try {
    preference.create({
      body: {
        items: [
          {
            title: request.json(),
            quantity: Number(request.quantity),
            unit_price: Number(request.price),
          },
        ],
      },
    });
    console.log(request.json());
    // console.log(request.title);
    return NextResponse.json(preference);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
