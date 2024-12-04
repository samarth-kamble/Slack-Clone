"use client";
import React from "react";

import Toolbar from "./_components/Toolbar";
import Sidebar from "./_components/Sidebar";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import WorkspaceSidebar from "@/app/workspace/[workspaceId]/_components/WorkspaceSidebar";

interface WorkspaceLyoutProps {
  children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: WorkspaceLyoutProps) => {
  return (
      <div className="h-full">
          <Toolbar/>
          <div className="flex h-[calc(100vh-40px)]">
              <Sidebar/>
              <ResizablePanelGroup direction={"horizontal"} autoSaveId={"ca-workspace-layout"}>
                    <ResizablePanel defaultSize={20} minSize={11} className={"bg-[#5E2C5F]"}>
                        <div>
                            <WorkspaceSidebar />
                        </div>
                    </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel minSize={20} >
                      {children}
                  </ResizablePanel>
              </ResizablePanelGroup>
          </div>
      </div>
  );
};

export default WorkspaceLayout;
