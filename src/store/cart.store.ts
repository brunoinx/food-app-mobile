import { create } from 'zustand';
// import { MMKV } from 'react-native-mmkv';
// import { persist, StateStorage } from 'zustand/middleware';

import { FoodDTO } from '@/dtos/FoodDTO';

type OmittedFoodProps = Omit<FoodDTO, 'description' | 'images' | 'isFavorite'>;

export interface CardFoodProps extends OmittedFoodProps {
  image: string;
  amount: number;
}

interface State {
  cart: CardFoodProps[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (food: CardFoodProps) => void;
  removeFromCart: (food: CardFoodProps) => void;
  decrementAmount: (food: CardFoodProps) => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<State & Actions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: food => {
    const cart = get().cart;
    const foodItem = cart.find(item => item.id === food.id);

    // se o item já existir no carrinho, aumenta a quantidade
    if (foodItem) {
      const updatedCart = cart.map(item =>
        item.id === food.id ? { ...item, amount: item.amount + 1 } : item,
      );
      set(state => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + food.value,
      }));
    } else {
      const updatedCart = [...cart, { ...food, amount: 1 }];

      set(state => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + food.value,
      }));
    }
  },
  removeFromCart: food => {
    set(state => ({
      cart: state.cart.filter(item => item.id !== food.id),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - food.value,
    }));
  },
  decrementAmount: food => {
    const cart = get().cart;
    const foodItem = cart.find(item => item.id === food.id);

    if (foodItem.amount >= 2) {
      const decrement = cart.map(item =>
        item.id === food.id ? { ...item, amount: item.amount - 1 } : item,
      );

      set(state => ({
        cart: decrement,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - food.value,
      }));
    } else {
      return;
    }
  },
}));
