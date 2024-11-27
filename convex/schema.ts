import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";

const schema = defineSchema({
  ...authTables,
  workspaces: defineTable({
    name: v.string(),
    userId: v.string(),
    jionCode: v.string(),
  }),
});

export default schema;
