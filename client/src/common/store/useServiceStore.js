import { create } from 'zustand';
import api from '../../axios';



const useServiceStore = create((set) => ({
  categories: [],
  metadata: {},
  selectedCategory: null,
  fetchCategories: async () => {
    const response = await api.get('/api/service/categories');
    set({ categories: response.data });
  },
  fetchMetadata: async (categoryId) => {
    const response = await api.get(`/api/service/metadata/${categoryId}`);
    set((state) => ({
      metadata: {
        ...state.metadata,
        [categoryId]: response.data,
      },
    }));
    console.log(response.data);
  },
  setSelectedCategory: (categoryId) => set({ selectedCategory: categoryId }),
}));

export default useServiceStore;