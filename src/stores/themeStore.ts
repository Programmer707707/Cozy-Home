import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (val: boolean) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      setTheme: (val) => set({ isDark: val }),
    }),
    {
      name: 'theme-storage',
    }
  )
);
