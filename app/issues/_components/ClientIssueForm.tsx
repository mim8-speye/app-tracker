"use client";

import React from "react";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./IssueFormSkeleton";
import { Issue } from "@prisma/client";

const IssueForm = dynamic(() => import("./IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const ClientIssueForm = ({ issue }: { issue?: Issue }) => {
  return <IssueForm issue={issue} />;
};

export default ClientIssueForm;
