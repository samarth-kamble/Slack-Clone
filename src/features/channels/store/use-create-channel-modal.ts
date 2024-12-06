import { atom, useAtom } from "jotai";

const modelState = atom(false);

export const useCreateChannelModal = () => {
  return useAtom(modelState);
};
