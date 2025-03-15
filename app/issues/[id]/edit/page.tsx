import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import IssueForm from "../../_components/IssueForm";

interface EditPageProps {
  params: { id: string };
}

const EditPage = async (props: EditPageProps) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!issue) {
    notFound();
  }

  return <IssueForm issue={issue} />;
};

export default EditPage;
