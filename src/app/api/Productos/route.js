import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tienda = await prisma.tienda.findUnique({ where: { id: 1 } });
  let response;
  if (tienda.active) {
    const mercado = await prisma.productos.findMany();
    response = mercado;
  } else {
    response = "la tienda esta cerrada";
  }

  return NextResponse.json(response);
}

export async function POST(request) {
  const data = await request.json();
  const newProduct = await prisma.productos.create({ data });
  return NextResponse.json(newProduct);
}

export async function PUT(request) {
  const data = await request.json();
  const updateProduct = await prisma.productos.update({
    where: { id: data.id },
    data,
  });
  return NextResponse.json(updateProduct);
}

export async function DELETE(request) {
  const data = await request.json();
  const deletedProduct = await prisma.productos.delete({
    where: { id: data.id },
  });

  return NextResponse.json(deletedProduct);
}
