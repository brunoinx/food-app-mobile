import { create } from 'zustand';

export interface IUser {
  uid: string;
  name?: string;
  email: string;
  photoUrl?: string;
  phoneNumber?: string;
}

interface StoreProps {
  user: IUser | null;
  setUpdateUser: (user: IUser | null) => void;
}

export const userStore = create<StoreProps>()(set => ({
  user: null,
  setUpdateUser: userData => set(() => ({ user: userData })),
}));
