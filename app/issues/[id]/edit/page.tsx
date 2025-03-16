import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import ClientIssueForm from "../../_components/ClientIssueForm";

interface EditPageProps {
  params: Promise<{ id: string }>;
}

const EditPage = async ({ params }: EditPageProps) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) {
    notFound();
  }

  return <ClientIssueForm issue={issue} />;
};

export default EditPage;
