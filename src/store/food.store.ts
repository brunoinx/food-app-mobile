import { create } from 'zustand';

import { FoodDTO } from '@/dtos/FoodDTO';

interface State {
  foods: FoodDTO[];
  isLoading: boolean;
  error: unknown;
}

interface Actions {
  fetchData: () => Promise<void>;
}

const INITIAL_STATE: State = {
  foods: [],
  isLoading: false,
  error: null,
};

export const useFoodsStore = create<State & Actions>(set => ({
  foods: INITIAL_STATE.foods,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,
  fetchData: async () => {
    try {
      set({ isLoading: true, error: null });
    } catch (error) {
      console.log(error);
    }
  },
}));
