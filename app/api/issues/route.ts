import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string({ message: "Description is title" }).min(3).max(255),
  description: z.string({ message: "Description is required" }).min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: validation.error.format() },
        { status: 400 }
      );
    }

    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
        status: "OPEN", // or any default status value
      },
    });

    return NextResponse.json(
      {
        message: "Issue created successfully",
        newIssue,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating issue", error },
      { status: 500 }
    );
  }
}
