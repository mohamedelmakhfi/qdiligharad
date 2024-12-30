import {create} from 'zustand';
import api from '../../axios';

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  loginError: null,
  signupError: null,

  login: async (email, password) => {
    try {
      const response = await api.post('/auth/signing', {
        email,
        password,
      });
      const { jwt, role } = response.data;

      localStorage.setItem('token', jwt);

      set({
        user: { email, role },
        token: jwt,
        isAuthenticated: true,
        loginError: null,
      });

      
    } catch (error) {
      console.error('Login failed', error);
      set({ loginError: 'Invalid email or password' });
    }
  },



  signup: async (user) => {
    try {
      const response = await api.post('/auth/signup', user);

      const { jwt, role } = response.data; 
      localStorage.setItem('token', jwt);

      set({
        user: { email: user.email, role },
        token: jwt,
        isAuthenticated: true,
        signupError: null,
      });
      
    } catch (error) {
      console.error('Signup failed', error);
      set({ signupError: 'Signup failed. Please check your details.' });
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
