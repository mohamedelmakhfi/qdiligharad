import React from 'react';

const DynamicInput = ({ meta, handleInputChange }) => {
  const renderInput = () => {
    switch (meta.type) {
      case 'Number':
        return (
          <input
            type="number"
            id={meta.id}
            name={meta.id.toString()}
            placeholder={meta.defaultValue || ''}
            defaultValue={meta.defaultValue}
            required={meta.mandatory === 'true'}
            onChange={handleInputChange}
          />
        );
      case 'Select':
        return (
          <select
            id={meta.id}
            name={meta.id.toString()}
            required={meta.mandatory === 'true'}
            onChange={handleInputChange}
          >
            {meta.options && meta.options.map((option) => (
              <option key={option.id} value={option.optionValue}>
                {option.optionLabel}
              </option>
            ))}
          </select>
        );
      case 'Checkbox':
        return (
          <div>
            {meta.options && meta.options.map((option) => (
              <label key={option.id}>
                <input
                  type="checkbox"
                  id={`${meta.id}_${option.id}`}
                  name={meta.id.toString()}
                  value={option.optionValue}
                  onChange={handleInputChange}
                />
                {option.optionLabel}
              </label>
            ))}
          </div>
        );
      default:
        return (
          <input
            type="text"
            id={meta.id}
            name={meta.id.toString()}
            placeholder={meta.defaultValue || ''}
            defaultValue={meta.defaultValue}
            required={meta.mandatory === 'true'}
            onChange={handleInputChange}
          />
        );
    }
  };

  return (
    <div className="service_form-group">
      <label htmlFor={meta.id}>{meta.name}</label>
      {renderInput()}
    </div>
  );
};

export default DynamicInput;
