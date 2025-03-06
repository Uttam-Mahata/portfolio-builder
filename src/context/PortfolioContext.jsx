import React, { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState({
    templateId: '',
    header: {
      name: '',
      title: '',
      navLinks: [],
      socialLinks: []
    },
    hero: {
      headline: '',
      subheadline: '',
      image: '',
      cvLink: '',
      cvFile: null
    },
    about: {
      content: '',
      image: ''
    },
    skills: [],
    experience: [],
    projects: [],
    achievements: [],
    certificates: [],
    organizations: []
  });

  // Add customization settings
  const [customization, setCustomization] = useState({
    colors: {
      primary: '#4F46E5', // Indigo 600 (default)
      secondary: '#F9FAFB', // Gray 50
      text: '#1F2937', // Gray 800
      accent: '#7C3AED', // Violet 600
      background: '#FFFFFF' // White
    },
    fonts: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif'
    },
    layout: {
      contentWidth: 'max-w-6xl', // Default max width
      spacing: 'standard', // standard, compact, spacious
      sectionOrder: ['header', 'hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'certificates', 'organizations']
    }
  });

  const updateSection = (sectionName, data) => {
    setPortfolio(prev => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        ...data
      }
    }));
  };

  const selectTemplate = (templateId) => {
    setPortfolio(prev => ({
      ...prev,
      templateId
    }));
  };

  const addItem = (section, item) => {
    setPortfolio(prev => ({
      ...prev,
      [section]: [...prev[section], item]
    }));
  };

  const updateItem = (section, index, item) => {
    setPortfolio(prev => {
      const updatedSection = [...prev[section]];
      updatedSection[index] = item;
      return {
        ...prev,
        [section]: updatedSection
      };
    });
  };

  const removeItem = (section, index) => {
    setPortfolio(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  // Add customization methods
  const updateColors = (colorUpdates) => {
    setCustomization(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        ...colorUpdates
      }
    }));
  };

  const updateFonts = (fontUpdates) => {
    setCustomization(prev => ({
      ...prev,
      fonts: {
        ...prev.fonts,
        ...fontUpdates
      }
    }));
  };

  const updateLayout = (layoutUpdates) => {
    setCustomization(prev => ({
      ...prev,
      layout: {
        ...prev.layout,
        ...layoutUpdates
      }
    }));
  };

  const reorderSections = (newOrder) => {
    setCustomization(prev => ({
      ...prev,
      layout: {
        ...prev.layout,
        sectionOrder: newOrder
      }
    }));
  };

  return (
    <PortfolioContext.Provider value={{
      portfolio,
      customization,
      updateSection,
      selectTemplate,
      addItem,
      updateItem,
      removeItem,
      updateColors,
      updateFonts,
      updateLayout,
      reorderSections
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};