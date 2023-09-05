<<<<<<< HEAD
import { create } from 'zustand';

export const useStore = create((set) => ({
  count: 5,
  increaseCount: () => set((state) => ({count: state.count+1})),
  decreaseCount: () => set((state) => ({count: state.count-1})),
  resetCount: () => set({count:0})
}));
=======
import { create } from 'zustand';

export const useStore = create((set) => ({
  count: 5,
  increaseCount: () => set((state) => ({count: state.count+1})),
  decreaseCount: () => set((state) => ({count: state.count-1})),
  resetCount: () => set({count:0})
}));
>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
