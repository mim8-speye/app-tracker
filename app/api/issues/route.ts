import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import issueSchema from "../../schemas/issueSchema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = issueSchema.safeParse(body);

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
