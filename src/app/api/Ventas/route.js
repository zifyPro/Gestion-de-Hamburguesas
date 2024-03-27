import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const ventas = await prisma.ventas.findMany({
    include: {
      productos: true,
    },
  });
  return NextResponse.json(ventas);
}

export async function POST(request) {
  const { nombre, telefono, direccion, numeroDeOrden, titleProductos } =
    await request.json();
  const estaDeProducto = "En proceso de fabricación";
  const newVenta = await prisma.ventas.create({
    data: {
      nombre,
      telefono,
      direccion,
      numeroDeOrden,
      estaDeProducto,
      productos: {
        connect: {
          title: titleProductos,
        },
      },
    },
  });
  return NextResponse.json(newVenta);
}

export async function PUT(request) {
  const data = await request.json();
  const updateVentas = await prisma.ventas.update({
    where: { id: data.id },
    data,
  });
  return NextResponse.json(updateVentas);
}
