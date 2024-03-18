import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  try {
    // Convertir el id a un número
    const numeros = parseInt(params.ProductosId);
    const result = await prisma.productos.findMany({
      where: {
        id: numeros,
      },
    });
    return NextResponse.json(result);
  } catch (error) {
    // Si ocurre algún error, devolver un mensaje de error
    return NextResponse.json({
      error: "Ocurrió un error al buscar el producto",
    });
  }
}
