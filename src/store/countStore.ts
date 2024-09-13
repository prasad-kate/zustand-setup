// src/store.ts
import { create } from "zustand";

interface CountState {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  resetCount: () => void;
}

export const useBearStore = create<CountState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
}));
