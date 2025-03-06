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

  return (
    <PortfolioContext.Provider value={{
      portfolio,
      updateSection,
      selectTemplate,
      addItem,
      updateItem,
      removeItem
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};