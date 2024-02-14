import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const mercaderia = await prisma.productos.findMany();
  return NextResponse.json(mercaderia);
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
