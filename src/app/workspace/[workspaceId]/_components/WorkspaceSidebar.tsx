import React from 'react'
import {AlertTriangle, Loader} from "lucide-react";

import {useWorkspaceId} from "@/hooks/use-workspace-id";
import {useCurrentMember} from "@/features/members/api/use-current-member";
import {useGetWorkspace} from "@/features/workspaces/api/use-getworkspace";
import WorkspaceHeader from "@/app/workspace/[workspaceId]/_components/WorkspaceHeader";

const WorkspaceSidebar = () => {
    const workspaceId = useWorkspaceId();
    const {data: member , isLoading:memberLoading} = useCurrentMember({workspaceId});
    const {data: workspace, isLoading: workspaceLoading} = useGetWorkspace({id: workspaceId});

    if(workspaceLoading ||memberLoading){
        return (
            <div className={"flex gap-y-2 flex-col bg-[#5E2C5F] h-full items-center justify-center"}>
                <Loader className={"size-5 animate-spin text-white"} />
            </div>
        )
    }
    if(!workspace ||!member){
        return (
            <div className={"flex flex-col bg-[#5E2C5F] h-full items-center justify-center"}>
                <AlertTriangle className={"size-5  text-white"} />
                <p className={"text-white text-sm"}>Workspace Not Found</p>
            </div>
        )
    }

    return (
        <div className={"flex gap-y-2 flex-col bg-[#5E2C5F] h-full "}>
            <WorkspaceHeader workspace={workspace} isAdmin={member.role === 'admin'} />
        </div>
    )
}
export default WorkspaceSidebar
