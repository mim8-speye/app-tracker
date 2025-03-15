import { z } from "zod";

const issueSchema = z.object({
  title: z.string({ message: "Description is title" }).min(3).max(255),
  description: z.string({ message: "Description is required" }).min(10),
});

export default issueSchema;
