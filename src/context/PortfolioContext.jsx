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

  // Add customization settings with enhanced layout options
  const [customization, setCustomization] = useState({
    colors: {
      primary: '#4F46E5', // Indigo 600 (default)
      primaryRgb: '79, 70, 229', // RGB values for transparency
      secondary: '#F9FAFB', // Gray 50
      text: '#1F2937', // Gray 800
      accent: '#7C3AED', // Violet 600
      accentRgb: '124, 58, 237', // RGB values for transparency
      background: '#FFFFFF' // White
    },
    fonts: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif'
    },
    layout: {
      contentWidth: 'max-w-6xl', // Default max width
      spacing: 'standard', // standard, compact, spacious
      sectionOrder: ['header', 'hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'certificates', 'organizations'],
      // Enhanced layout options for positioning elements
      sectionLayouts: {
        hero: {
          style: 'standard', // standard, centered, split
          imagePosition: 'right', // left, right
          alignment: 'left', // left, center, right
        },
        about: {
          style: 'standard', // standard, centered, split
          imagePosition: 'left', // left, right
        },
        skills: {
          columns: 3, // 2, 3, 4
          style: 'bars', // bars, tags, cards, list
        },
        projects: {
          columns: 3, // 2, 3, 4
          style: 'cards', // cards, list, masonry
        }
      }
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

  const updateSectionLayout = (sectionName, layoutUpdates) => {
    setCustomization(prev => ({
      ...prev,
      layout: {
        ...prev.layout,
        sectionLayouts: {
          ...prev.layout.sectionLayouts,
          [sectionName]: {
            ...prev.layout.sectionLayouts[sectionName],
            ...layoutUpdates
          }
        }
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
      updateSectionLayout,
      reorderSections
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};