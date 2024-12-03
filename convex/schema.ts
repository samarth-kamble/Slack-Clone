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
  members: defineTable({
    userId: v.string(),
    workspaceId: v.id("workspaces"),
    role: v.union(v.literal("admin"), v.literal("member"))
  })
      .index("by_user_id",["userId"])
      .index("by_workspace_id",["workspaceId"])
      .index("by_workspace_id_user_id", ["workspaceId","userId"])
});

export default schema;
