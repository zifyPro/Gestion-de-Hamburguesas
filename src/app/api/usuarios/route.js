import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const newUsers = await prisma.user.findMany({
    include: {
      ventas: {
        include: {
          productos: true,
        },
      },
    },
  });
  return NextResponse.json(newUsers);
}
