import { create } from "zustand";
import { persist } from "zustand/middleware";

const applyTheme = (theme) =>
  document.documentElement.setAttribute("data-theme", theme);

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => {
        const next = get().theme === "light" ? "dark" : "light";
        applyTheme(next);
        set({ theme: next });
      },
    }),
    {
      name: "theme-storage", // localStorage kaliti
      onRehydrateStorage: () => (state) => {
        if (state) applyTheme(state.theme); // sahifa yangilanganda qayta qo'llaydi
      },
    }
  )
);