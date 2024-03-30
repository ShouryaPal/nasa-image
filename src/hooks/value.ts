import { create } from "zustand";

type valueStore = {
  value: string;
  setValue: (value: string) => void;
};

export const useValue = create<valueStore>((set) => ({
  value: "login",
  setValue: (value) => set({ value }),
}));
