import { prisma } from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const inProgress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: "CLOSED",
    },
  });

  return (
    <Grid
      gap={"5"}
      columns={{
        initial: "1",
        sm: "2",
      }}
    >
      <LatestIssues />
      <Flex gap={"5"} direction={"column"}>
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </Flex>
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "App Tracker - Dashboard",
  description:
    "Effortlessly manage and track your app issues with our intuitive platform.",
};

export const dynamic = "force-dynamic";
