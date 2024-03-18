import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const newUsers = await prisma.user.findMany();
  return NextResponse.json(newUsers);
}
