"use client";
import CreateWorkspaceModal from "@/features/workspaces/_components/CreateWorkspaceModal";
import React, { useEffect, useState } from "react";

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
      <CreateWorkspaceModal />
    </>
  );
};

export default Modals;
