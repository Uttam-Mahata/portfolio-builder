import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Button from '../ui/Button';

const Skills = ({ isEditing = false }) => {
  const { portfolio, addItem, updateItem, removeItem } = usePortfolio();
  const { skills } = portfolio;
  
  const [newSkill, setNewSkill] = useState({ name: '', level: 80 });

  const handleAddSkill = () => {
    if (!newSkill.name.trim()) return;
    addItem('skills', { ...newSkill });
    setNewSkill({ name: '', level: 80 });
  };

  const handleUpdateSkill = (index, field, value) => {
    const updatedSkill = { ...skills[index], [field]: value };
    updateItem('skills', index, updatedSkill);
  };

  const handleRemoveSkill = (index) => {
    removeItem('skills', index);
  };

  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        
        {isEditing && (
          <div className="mb-8 bg-white p-4 rounded-lg shadow">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                placeholder="Skill name"
                className="w-full md:w-2/3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              
              <div className="w-full md:w-1/3 flex items-center space-x-2">
                <span className="text-sm text-gray-600">Level:</span>
                <input
                  type="range"
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) })}
                  min="0"
                  max="100"
                  className="w-full"
                />
                <span>{newSkill.level}%</span>
              </div>
            </div>
            
            <Button onClick={handleAddSkill} className="mt-4">
              Add Skill
            </Button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              {isEditing ? (
                <div>
                  <div className="flex justify-between mb-2">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => handleUpdateSkill(index, 'name', e.target.value)}
                      className="px-2 py-1 border rounded w-2/3"
                    />
                    <button 
                      onClick={() => handleRemoveSkill(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Level:</span>
                    <input
                      type="range"
                      value={skill.level}
                      onChange={(e) => handleUpdateSkill(index, 'level', parseInt(e.target.value))}
                      min="0"
                      max="100"
                      className="w-full"
                    />
                    <span>{skill.level}%</span>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-1">
                    {skill.level}%
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {!isEditing && skills.length === 0 && (
            <div className="col-span-2 text-center py-8 text-gray-500">
              No skills added yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;