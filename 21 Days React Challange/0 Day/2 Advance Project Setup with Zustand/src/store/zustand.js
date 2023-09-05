import { create } from 'zustand';

export const useStore = create((set) => ({
  count: 5,
  increaseCount: () => set((state) => ({count: state.count+1})),
  decreaseCount: () => set((state) => ({count: state.count-1})),
  resetCount: () => set({count:0})
}));
