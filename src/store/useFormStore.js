import React from 'react';
import { create } from 'zustand';

export const useFormStore = create((set) => ({
  formData: {},
  updateFormData: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
}));

