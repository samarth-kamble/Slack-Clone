"use client";

import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useGetWorkspace } from "@/features/workspaces/api/use-getworkspace";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  const { data } = useGetWorkspace({ id: workspaceId });
  return <div>ID:{JSON.stringify(data)}</div>;
};

export default WorkspaceIdPage;
