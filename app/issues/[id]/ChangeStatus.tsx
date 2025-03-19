"use client";
import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const statusMap: Record<
  Status,
  { label: string; value: "open" | "inProgress" | "closed" }
> = {
  OPEN: { label: "Open", value: "open" },
  IN_PROGRESS: { label: "In Progress", value: "inProgress" },
  CLOSED: { label: "Closed", value: "closed" },
};

const ChangeStatus = ({ issue }: { issue: Issue }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const handleChange = (status: string) => {
    const reversedStatusMap = Object.fromEntries(
      Object.entries(statusMap).map(([key, value]) => [value.value, key])
    );
    setIsLoading(true);
    axios
      .patch(`/api/issues/${issue.id}`, {
        status: reversedStatusMap[status],
      })
      .then(() => {
        toast.success("Status updated successfully");
        router.refresh();
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Couldn't save changes");
        setIsLoading(false);
        router.refresh();
      });
  };

  return (
    <>
      <Select.Root
        defaultValue={statusMap[issue.status].value}
        onValueChange={handleChange}
        disabled={isLoading}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Label>Set Status</Select.Label>
            {Object.values(statusMap).map((status) => (
              <Select.Item key={status.value} value={status.value}>
                {status.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default ChangeStatus;
