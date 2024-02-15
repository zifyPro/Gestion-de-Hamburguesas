import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  // const newUsers = await prisma.user.findMany();
  // console.log(newUsers);
  return NextResponse.json("holaaaaaa");
}
