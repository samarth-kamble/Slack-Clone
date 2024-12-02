"use client";
import React from "react";
import Toolbar from "./_components/Toolbar";

interface WorkspaceLyoutProps {
  children: React.ReactNode;
}

const WorkspaceLyout = ({ children }: WorkspaceLyoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceLyout;
