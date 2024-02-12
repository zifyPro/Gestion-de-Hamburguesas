// import { MercadoPagoConfig, Preference } from "mercadopago";
// import { NextResponse } from "next/server";
// // Agrega credenciales
// const client = new MercadoPagoConfig({ accessToken: "MI_ACEPT_TOKEN" });

// export async function POST(request) {
//   try {
//     const body = {
//       items: [
//         {
//           title: request.json(title),
//           quantity: Number(request.quantity),
//           unit_price: Number(request.price),
//           currency_id: "ARS",
//         },
//       ],
//     };
//     console.log(
//       "lpmmmmm",
//       body.items.map((elem) => elem.title)
//     );
//     const preference = new Preference(client);
//     const result = await preference.create({ body });
//     return NextResponse.json({ id: result.id });
//   } catch {
//     return NextResponse.json({ error: error.message });
//   }
// }
import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";
// Agrega credenciales

export function POST(request) {
  const client = new MercadoPagoConfig({
    accessToken: process.env.MI_ACEPT_TOKEN,
  });

  const preference = new Preference(client);

  preference.create({
    body: {
      items: [
        {
          title: request.body.title,
          quantity: Number(request.body.quantity),
          unit_price: Number(request.body.price),
        },
      ],
    },
  });
  console.log(request.body);
  return NextResponse.json(preference);
}
