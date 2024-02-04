import { StoreApi } from 'zustand';
import { UseBoundStore } from 'zustand';
import { create } from 'zustand';

export type BearStoreType = State & Actions;

type State = {
	bears: number;
};

export type Actions = {
	increasePopulation: () => void;
	removeAllBears: () => void;
};

const useStore: UseBoundStore<StoreApi<BearStoreType>> = create((set) => ({
	bears: 0,
	increasePopulation: () =>
		set((state: State) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
}));

export default useStore;
