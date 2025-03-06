import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

const Header = ({ isEditing = false }) => {
  const { portfolio, updateSection } = usePortfolio();
  const { name, title, navLinks, socialLinks } = portfolio.header;

  const handleChange = (e) => {
    if (!isEditing) return;
    
    const { name, value } = e.target;
    updateSection('header', { [name]: value });
  };

  const addSocialLink = () => {
    if (!isEditing) return;
    
    updateSection('header', {
      socialLinks: [...socialLinks, { platform: '', url: '' }]
    });
  };

  const updateSocialLink = (index, field, value) => {
    if (!isEditing) return;
    
    const updatedLinks = [...socialLinks];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    
    updateSection('header', { socialLinks: updatedLinks });
  };

  return (
    <header className="py-6 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="Your Professional Title"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-gray-800">{name || 'Your Name'}</h1>
                <p className="text-gray-600">{title || 'Your Professional Title'}</p>
              </>
            )}
          </div>
          
          <div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <div key={index} className={isEditing ? "flex items-center space-x-2" : ""}>
                  {isEditing ? (
                    <>
                      <select
                        value={link.platform}
                        onChange={(e) => updateSocialLink(index, 'platform', e.target.value)}
                        className="px-2 py-1 border rounded"
                      >
                        <option value="">Platform</option>
                        <option value="github">GitHub</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="twitter">Twitter</option>
                        <option value="dribbble">Dribbble</option>
                        <option value="behance">Behance</option>
                      </select>
                      <input
                        type="text"
                        value={link.url}
                        onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                        placeholder="URL"
                        className="px-2 py-1 border rounded"
                      />
                    </>
                  ) : (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      {/* Icon would go here based on platform */}
                      {link.platform}
                    </a>
                  )}
                </div>
              ))}
              
              {isEditing && (
                <button
                  onClick={addSocialLink}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  + Add Social Link
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;