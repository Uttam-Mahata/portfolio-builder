import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  Dribbble, 
  Codepen, 
  Globe,
  Mail
} from 'lucide-react';

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

  const removeSocialLink = (index) => {
    if (!isEditing) return;
    
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    updateSection('header', { socialLinks: updatedLinks });
  };

  // Social platform icons mapping
  const socialIcons = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
    instagram: <Instagram size={20} />,
    facebook: <Facebook size={20} />,
    youtube: <Youtube size={20} />,
    dribbble: <Dribbble size={20} />,
    codepen: <Codepen size={20} />,
    website: <Globe size={20} />,
    email: <Mail size={20} />,
    default: <Globe size={20} />
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
            <div className="flex flex-wrap gap-4">
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
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="youtube">YouTube</option>
                        <option value="dribbble">Dribbble</option>
                        <option value="codepen">CodePen</option>
                        <option value="website">Website</option>
                        <option value="email">Email</option>
                      </select>
                      <input
                        type="text"
                        value={link.url}
                        onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                        placeholder="URL"
                        className="px-2 py-1 border rounded"
                      />
                      <button
                        onClick={() => removeSocialLink(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                      aria-label={link.platform}
                      title={link.platform}
                    >
                      {socialIcons[link.platform] || socialIcons.default}
                    </a>
                  )}
                </div>
              ))}
              
              {isEditing && (
                <button
                  onClick={addSocialLink}
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add Social Link
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