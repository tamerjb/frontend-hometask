
import create, { SetState } from 'zustand';
import { FormActions, UserSlice } from './entities/user.types';
type FormState = {
  isFormValid: boolean;

};
type UseFormStore = FormState & FormActions;



export const useStore = create<UseFormStore>((set: SetState<UseFormStore>) => ({
  isFormValid: false,
  setFormValid: (isValid: boolean) => set({ isFormValid: isValid }),
}));
