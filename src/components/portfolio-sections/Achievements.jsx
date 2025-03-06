import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Button from '../ui/Button';

const Achievements = ({ isEditing = false }) => {
  const { portfolio, addItem, updateItem, removeItem } = usePortfolio();
  const { achievements } = portfolio;
  
  const [newAchievement, setNewAchievement] = useState({
    title: '',
    organization: '',
    date: '',
    description: '',
    image: ''
  });

  const handleAddAchievement = () => {
    if (!newAchievement.title.trim()) return;
    addItem('achievements', { ...newAchievement });
    setNewAchievement({
      title: '',
      organization: '',
      date: '',
      description: '',
      image: ''
    });
  };

  const handleUpdateAchievement = (index, field, value) => {
    const updatedAchievement = { ...achievements[index], [field]: value };
    updateItem('achievements', index, updatedAchievement);
  };

  const handleRemoveAchievement = (index) => {
    removeItem('achievements', index);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewAchievement({ ...newAchievement, image: event.target.result });
    };
    reader.readAsDataURL(file);
  };
  
  const handleAchievementImageChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      handleUpdateAchievement(index, 'image', event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="py-16" id="achievements">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
        
        {isEditing && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Achievement Title</label>
                <input
                  type="text"
                  value={newAchievement.title}
                  onChange={(e) => setNewAchievement({ ...newAchievement, title: e.target.value })}
                  placeholder="Achievement Title"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                <input
                  type="text"
                  value={newAchievement.organization}
                  onChange={(e) => setNewAchievement({ ...newAchievement, organization: e.target.value })}
                  placeholder="Organization"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="text"
                value={newAchievement.date}
                onChange={(e) => setNewAchievement({ ...newAchievement, date: e.target.value })}
                placeholder="Month Year (e.g., March 2023)"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newAchievement.description}
                onChange={(e) => setNewAchievement({ ...newAchievement, description: e.target.value })}
                placeholder="Achievement Description"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Image (Optional)</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {newAchievement.image && (
                <div className="mt-2">
                  <img 
                    src={newAchievement.image} 
                    alt="Achievement preview" 
                    className="max-h-40 rounded"
                  />
                </div>
              )}
            </div>
            
            <Button onClick={handleAddAchievement}>
              Add Achievement
            </Button>
          </div>
        )}
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              {isEditing ? (
                <div>
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={() => handleRemoveAchievement(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Achievement Title</label>
                      <input
                        type="text"
                        value={achievement.title}
                        onChange={(e) => handleUpdateAchievement(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <input
                        type="text"
                        value={achievement.organization}
                        onChange={(e) => handleUpdateAchievement(index, 'organization', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="text"
                      value={achievement.date}
                      onChange={(e) => handleUpdateAchievement(index, 'date', e.target.value)}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={achievement.description}
                      onChange={(e) => handleUpdateAchievement(index, 'description', e.target.value)}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      rows="3"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => handleAchievementImageChange(index, e)}
                      className="w-full"
                    />
                    {achievement.image && (
                      <div className="mt-2">
                        <img 
                          src={achievement.image} 
                          alt="Achievement" 
                          className="max-h-40 rounded"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row">
                  {achievement.image && (
                    <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title} 
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className={achievement.image ? "md:w-3/4" : "w-full"}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                      {achievement.date && (
                        <span className="text-sm text-gray-600">{achievement.date}</span>
                      )}
                    </div>
                    
                    {achievement.organization && (
                      <h4 className="text-lg text-gray-700 mb-2">{achievement.organization}</h4>
                    )}
                    
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {!isEditing && achievements.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No achievements added yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;