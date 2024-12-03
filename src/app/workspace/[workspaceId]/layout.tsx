"use client";
import React from "react";

import Toolbar from "./_components/Toolbar";
import Sidebar from "./_components/Sidebar";

interface WorkspaceLyoutProps {
  children: React.ReactNode;
}

const WorkspaceLyout = ({ children }: WorkspaceLyoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceLyout;
