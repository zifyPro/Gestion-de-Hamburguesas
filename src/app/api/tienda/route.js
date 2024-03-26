import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const estados = await prisma.tienda.findMany();
  return NextResponse.json(estados);
}

export async function POST(request) {
  const data = await request.json();
  const newtienda = await prisma.tienda.create({ data });
  return NextResponse.json(newtienda);
}

export async function DELETE(request) {
  const data = await request.json();
  const deletewtienda = await prisma.tienda.delete({
    where: { id: data.id },
  });
  return NextResponse.json(deletewtienda);
}

export async function PUT(request) {
  const data = await request.json();
  console.log(data);
  const updateProduct = await prisma.tienda.update({
    where: { id: data.id },
    data,
  });
  return NextResponse.json(updateProduct);
}
