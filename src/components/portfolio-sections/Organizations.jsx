import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Button from '../ui/Button';

const Organizations = ({ isEditing = false }) => {
  const { portfolio, addItem, updateItem, removeItem } = usePortfolio();
  const { organizations } = portfolio;
  
  const [newOrganization, setNewOrganization] = useState({
    name: '',
    role: '',
    duration: '',
    description: '',
    website: '',
    logo: ''
  });

  const handleAddOrganization = () => {
    if (!newOrganization.name.trim()) return;
    addItem('organizations', { ...newOrganization });
    setNewOrganization({
      name: '',
      role: '',
      duration: '',
      description: '',
      website: '',
      logo: ''
    });
  };

  const handleUpdateOrganization = (index, field, value) => {
    const updatedOrganization = { ...organizations[index], [field]: value };
    updateItem('organizations', index, updatedOrganization);
  };

  const handleRemoveOrganization = (index) => {
    removeItem('organizations', index);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewOrganization({ ...newOrganization, logo: event.target.result });
    };
    reader.readAsDataURL(file);
  };
  
  const handleOrganizationLogoChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      handleUpdateOrganization(index, 'logo', event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="py-16" id="organizations">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Organizations</h2>
        
        {isEditing && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <input
                  type="text"
                  value={newOrganization.name}
                  onChange={(e) => setNewOrganization({ ...newOrganization, name: e.target.value })}
                  placeholder="Organization Name"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                <input
                  type="text"
                  value={newOrganization.role}
                  onChange={(e) => setNewOrganization({ ...newOrganization, role: e.target.value })}
                  placeholder="Your Role in the Organization"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <input
                  type="text"
                  value={newOrganization.duration}
                  onChange={(e) => setNewOrganization({ ...newOrganization, duration: e.target.value })}
                  placeholder="e.g., 2020 - Present or 2019 - 2021"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input
                  type="text"
                  value={newOrganization.website}
                  onChange={(e) => setNewOrganization({ ...newOrganization, website: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newOrganization.description}
                onChange={(e) => setNewOrganization({ ...newOrganization, description: e.target.value })}
                placeholder="Describe your involvement and responsibilities"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="3"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization Logo</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleLogoChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {newOrganization.logo && (
                <div className="mt-2">
                  <img 
                    src={newOrganization.logo} 
                    alt="Organization logo preview" 
                    className="max-h-20 rounded"
                  />
                </div>
              )}
            </div>
            
            <Button onClick={handleAddOrganization}>
              Add Organization
            </Button>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((organization, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              {isEditing ? (
                <div>
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={() => handleRemoveOrganization(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                      <input
                        type="text"
                        value={organization.name}
                        onChange={(e) => handleUpdateOrganization(index, 'name', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                      <input
                        type="text"
                        value={organization.role}
                        onChange={(e) => handleUpdateOrganization(index, 'role', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                      <input
                        type="text"
                        value={organization.duration}
                        onChange={(e) => handleUpdateOrganization(index, 'duration', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                      <input
                        type="text"
                        value={organization.website}
                        onChange={(e) => handleUpdateOrganization(index, 'website', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={organization.description}
                        onChange={(e) => handleUpdateOrganization(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="3"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization Logo</label>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => handleOrganizationLogoChange(index, e)}
                        className="w-full"
                      />
                      {organization.logo && (
                        <div className="mt-2">
                          <img 
                            src={organization.logo} 
                            alt="Organization logo" 
                            className="max-h-20 rounded"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex">
                  {organization.logo && (
                    <div className="mr-6">
                      <img 
                        src={organization.logo} 
                        alt={organization.name} 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{organization.name}</h3>
                      {organization.duration && (
                        <span className="text-sm text-gray-600">{organization.duration}</span>
                      )}
                    </div>
                    
                    {organization.role && (
                      <h4 className="text-lg text-gray-700 mb-2">{organization.role}</h4>
                    )}
                    
                    <p className="text-gray-600 mb-3">{organization.description}</p>
                    
                    {organization.website && (
                      <a 
                        href={organization.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        Visit Website &rarr;
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {!isEditing && organizations.length === 0 && (
            <div className="col-span-2 text-center py-8 text-gray-500">
              No organizations added yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Organizations;