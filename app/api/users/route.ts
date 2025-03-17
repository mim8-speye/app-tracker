import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log(request.body);

  // Your logic here
  const users = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });
  if (!users) {
    return NextResponse.json({ message: "No users found" }, { status: 404 });
  }
  return NextResponse.json(users, { status: 200 });
}
