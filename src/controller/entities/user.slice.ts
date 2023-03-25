import { StateCreator } from "zustand";
import { UserSlice } from "./user.types";

export const userSlice: StateCreator<UserSlice> = (set) => ({
  user: {
    name: '',
    id: '',
    dateOfBirth:'',
    email: '',
    phone: '',
    city: '',
    street: '',
    homeNumber:'',
  }, 
   users: [],
  addUser: (user: any) => {
    set((state) => ({
      users: [user, ...state.users],
    }));
  },});
