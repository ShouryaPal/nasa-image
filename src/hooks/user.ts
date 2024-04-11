import { create } from "zustand";

type userStore = {
  user: string;
  setUser: (value: string) => void;
  resetUser: (value: string) => void;
};

export const useUser = create<userStore>((set) => ({
  user: "logout",
  setUser: (value) => set({ user: value }),
  resetUser: (value) => set({ user: value }),
}));
