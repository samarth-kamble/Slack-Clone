"use client";
import React, { useEffect, useMemo } from "react";
import { useAuthActions } from "@convex-dev/auth/react";

import UserButton from "./features/auth/_components/UserButton";
import { useGetWorkspaces } from "./features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "./features/workspaces/store/use-create-workspace-modal";

const Home = () => {
  const [open, setOpen] = useCreateWorkspaceModal();
  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (workspaceId) {
      console.log("Redirect To workspace");
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceId, isLoading, open, setOpen]);

  return (
    <div>
      Logged In !
      <UserButton />
    </div>
  );
};

export default Home;
