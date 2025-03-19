import { patchIssueSchema } from "@/app/schemas/issueSchema";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authOptions from "../../auth/authOptions";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const validation = patchIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      {
        message: "Validation failed",
        errors: validation.error.errors,
      },
      {
        status: 400,
      }
    );
  }
  const { assignedToUserId, title, description, status } = body;
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: {
        id: body.assignedToUserId,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          message: `User not found`,
        },
        {
          status: 400,
        }
      );
    }
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) {
    return NextResponse.json(
      {
        message: `Issue ${id} not found`,
      },
      {
        status: 404,
      }
    );
  }

  const updatedIssue = await prisma.issue.update({
    where: {
      id: issue.id,
    },
    data: {
      title,
      description,
      assignedToUserId,
      status,
    },
  });

  return NextResponse.json(
    {
      message: `Issue ${id} updated successfully`,
      updatedIssue,
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

  if (!session) return NextResponse.json({}, { status: 401 });
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) {
    return NextResponse.json(
      {
        message: `Issue ${id} not found`,
      },
      {
        status: 404,
      }
    );
  }

  await prisma.issue.delete({
    where: {
      id: issue.id,
    },
  });

  return NextResponse.json(
    {
      message: `Issue ${id} deleted successfully`,
    },
    {
      status: 200,
    }
  );
}
