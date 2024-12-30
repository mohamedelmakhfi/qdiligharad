import {create} from 'zustand';

const useStore = create((set) => ({
  searchQuery: '',
  filter: null,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilter: (filter) => set({ filter }),
}));

export default useStore;
