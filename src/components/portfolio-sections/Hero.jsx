import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Button from '../ui/Button';

const Hero = ({ isEditing = false }) => {
  const { portfolio, updateSection } = usePortfolio();
  const { headline, subheadline, image, cvLink, cvFile } = portfolio.hero;

  const handleChange = (e) => {
    if (!isEditing) return;
    
    const { name, value } = e.target;
    updateSection('hero', { [name]: value });
  };

  const handleImageChange = (e) => {
    if (!isEditing) return;
    
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      updateSection('hero', { image: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleCvFileChange = (e) => {
    if (!isEditing) return;
    
    const file = e.target.files[0];
    if (!file) return;
    
    // In a real app, you'd upload this file to storage
    // For now, just store the File object
    updateSection('hero', { cvFile: file });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                  <input
                    type="text"
                    name="headline"
                    value={headline}
                    onChange={handleChange}
                    placeholder="Your Headline"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subheadline</label>
                  <textarea
                    name="subheadline"
                    value={subheadline}
                    onChange={handleChange}
                    placeholder="Your Subheadline"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="3"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CV/Resume Link</label>
                  <input
                    type="text"
                    name="cvLink"
                    value={cvLink}
                    onChange={handleChange}
                    placeholder="Link to your CV/Resume"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Or Upload CV/Resume</label>
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    onChange={handleCvFileChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {headline || "Hello, I'm John Doe"}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {subheadline || "A passionate web developer creating amazing digital experiences"}
                </p>
                {(cvLink || cvFile) && (
                  <Button variant="primary">
                    Download CV
                  </Button>
                )}
              </>
            )}
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            {isEditing ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {image && (
                  <div className="mt-4">
                    <img 
                      src={image} 
                      alt="Preview" 
                      className="w-64 h-64 object-cover rounded-full mx-auto"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-center">
                {image ? (
                  <img 
                    src={image} 
                    alt="Profile" 
                    className="w-64 h-64 object-cover rounded-full"
                  />
                ) : (
                  <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;