import React from 'react';
import { useFormStore } from '@/store/useFormStore';

const Preferences = () => {
  const { formData, updateFormData } = useFormStore();

  // Ensure formData.skills and formData.careerInterests are always arrays
  const skills = formData.skills || [];
  const careerInterests = formData.careerInterests || [];

  const handleSkillChange = (skill) => {
    if (skills.includes(skill)) {
      updateFormData('skills', skills.filter((s) => s !== skill));
    } else {
      updateFormData('skills', [...skills, skill]);
    }
  };

  const handleCareerInterestChange = (interest) => {
    if (careerInterests.includes(interest)) {
      updateFormData('careerInterests', careerInterests.filter((i) => i !== interest));
    } else {
      updateFormData('careerInterests', [...careerInterests, interest]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Skills Section */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">Skills</h3>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2 bg-blue-50 p-2 rounded-lg hover:bg-blue-100 transition duration-200">
            <input
              type="checkbox"
              checked={skills.includes('JavaScript')}
              onChange={() => handleSkillChange('JavaScript')}
              className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded-md"
            />
            <span className="text-sm text-gray-700 dark:text-gray-900">JavaScript</span>
          </label>
          <label className="flex items-center space-x-2 bg-blue-50 p-2 rounded-lg hover:bg-blue-100 transition duration-200">
            <input
              type="checkbox"
              checked={skills.includes('Python')}
              onChange={() => handleSkillChange('Python')}
              className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded-md"
            />
            <span className="text-sm text-gray-700 dark:text-gray-900">Python</span>
          </label>
          <label className="flex items-center space-x-2 bg-blue-50 p-2 rounded-lg hover:bg-blue-100 transition duration-200">
            <input
              type="checkbox"
              checked={skills.includes('Java')}
              onChange={() => handleSkillChange('Java')}
              className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded-md"
            />
            <span className="text-sm text-gray-700 dark:text-gray-900">Java</span>
          </label>
        </div>
      </div>

      {/* Career Interests Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Career Interests</h3>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2 bg-green-50 p-2 rounded-lg hover:bg-green-100 transition duration-200">
            <input
              type="checkbox"
              checked={careerInterests.includes('SDE')}
              onChange={() => handleCareerInterestChange('SDE')}
              className="form-checkbox h-5 w-5 text-green-500 border-gray-300 rounded-md"
            />
            <span className="text-sm text-gray-700 dark:text-gray-900">SDE</span>
          </label>
          <label className="flex items-center space-x-2 bg-green-50 p-2 rounded-lg hover:bg-green-100 transition duration-200">
            <input
              type="checkbox"
              checked={careerInterests.includes('ML')}
              onChange={() => handleCareerInterestChange('ML')}
              className="form-checkbox h-5 w-5 text-green-500 border-gray-300 rounded-md"
            />
            <span className="text-sm text-gray-700 dark:text-gray-900">Machine Learning</span>
          </label>
          <label className="flex items-center space-x-2 bg-green-50 p-2 rounded-lg hover:bg-green-100 transition duration-200">
            <input
              type="checkbox"
              checked={careerInterests.includes('AI')}
              onChange={() => handleCareerInterestChange('AI')}
              className="form-checkbox h-5 w-5 text-green-500 border-gray-300 rounded-md"
            />
            <span className="text-sm text-gray-700 dark:text-gray-900">Artificial Intelligence</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
