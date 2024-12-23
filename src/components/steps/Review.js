import React from 'react';
import { useFormStore } from '@/store/useFormStore';

const Review = () => {
  const { formData } = useFormStore();

  const skills = formData.skills || [];
  const careerInterests = formData.careerInterests || [];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Review Your Information</h2>

      <div className="space-y-2">
        <div>
          <strong className="text-gray-700 dark:text-gray-200">Name:</strong> {formData.name}
        </div>
        <div>
          <strong className="text-gray-700 dark:text-gray-200">Email:</strong> {formData.email}
        </div>
        <div>
          <strong className="text-gray-700 dark:text-gray-200">Mobile Number:</strong> {formData.phone}
        </div>
        <div>
          <strong className="text-gray-700 dark:text-gray-200">Degree:</strong> {formData.degree}
        </div>
        <div>
          <strong className="text-gray-700 dark:text-gray-200">Date of Birth:</strong> {formData.dob}
        </div>
        <div>
          <strong className="text-gray-700 dark:text-gray-200">Address:</strong> {formData.address}
        </div>
        <div>
          <strong className="text-gray-700 dark:text-gray-200">City:</strong> {formData.city}
        </div>
        <div>
          <strong className="text-gray-700 dark:text-gray-200">State:</strong> {formData.state}
        </div>
        <div>
          <strong className="text-gray-700 dark:text-gray-200">Pin Code:</strong> {formData.pin}
        </div>

        <div>
          <strong className="text-gray-700 dark:text-gray-200">Skills:</strong> 
          {skills.length > 0 ? (
            <ul className="list-disc pl-5">
              {skills.map((skill, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-200">{skill}</li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-700 dark:text-gray-200">No skills selected</div>
          )}
        </div>

        <div>
          <strong className="text-gray-700 dark:text-gray-200">Career Interests:</strong> 
          {careerInterests.length > 0 ? (
            <ul className="list-disc pl-5">
              {careerInterests.map((interest, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-200">{interest}</li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-700 dark:text-gray-200">No career interests selected</div>
          )}
        </div>
      </div>

      <button className="p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Submit
      </button>
    </div>
  );
};

export default Review;
