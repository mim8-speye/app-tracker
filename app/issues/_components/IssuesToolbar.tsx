import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "../list/IssueStatusFilter";

const IssuesToolbar = () => {
  return (
    <Flex justify={"between"}>
      <IssueStatusFilter />
      <Link href={"/issues/new"}>
        <Button>New Issue</Button>
      </Link>
    </Flex>
  );
};

export default IssuesToolbar;
