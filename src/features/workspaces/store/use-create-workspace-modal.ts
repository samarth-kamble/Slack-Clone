import { atom, useAtom } from "jotai";

const modelState = atom(false);

export function useCreateWorkspaceModal() {
  return useAtom(modelState);
}
