import {create} from 'zustand';
import api from '../../axios';

const useUserStore = create((set) => ({
  user: null,
  error: null,

  fetchUserProfile: async () => {
    set({ loading: true });
    try {
      const response = await api.get('/api/client/profile');
      set({ user: response.data});
    } catch (error) {
      set({ error: error.message});
    }
  },
}));

export default useUserStore;
