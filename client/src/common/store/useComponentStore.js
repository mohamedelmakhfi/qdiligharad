import { create } from 'zustand';

export const useComponentStore = create((set, get) => ({
  form: {}, // Initial form state
  setForm: (name, fields) => set((state) => ({ ...state, form: { ...state.form, [name]: {...fields} } })),
  addField: (name, field) => set((state) => ({ ...state, form: { ...state.form, [name]: {...(state.form[name] || {}), ...field} } })),
  addFields: (name, fields) => set((state) => ({ ...state, form: { ...state.form, [name]: {...(state.form[name] || {}), ...fields} } })),
  getForm: (name) => get((state) => state.form?.[name]),
}));
