import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Button from '../ui/Button';
import { Upload, Download } from 'lucide-react';

const Hero = ({ isEditing = false }) => {
  const { portfolio, updateSection, customization } = usePortfolio();
  const { headline, subheadline, image, cvLink, cvFile } = portfolio.hero;
  const { sectionLayouts } = customization.layout;
  const { style, imagePosition, alignment } = sectionLayouts.hero;

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

  // Helper function to get alignment class based on the alignment option
  const getAlignmentClass = () => {
    switch(alignment) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
    }
  };

  // Layout for centered style
  if (style === 'centered') {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Image at the top for centered style */}
            {(image || isEditing) && (
              <div className="mb-8">
                {isEditing ? (
                  <div className="flex flex-col items-center">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="mb-2"
                    />
                    {image && (
                      <img 
                        src={image} 
                        alt="Profile" 
                        className="w-64 h-64 object-cover rounded-full"
                      />
                    )}
                  </div>
                ) : (
                  <img 
                    src={image} 
                    alt="Profile" 
                    className="w-64 h-64 object-cover rounded-full"
                  />
                )}
              </div>
            )}
            
            {/* Text content */}
            <div className="text-center max-w-2xl mx-auto">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="headline"
                    value={headline}
                    onChange={handleChange}
                    placeholder="Your Headline"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
                  />
                  <textarea
                    name="subheadline"
                    value={subheadline}
                    onChange={handleChange}
                    placeholder="Your Subheadline"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
                    rows="3"
                  />
                </div>
              ) : (
                <>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {headline || "Hello, I'm John Doe"}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {subheadline || "A passionate web developer creating amazing digital experiences"}
                  </p>
                </>
              )}
              
              {/* CV/Resume upload or download */}
              {isEditing ? (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">CV/Resume Link</label>
                  <input
                    type="text"
                    name="cvLink"
                    value={cvLink}
                    onChange={handleChange}
                    placeholder="Link to your CV/Resume"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
                  />
                  
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Or Upload CV/Resume</label>
                    <div className="flex justify-center">
                      <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                        <Upload size={16} className="mr-2" />
                        Upload File
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx" 
                          onChange={handleCvFileChange}
                          className="sr-only"
                        />
                      </label>
                    </div>
                    {cvFile && (
                      <p className="mt-2 text-sm text-gray-500 text-center">
                        Selected file: {cvFile.name}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {(cvLink || cvFile) && (
                    <div className="flex justify-center">
                      <Button variant="primary" className="flex items-center">
                        <Download size={16} className="mr-2" />
                        Download CV
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Layout for split style
  if (style === 'split') {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col md:flex-row items-center ${
            imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}>
            {/* Text content */}
            <div className={`md:w-1/2 mb-8 md:mb-0 ${getAlignmentClass()}`}>
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="headline"
                    value={headline}
                    onChange={handleChange}
                    placeholder="Your Headline"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      alignment === 'center' ? 'text-center' : 
                      alignment === 'right' ? 'text-right' : 'text-left'
                    }`}
                  />
                  <textarea
                    name="subheadline"
                    value={subheadline}
                    onChange={handleChange}
                    placeholder="Your Subheadline"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      alignment === 'center' ? 'text-center' : 
                      alignment === 'right' ? 'text-right' : 'text-left'
                    }`}
                    rows="3"
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CV/Resume Link</label>
                    <input
                      type="text"
                      name="cvLink"
                      value={cvLink}
                      onChange={handleChange}
                      placeholder="Link to your CV/Resume"
                      className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        alignment === 'center' ? 'text-center' : 
                        alignment === 'right' ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Or Upload CV/Resume</label>
                    <label className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                      <Upload size={16} className="mr-2" />
                      Upload File
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        onChange={handleCvFileChange}
                        className="sr-only"
                      />
                    </label>
                    {cvFile && (
                      <p className="mt-2 text-sm text-gray-500">
                        Selected file: {cvFile.name}
                      </p>
                    )}
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
                    <Button variant="primary" className="flex items-center">
                      <Download size={16} className="mr-2" />
                      Download CV
                    </Button>
                  )}
                </>
              )}
            </div>
            
            {/* Image */}
            <div className="md:w-1/2 md:pl-10">
              {isEditing ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    className="w-full"
                  />
                  {image && (
                    <div className="mt-4 flex justify-center">
                      <img 
                        src={image} 
                        alt="Preview" 
                        className="w-full max-w-md object-cover rounded-lg"
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
                      className="w-full max-w-md object-cover rounded-lg shadow-lg"
                    />
                  ) : (
                    <div className="w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center">
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
  }

  // Default layout (standard)
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-center ${
          imagePosition === 'right' ? '' : 'md:flex-row-reverse'
        }`}>
          <div className={`md:w-1/2 mb-8 md:mb-0 ${
            imagePosition === 'right' ? 'md:pr-10' : 'md:pl-10'
          } ${getAlignmentClass()}`}>
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
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      alignment === 'center' ? 'text-center' : 
                      alignment === 'right' ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subheadline</label>
                  <textarea
                    name="subheadline"
                    value={subheadline}
                    onChange={handleChange}
                    placeholder="Your Subheadline"
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      alignment === 'center' ? 'text-center' : 
                      alignment === 'right' ? 'text-right' : 'text-left'
                    }`}
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
                    className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      alignment === 'center' ? 'text-center' : 
                      alignment === 'right' ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Or Upload CV/Resume</label>
                  <label className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer w-fit">
                    <Upload size={16} className="mr-2" />
                    Upload File
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleCvFileChange}
                      className="sr-only"
                    />
                  </label>
                  {cvFile && (
                    <p className="mt-2 text-sm text-gray-500">
                      Selected file: {cvFile.name}
                    </p>
                  )}
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
                  <Button variant="primary" className="flex items-center">
                    <Download size={16} className="mr-2" />
                    Download CV
                  </Button>
                )}
              </>
            )}
          </div>
          
          <div className="md:w-1/2">
            {isEditing ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  className="w-full"
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