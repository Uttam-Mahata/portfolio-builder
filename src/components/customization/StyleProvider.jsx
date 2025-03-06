import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

// This component provides CSS custom properties based on the current customization
const StyleProvider = ({ children }) => {
  const { customization } = usePortfolio();
  const { colors, fonts, layout } = customization;

  // Convert spacing setting to actual CSS values
  const getSpacingValue = () => {
    switch (layout.spacing) {
      case 'compact':
        return '2rem';
      case 'spacious':
        return '6rem';
      case 'standard':
      default:
        return '4rem';
    }
  };

  // Create a style object with CSS custom properties (variables)
  const customStyles = {
    '--color-primary': colors.primary,
    '--color-secondary': colors.secondary,
    '--color-text': colors.text,
    '--color-accent': colors.accent,
    '--color-background': colors.background,
    '--font-heading': fonts.heading,
    '--font-body': fonts.body,
    '--content-width': layout.contentWidth,
    '--section-spacing': getSpacingValue(),
  };

  return (
    <div style={customStyles} className="style-provider">
      {/* Add Google Fonts links based on selected fonts */}
      <style jsx global>{`
        /* Apply custom properties to global elements */
        body {
          color: var(--color-text);
          background-color: var(--color-background);
          font-family: var(--font-body);
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-heading);
        }

        .btn-primary {
          background-color: var(--color-primary);
          color: white;
        }

        .btn-accent {
          background-color: var(--color-accent);
          color: white;
        }

        .section {
          padding-top: var(--section-spacing);
          padding-bottom: var(--section-spacing);
        }

        .section:nth-child(even) {
          background-color: var(--color-secondary);
        }

        .content-container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }

        /* Responsive classes for content width */
        @media (min-width: 768px) {
          .content-container {
            max-width: var(--content-width);
          }
        }
      `}</style>

      {children}
    </div>
  );
};

export default StyleProvider;