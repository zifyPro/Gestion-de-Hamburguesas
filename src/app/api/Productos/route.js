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
