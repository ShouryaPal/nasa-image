"use client";
import { create } from "zustand";
import axios from "axios";

interface User {
  email: string;
}

interface UserState {
  user: User | null;
  fetchUser: () => void;
}

const useStore = create<UserState>((set) => ({
  user: null,
  fetchUser: async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/auth/refetch`,
        {
          withCredentials: true,
        }
      );
      set({ user: res.data.email });
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useStore;
