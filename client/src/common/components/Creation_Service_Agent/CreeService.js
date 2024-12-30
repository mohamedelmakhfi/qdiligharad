import React, { useEffect, useState } from 'react';
import useServiceStore from '../../store/useServiceStore';
import api from '../../../axios';
import './CreationService.css';
import useUserStore from '../../store/useUserStore';
import DynamicInput from './DynamicInput';

const CreeService = () => {
  const { categories, metadata, selectedCategory, fetchCategories, fetchMetadata, setSelectedCategory } = useServiceStore();
  const [formData, setFormData] = useState({ name: '', agentId: '' });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const { user, fetchUserProfile } = useUserStore();

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  useEffect(() => {
    if (selectedCategory) {
      fetchMetadata(selectedCategory);
    }
  }, [selectedCategory, fetchMetadata]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setFormData({ ...formData, metadata: {} });
  };

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      metadata: {
        ...formData.metadata,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceData = {
      name: formData.name.trim(),
      categoryId: selectedCategory ,  
      agentId: user?.id ,      
      metadata: Object.entries(formData?.metadata).map(([key, value]) => ({
        metadata: { id: parseInt(key, 10) }, 
        value: value,
      })),
    };

    try {
      const response = await api.post('/api/service/create', serviceData);
      console.log('Service created successfully:', response.data);
      setFormData({ name: '', agentId: '', metadata: {} });
      setSelectedCategory(null);
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };

  const renderInputs = () => {
    if (!selectedCategory || !metadata[selectedCategory]) return null;
  
    return metadata[selectedCategory].map((meta) => (
      <DynamicInput
        key={meta.id}
        meta={meta}
        handleInputChange={handleInputChange}
      />
    ));
  };

  return (
    <div className="service_container">
      <h1 className="service_title">Create a Service</h1>
      <div className="service_form-group">
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCategoryChange} value={selectedCategory || ''}>
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="service_form-group">
        <label htmlFor="agent">Agent:</label>
        <input
          type="number"
          id="agent"
          value={user?.id}
          placeholder="Enter agent ID"
          disabled
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="service_form-group">
          <label htmlFor="name">Service Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter service name"
            required
          />
        </div>
        {renderInputs()}
        <button className="service_button" type="submit">Create Service</button>
      </form>
    </div>
  );
};

export default CreeService;
