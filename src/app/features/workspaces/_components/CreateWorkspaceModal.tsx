"use client";
import React from "react";
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  const handleClose = () => {
    setOpen(false);
    //TODO :CLear form
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Workspace</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkspaceModal;
