"use client";
import { create } from "zustand";
import axios from "axios";

interface UserState {
  user: boolean;
  fetchUser: () => void;
  setUser: () => void;
}

const useStore = create<UserState>((set) => ({
  user: false,
  fetchUser: async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/auth/refetch`,
        {
          withCredentials: true,
        }
      );
      set({ user: true });
    } catch (err) {
      console.log(err);
    }
  },
  setUser: async () => {
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/auth/googlerefetch`, {
        withCredentials: true,
      });
      set({ user: true });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useStore;
