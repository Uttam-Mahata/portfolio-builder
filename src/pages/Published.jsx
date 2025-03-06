import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/portfolio-sections/Header';
import Hero from '../components/portfolio-sections/Hero';
import About from '../components/portfolio-sections/About';
import Skills from '../components/portfolio-sections/Skills';
import Experience from '../components/portfolio-sections/Experience';
import Projects from '../components/portfolio-sections/Projects';
import Achievements from '../components/portfolio-sections/Achievements';
import Certificates from '../components/portfolio-sections/Certificates';
import Organizations from '../components/portfolio-sections/Organizations';

const Published = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [customization, setCustomization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real implementation, you'd fetch the portfolio data from a backend
    // For now, we'll simulate a delay and then show a mock portfolio
    setLoading(true);
    
    const fetchPortfolio = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - in a real app, this would come from your API
        setPortfolio({
          templateId: 'modern',
          header: {
            name: 'John Doe',
            title: 'Full-Stack Developer',
            navLinks: [],
            socialLinks: [
              { platform: 'github', url: 'https://github.com/johndoe' },
              { platform: 'linkedin', url: 'https://linkedin.com/in/johndoe' }
            ]
          },
          hero: {
            headline: "Hello, I'm John Doe",
            subheadline: 'A passionate developer with expertise in building web applications',
            image: 'https://via.placeholder.com/300x300',
            cvLink: 'https://example.com/cv.pdf'
          },
          // ... other sections would be populated in a real app
        });

        setCustomization({
          colors: {
            primary: '#4F46E5',
            secondary: '#F9FAFB',
            text: '#1F2937',
            accent: '#7C3AED',
            background: '#FFFFFF'
          },
          fonts: {
            heading: 'Montserrat, sans-serif',
            body: 'Open Sans, sans-serif'
          },
          layout: {
            contentWidth: 'max-w-6xl',
            spacing: 'standard',
            sectionOrder: ['header', 'hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'certificates', 'organizations']
          }
        });
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load portfolio');
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

  // Apply custom styles
  const applyCustomStyles = () => {
    if (!customization) return null;

    const { colors, fonts, layout } = customization;

    // Convert spacing setting to actual CSS values
    const getSpacingValue = () => {
      switch (layout.spacing) {
        case 'compact': return '2rem';
        case 'spacious': return '6rem';
        case 'standard':
        default: return '4rem';
      }
    };

    const styles = `
      :root {
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-text: ${colors.text};
        --color-accent: ${colors.accent};
        --color-background: ${colors.background};
        --font-heading: ${fonts.heading};
        --font-body: ${fonts.body};
        --content-width: ${layout.contentWidth};
        --section-spacing: ${getSpacingValue()};
      }

      body {
        color: var(--color-text);
        background-color: var(--color-background);
        font-family: var(--font-body);
        margin: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
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

      @media (min-width: 768px) {
        .content-container {
          max-width: var(--content-width);
        }
      }
    `;

    return <style>{styles}</style>;
  };

  // Get sections based on customized order
  const renderSections = () => {
    if (!customization || !portfolio) return null;

    const sectionComponents = {
      header: <Header key="header" />,
      hero: <Hero key="hero" />,
      about: <About key="about" className="section" />,
      skills: <Skills key="skills" className="section" />,
      experience: <Experience key="experience" className="section" />,
      projects: <Projects key="projects" className="section" />,
      achievements: <Achievements key="achievements" className="section" />,
      certificates: <Certificates key="certificates" className="section" />,
      organizations: <Organizations key="organizations" className="section" />
    };

    return customization.layout.sectionOrder.map(sectionId => sectionComponents[sectionId]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
            <p>{error}</p>
          </div>
          <p>The portfolio you're looking for might have been removed or is unavailable.</p>
        </div>
      </div>
    );
  }

  if (!portfolio || !customization) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="bg-yellow-100 text-yellow-700 p-4 rounded-lg mb-4">
            <p>Portfolio not found</p>
          </div>
          <p>The portfolio you're looking for might have been removed or is unavailable.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {applyCustomStyles()}
      <div className="published-portfolio">
        {renderSections()}
        
        <div className="py-6 text-center text-sm text-gray-500 border-t">
          <p>Built with <a href="/" className="text-primary hover:underline">PortfolioBuild</a></p>
        </div>
      </div>
    </div>
  );
};

export default Published;