import { create } from 'zustand';

interface IUser {
  // name: string;
  // password: string;
  userIsValid: boolean;
  setCheckValidUser: (valid: boolean) => void;
}

export const userStore = create<IUser>()(set => ({
  userIsValid: false,
  setCheckValidUser: by => set(() => ({ userIsValid: by })),
}));
