import { Auth } from "@typescript/auth";
import { create } from "zustand";

type AuthState = {
  user: Auth.User | null;
  login: () => void;
  logout: () => void;
};

const defaultUser: Auth.User = {
  name: "Default User",
  avatar: null,
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: () => set({ user: defaultUser }),
  logout: () => set({ user: null }),
}));
