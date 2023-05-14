import { create } from 'zustand';

interface IUser {
  id: string;
  name?: string;
  email: string;
  photoUrl?: string;
  phoneNumber?: string;
}

interface StoreProps {
  user: IUser;
  setUpdateUser: (user: IUser) => void;
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
