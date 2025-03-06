import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Button from '../ui/Button';

const Experience = ({ isEditing = false }) => {
  const { portfolio, addItem, updateItem, removeItem } = usePortfolio();
  const { experience } = portfolio;
  
  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    description: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
    current: false
  });

  const handleAddExperience = () => {
    if (!newExperience.company.trim() || !newExperience.position.trim()) return;
    addItem('experience', { ...newExperience });
    setNewExperience({
      company: '',
      position: '',
      description: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      current: false
    });
  };

  const handleUpdateExperience = (index, field, value) => {
    const updatedExperience = { ...experience[index], [field]: value };
    updateItem('experience', index, updatedExperience);
  };

  const handleRemoveExperience = (index) => {
    removeItem('experience', index);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <section className="py-16" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        
        {isEditing && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  value={newExperience.company}
                  onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                  placeholder="Company Name"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input
                  type="text"
                  value={newExperience.position}
                  onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
                  placeholder="Position"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newExperience.description}
                onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                placeholder="Job Description"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Month</label>
                <select
                  value={newExperience.startMonth}
                  onChange={(e) => setNewExperience({ ...newExperience, startMonth: e.target.value })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Month</option>
                  {months.map((month, idx) => (
                    <option key={idx} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Year</label>
                <input
                  type="number"
                  value={newExperience.startYear}
                  onChange={(e) => setNewExperience({ ...newExperience, startYear: e.target.value })}
                  placeholder="Year"
                  min="1900"
                  max="2100"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Month</label>
                <select
                  value={newExperience.endMonth}
                  onChange={(e) => setNewExperience({ ...newExperience, endMonth: e.target.value })}
                  disabled={newExperience.current}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Month</option>
                  {months.map((month, idx) => (
                    <option key={idx} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Year</label>
                <input
                  type="number"
                  value={newExperience.endYear}
                  onChange={(e) => setNewExperience({ ...newExperience, endYear: e.target.value })}
                  placeholder="Year"
                  min="1900"
                  max="2100"
                  disabled={newExperience.current}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="currentJob"
                checked={newExperience.current}
                onChange={(e) => setNewExperience({ ...newExperience, current: e.target.checked })}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="currentJob" className="ml-2 block text-sm text-gray-700">
                I currently work here
              </label>
            </div>
            
            <Button onClick={handleAddExperience}>
              Add Experience
            </Button>
          </div>
        )}
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              {isEditing ? (
                <div>
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={() => handleRemoveExperience(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleUpdateExperience(index, 'company', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => handleUpdateExperience(index, 'position', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleUpdateExperience(index, 'description', e.target.value)}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      rows="3"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Month</label>
                      <select
                        value={exp.startMonth}
                        onChange={(e) => handleUpdateExperience(index, 'startMonth', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="">Select Month</option>
                        {months.map((month, idx) => (
                          <option key={idx} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Year</label>
                      <input
                        type="number"
                        value={exp.startYear}
                        onChange={(e) => handleUpdateExperience(index, 'startYear', e.target.value)}
                        min="1900"
                        max="2100"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Month</label>
                      <select
                        value={exp.endMonth}
                        onChange={(e) => handleUpdateExperience(index, 'endMonth', e.target.value)}
                        disabled={exp.current}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="">Select Month</option>
                        {months.map((month, idx) => (
                          <option key={idx} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Year</label>
                      <input
                        type="number"
                        value={exp.endYear}
                        onChange={(e) => handleUpdateExperience(index, 'endYear', e.target.value)}
                        min="1900"
                        max="2100"
                        disabled={exp.current}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`current-${index}`}
                      checked={exp.current}
                      onChange={(e) => handleUpdateExperience(index, 'current', e.target.checked)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor={`current-${index}`} className="ml-2 block text-sm text-gray-700">
                      I currently work here
                    </label>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                      <h4 className="text-lg text-gray-700">{exp.company}</h4>
                    </div>
                    <div className="text-sm text-gray-600">
                      {exp.startMonth && exp.startYear && (
                        <span>
                          {exp.startMonth} {exp.startYear} - {
                            exp.current 
                              ? 'Present' 
                              : (exp.endMonth && exp.endYear ? `${exp.endMonth} ${exp.endYear}` : '')
                          }
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 whitespace-pre-line">{exp.description}</p>
                </div>
              )}
            </div>
          ))}
          
          {!isEditing && experience.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No experience added yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;