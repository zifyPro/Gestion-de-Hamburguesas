import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const mercaderia = await prisma.ventas.findMany();
  return NextResponse.json(mercaderia);
}

export async function POST(request) {
  const data = await request.json();
  const newVenta = await prisma.ventas.create({ data });
  return NextResponse.json(newVenta);
}
