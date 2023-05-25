import { create } from 'zustand';
// import { MMKV } from 'react-native-mmkv';
// import { persist, StateStorage } from 'zustand/middleware';

import { FoodDTO } from '@/dtos/FoodDTO';

// export const cartPersistStorage = new MMKV({ id: '@food-app/cart' });

// const zustandMMKVStorage: StateStorage = {
//   setItem: (name, value) => {
//     return cartPersistStorage.set(name, value);
//   },
//   getItem: name => {
//     const value = cartPersistStorage.getString(name);
//     return value ?? null;
//   },
//   removeItem: name => {
//     return cartPersistStorage.delete(name);
//   },
// };

interface State {
  cart: FoodDTO[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (food: FoodDTO) => void;
  removeFromCart: (food: FoodDTO) => void;
  decrementAmount: (food: FoodDTO) => void;
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
      const updatedCart = cart.map(
        item => item.id === food.id && { ...item, amount: item.amount + 1 },
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
      const decrement = cart.map(
        item => item.id === food.id && { ...item, amount: item.amount - 1 },
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
