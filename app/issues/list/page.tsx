import Pagination from "@/app/components/Pagination";
import { prisma } from "@/prisma/client";
import { Status } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";
import IssuesToolbar from "../_components/IssuesToolbar";
import IssueTable, { columnNames, IssueQuery } from "./IssueTable";

interface Props {
  searchParams: Promise<IssueQuery>;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const param = await searchParams;
  const statuses = Object.values(Status);
  const validateStatus = statuses.includes(param.status)
    ? param.status
    : undefined;
  const orderBy = columnNames.includes(param.orderBy)
    ? { [param.orderBy]: "asc" }
    : undefined;

  const where = { status: validateStatus };

  const page = parseInt(param.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({
    where,
  });

  return (
    <Flex direction={"column"} gap={"3"}>
      <IssuesToolbar />
      <IssueTable param={param} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </Flex>
  );
};

export default IssuesPage;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "App Tracker - Issue List",
  description:
    "Effortlessly manage and track your app issues with our intuitive platform.",
};
