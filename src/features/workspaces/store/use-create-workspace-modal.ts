import { atom, useAtom } from "jotai";

const modalAtom = atom(false);

export function useCreateWorkspaceModal() {
  return useAtom(modalAtom);
}
