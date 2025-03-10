import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string({ message: "Description is title" }).min(3).max(255),
  description: z.string({ message: "Description is required" }).min(10),
});
