import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

const CustomizationPreview = () => {
  const { customization } = usePortfolio();
  const { colors, fonts } = customization;

  const previewStyles = {
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: fonts.body,
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '1rem'
  };

  const headingStyles = {
    fontFamily: fonts.heading,
    color: colors.text
  };

  const primaryBtnStyles = {
    backgroundColor: colors.primary,
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer'
  };

  const accentBtnStyles = {
    backgroundColor: colors.accent,
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    border: 'none',
    marginLeft: '0.5rem',
    cursor: 'pointer'
  };

  const sectionStyles = {
    backgroundColor: colors.secondary,
    padding: '1rem',
    marginTop: '1rem',
    borderRadius: '0.25rem'
  };

  return (
    <div style={previewStyles}>
      <h3 style={headingStyles} className="text-xl font-bold mb-4">Preview</h3>
      
      <p className="mb-4">
        This is how your portfolio will look with the current customization settings.
        Text will appear in your chosen body font, while headings will use your heading font.
      </p>
      
      <div className="flex mb-4">
        <button style={primaryBtnStyles}>Primary Button</button>
        <button style={accentBtnStyles}>Accent Button</button>
      </div>
      
      <div style={sectionStyles}>
        <h4 style={headingStyles} className="text-lg font-semibold mb-2">Section Example</h4>
        <p>This shows how alternate sections will look with your secondary background color.</p>
      </div>
    </div>
  );
};

export default CustomizationPreview;