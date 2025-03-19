import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";
import { cache } from "react";
import ChangeStatus from "./ChangeStatus";

interface Props {
  params: Promise<{ id: string }>;
}

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  })
);

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);
  const { id } = await params;
  const issueId = parseInt(id);

  if (isNaN(issueId)) {
    notFound();
  }

  const issue = await fetchUser(parseInt(id));

  if (!issue) {
    notFound();
  }

  return (
    <Grid
      columns={{
        initial: "1",
        sm: "5",
      }}
      gap={"6"}
    >
      <Box className="col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Flex
          direction={{
            initial: "row",
            sm: "column",
          }}
          justify={{
            initial: "center",
            sm: "start",
          }}
          gap={"2"}
        >
          <ChangeStatus issue={issue} />
          <AssigneeSelect issue={issue} />
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      )}
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const param = await params;
  const issue = await fetchUser(parseInt(param.id));
  return {
    title: issue?.title,
    description:
      "Effortlessly manage and track your app issues with our intuitive platform.",
  };
}

export default IssueDetailPage;

export const dynamic = "force-dynamic";
