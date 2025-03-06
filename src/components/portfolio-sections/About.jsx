import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

const About = ({ isEditing = false }) => {
  const { portfolio, updateSection } = usePortfolio();
  const { content, image } = portfolio.about;

  const handleContentChange = (e) => {
    if (!isEditing) return;
    updateSection('about', { content: e.target.value });
  };

  const handleImageChange = (e) => {
    if (!isEditing) return;
    
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      updateSection('about', { image: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          {(image || isEditing) && (
            <div className="md:w-1/3 mb-6 md:mb-0">
              {isEditing ? (
                <div>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    className="mb-2"
                  />
                  {image && (
                    <img 
                      src={image} 
                      alt="About me" 
                      className="rounded-lg shadow-lg"
                    />
                  )}
                </div>
              ) : (
                <img 
                  src={image} 
                  alt="About me" 
                  className="rounded-lg shadow-lg"
                />
              )}
            </div>
          )}
          
          <div className={`${image || isEditing ? 'md:w-2/3 md:pl-10' : 'w-full'}`}>
            {isEditing ? (
              <textarea
                value={content}
                onChange={handleContentChange}
                placeholder="Write something about yourself..."
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="8"
              />
            ) : (
              <div className="prose max-w-none">
                <p>{content || "Tell your story here. What drives you? What are your values? What makes you unique?"}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;