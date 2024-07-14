import create from "zustand";
import { persist } from "zustand/middleware";

// Define the interface for the store's state
interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

// Create the Zustand store with persistence
const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => set({ token }),
      logout: () => set({ token: null }),
    }),
    {
      name: "auth", // Name of the item in the storage
      getStorage: () => localStorage, // Choose localStorage as the storage medium
    }
  )
);

export default useAuth;
