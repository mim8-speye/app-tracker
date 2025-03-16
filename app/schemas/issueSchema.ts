import { z } from "zod";

const issueSchema = z.object({
  title: z.string({ message: "Description is title" }).min(3).max(255),
  description: z
    .string({ message: "Description is required" })
    .min(10)
    .max(65535),
});

export const patchIssueSchema = z.object({
  title: z
    .string({ message: "Description is title" })
    .min(3)
    .max(255)
    .optional(),
  description: z
    .string({ message: "Description is required" })
    .min(10)
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, { message: "Assigned to is required" })
    .max(255)
    .optional()
    .nullable(),
});

export default issueSchema;
