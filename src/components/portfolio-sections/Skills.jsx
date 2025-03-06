import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Button from '../ui/Button';
import { PlusCircle, X } from 'lucide-react';

const Skills = ({ isEditing = false }) => {
  const { portfolio, addItem, updateItem, removeItem, customization } = usePortfolio();
  const { skills } = portfolio;
  const { sectionLayouts } = customization.layout;
  const { style, columns } = sectionLayouts.skills;
  
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

  // Helper function to determine grid columns based on customization
  const getGridColsClass = () => {
    switch(columns) {
      case 2: return 'md:grid-cols-2';
      case 4: return 'md:grid-cols-4';
      default: return 'md:grid-cols-3';
    }
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
            
            <Button onClick={handleAddSkill} className="mt-4 flex items-center">
              <PlusCircle size={16} className="mr-2" />
              Add Skill
            </Button>
          </div>
        )}
        
        {/* Skills display based on selected style */}
        {style === 'bars' && (
          <div className={`grid grid-cols-1 ${getGridColsClass()} gap-6`}>
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
                        <X size={18} />
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
          </div>
        )}
        
        {style === 'tags' && (
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className={`px-4 py-2 rounded-full ${
                  isEditing ? 'bg-white border' : 'bg-indigo-100 text-indigo-800'
                } ${isEditing ? 'flex items-center' : ''}`}
              >
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => handleUpdateSkill(index, 'name', e.target.value)}
                      className="border-none bg-transparent focus:outline-none w-32"
                    />
                    <button 
                      onClick={() => handleRemoveSkill(index)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <X size={14} />
                    </button>
                  </>
                ) : (
                  <span className="font-medium">{skill.name}</span>
                )}
              </div>
            ))}
          </div>
        )}
        
        {style === 'cards' && (
          <div className={`grid grid-cols-2 ${getGridColsClass()} gap-4`}>
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-center transition-transform hover:transform hover:scale-105"
              >
                {isEditing ? (
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => handleUpdateSkill(index, 'name', e.target.value)}
                        className="px-2 py-1 border rounded w-full text-center"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="range"
                        value={skill.level}
                        onChange={(e) => handleUpdateSkill(index, 'level', parseInt(e.target.value))}
                        min="0"
                        max="100"
                        className="w-full"
                      />
                    </div>
                    <button 
                      onClick={() => handleRemoveSkill(index)}
                      className="mt-2 text-red-500 hover:text-red-700 self-center"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <div className="mt-2 flex justify-center">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 rounded-full bg-gray-100"></div>
                        <div 
                          className="absolute top-0 left-0 text-center w-16 h-16 flex items-center justify-center text-indigo-700 font-bold"
                        >
                          {skill.level}%
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        
        {style === 'list' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {skills.map((skill, index) => (
                <li key={index} className="p-4">
                  {isEditing ? (
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleUpdateSkill(index, 'name', e.target.value)}
                          className="px-2 py-1 border rounded w-full"
                        />
                      </div>
                      <div className="flex items-center ml-4 w-32">
                        <input
                          type="number"
                          value={skill.level}
                          onChange={(e) => handleUpdateSkill(index, 'level', parseInt(e.target.value))}
                          min="0"
                          max="100"
                          className="w-16 px-2 py-1 border rounded"
                        />
                        <span className="ml-1">%</span>
                      </div>
                      <button 
                        onClick={() => handleRemoveSkill(index)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {!isEditing && skills.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No skills added yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;