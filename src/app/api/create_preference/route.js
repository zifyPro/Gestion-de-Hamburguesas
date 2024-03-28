import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_MI_ACEPT_TOKEN,
});

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    const body = {
      items: data.items.map((item) => ({
        title: item.title,
        quantity: parseInt(item.quantity),
        unit_price: Number(item.price),
        currency_id: "ARS",
      })),
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });
    return NextResponse.json({
      id: result.id,
    });
  } catch (error) {
    return NextResponse.json({
      error: "error al crear la preferencia :(",
    });
  }
}
