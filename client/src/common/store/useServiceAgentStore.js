import { create } from 'zustand';
import api from '../../axios';

const useServiceAgentStore = create((set) => ({
  services: [],
  serviceDetails: null,
  error: null,
  success: null,
  fetchServices: async (userId) => {
    try {
      const response = await api.get(`/api/service/agent/services/${userId}`);
      set({ services: response.data, error: null, success: 'Services fetched successfully.' });
    } catch (error) {
      set({ error: "Failed to fetch services" });
      console.error("Failed to fetch services", error);
    }
  },
  fetchServiceDetails: async (id) => {
    try {
      const response = await api.get(`/api/service/details/${id}`);
      set({ serviceDetails: response.data, error: null, success: 'Service details fetched successfully.' });
    } catch (error) {
      set({ error: "Failed to fetch service details" });
      console.error("Failed to fetch service details", error);
    }
  },
  deleteService: async (id, userId) => {
    try {
      await api.delete(`/api/service/agent/services/${userId}/${id}`);
      set((state) => ({
        services: state.services.filter(service => service.id !== id),
        error: null,
        success: 'Service deleted successfully.'
      }));
    } catch (error) {
      set({ error: "Failed to delete service" });
      console.error("Failed to delete service", error);
    }
  },
  updateService: async (serviceId, updatedService) => {
    try {
      const response = await api.put(`/api/service/update/${serviceId}`, updatedService);
      set((state) => ({
        services: state.services.map((service) =>
          service.id === serviceId ? response.data : service
        ),
        serviceDetails: response.data,
        error: null,
        success: 'Service updated successfully.'
      }));
    } catch (error) {
      set({ error: "Failed to update service" });
      console.error("Failed to update service", error);
    }
  },
  clearNotifications: () => set({ error: null, success: null }),
}));

export default useServiceAgentStore;
