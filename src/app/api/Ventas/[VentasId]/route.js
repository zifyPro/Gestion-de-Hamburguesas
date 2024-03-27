import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  try {
    // Convertir el id a un número
    const numeros = parseInt(params.VentasId);
    console.log(numeros);
    const result = await prisma.ventas.findMany({
      where: {
        id: numeros,
      },
      include: {
        productos: true,
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    // Si ocurre algún error, devolver un mensaje de error
    return NextResponse.json({
      error: "Ocurrió un error al buscar la venta",
    });
  }
}
