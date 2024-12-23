import { useFormStore } from '@/store/useFormStore';
import { useState } from 'react';

const PersonaliInfo = () => {
  const { formData, updateFormData } = useFormStore();
  const [errors, setErrors] = useState({});

  // Validation Function
  const validate = (field, value) => {
    const newErrors = { ...errors };

    // Name validation
    if (field === 'name' && !value.trim()) {
      newErrors.name = 'Name is required.';
    } else {
      delete newErrors.name;
    }

    // Email validation
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        newErrors.email = 'Email is required.';
      } else if (!emailRegex.test(value)) {
        newErrors.email = 'Enter a valid email address.';
      } else {
        delete newErrors.email;
      }
    }

    // Phone number validation
    if (field === 'phone') {
      const phoneRegex = /^[6-9]\d{9}$/; // Assumes valid 10-digit Indian phone numbers starting with 6-9
      if (!value.trim()) {
        newErrors.phone = 'Phone number is required.';
      } else if (!phoneRegex.test(value)) {
        newErrors.phone = 'Enter a valid 10-digit phone number.';
      } else {
        delete newErrors.phone;
      }
    }

    // Degree validation
    if (field === 'degree' && !value.trim()) {
      newErrors.degree = 'Degree is required.';
    } else {
      delete newErrors.degree;
    }

    // Date of birth validation
    if (field === 'dob') {
      const dobRegex = /^\d{4}-\d{2}-\d{2}$/; // Format: YYYY-MM-DD
      const today = new Date();
      const enteredDate = new Date(value);

      if (!value.trim()) {
        newErrors.dob = 'Date of birth is required.';
      } else if (!dobRegex.test(value)) {
        newErrors.dob = 'Enter a valid date in YYYY-MM-DD format.';
      } else if (enteredDate > today) {
        newErrors.dob = 'Date of birth cannot be in the future.';
      } else {
        delete newErrors.dob;
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
      {/* Name Field */}
      <label className="block">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</span>
        <input
          type="text"
          value={formData.name || ''}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`mt-1 block w-full p-2 border rounded bg-slate-100 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </label>

      {/* Email Field */}
      <label className="block">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</span>
        <input
          type="email"
          value={formData.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`mt-1 block w-full p-2 border rounded bg-slate-100 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </label>

      {/* Phone Number Field */}
      <label className="block">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number</span>
        <input
          type="text"
          value={formData.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={`mt-1 block w-full p-2 border rounded bg-slate-100 ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </label>

      {/* Degree Field */}
      <label className="block">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">Degree</span>
        <input
          type="text"
          value={formData.degree || ''}
          onChange={(e) => handleChange('degree', e.target.value)}
          className={`mt-1 block w-full p-2 border rounded bg-slate-100 ${
            errors.degree ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.degree && <p className="text-red-500 text-sm">{errors.degree}</p>}
      </label>

      {/* Date of Birth Field */}
      <label className="block">
        <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">Date of Birth</span>
        <input
          type="date"
          value={formData.dob || ''}
          onChange={(e) => handleChange('dob', e.target.value)}
          className={`mt-1 block w-full p-2 border rounded bg-slate-100 ${
            errors.dob ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
      </label>
    </div>
  );
};

export default PersonaliInfo;
