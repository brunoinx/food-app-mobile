import { create } from 'zustand';

interface IUser {
  id: string;
  name?: string;
  email: string;
  photoUrl?: string;
  phoneNumber?: string;
}

interface StoreProps {
  user: IUser | null;
  setUpdateUser: (user: IUser | null) => void;
}

const initialState: IUser = {
  id: '',
  email: '',
  name: '',
  phoneNumber: '',
  photoUrl: '',
};

export const userStore = create<StoreProps>()(set => ({
  user: null,
  setUpdateUser: userData => set(() => ({ user: userData })),
}));
