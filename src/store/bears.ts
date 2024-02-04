import { StoreApi } from 'zustand';
import { UseBoundStore } from 'zustand';
import { create } from 'zustand';

export type bearsSore = stateType & {
	increasePopulation: () => void;
	removeAllBears: () => void;
};

type stateType = {
	bears: number;
};

const useStore: UseBoundStore<StoreApi<bearsSore>> = create((set) => ({
	bears: 0,
	increasePopulation: () =>
		set((state: stateType) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}));

export default useStore;
