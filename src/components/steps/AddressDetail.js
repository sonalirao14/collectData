import { useState } from 'react';
import { useFormStore } from './../../store/useFormStore';
import { PersonaliInfo } from '@/components/steps/PersonaliInfo';

const AddressDetail = () => {
  const { formData, updateFormData } = useFormStore();
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    const newErrors = { ...errors };

    // Address validation
    if (field === 'address' && !value.trim()) {
      newErrors.address = 'Address is required.';
    } else {
      delete newErrors.address;
    }

    // City validation
    if (field === 'city' && !value.trim()) {
      newErrors.city = 'City is required.';
    } else {
      delete newErrors.city;
    }

    // State validation
    if (field === 'state' && !value.trim()) {
      newErrors.state = 'State is required.';
    } else {
      delete newErrors.state;
    }

    // PIN code validation
    if (field === 'pin') {
      if (!value.trim()) {
        newErrors.pin = 'Pin is required.';
      } else if (!/^\d{6}$/.test(value)) {
        newErrors.pin = 'Pin must be a valid 6-digit number.';
      } else {
        delete newErrors.pin;
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (field, value) => {
    updateFormData(field, value);
    validate(field, value);
  };

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">Address</span>
        <input
          type="text"
          value={formData.address || ''}
          onChange={(e) => handleChange('address', e.target.value)}
          className={`mt-1 block w-full p-2 border rounded bg-slate-100 ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </label>
      
      <label className="block">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">City</span>
        <input
          type="text"
          value={formData.city || ''}
          onChange={(e) => handleChange('city', e.target.value)}
          className={`mt-1 block w-full p-2 border rounded bg-slate-100 ${
            errors.city ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">State</span>
        <input
          type="text"
          value={formData.state || ''}
          onChange={(e) => handleChange('state', e.target.value)}
          className={`mt-1 block w-full p-2 border rounded bg-slate-100 ${
            errors.state ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">Pin Code</span>
        <input
          type="text"
          value={formData.pin || ''}
          onChange={(e) => handleChange('pin', e.target.value)}
          className={`mt-1 block w-full p-2 border rounded bg-slate-100 ${
            errors.pin ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.pin && <p className="text-red-500 text-sm">{errors.pin}</p>}
      </label>
    </div>
  );
};

export default AddressDetail;
