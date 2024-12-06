"use client";
import React, { useEffect, useState } from "react";

import CreateChannelModal from "@/features/channels/_components/CreateChannelModal";
import CreateWorkspaceModal from "@/features/workspaces/_components/CreateWorkspaceModal";

const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <CreateChannelModal />
      <CreateWorkspaceModal />
    </>
  );
};

export default Modals;
