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
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load portfolio');
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

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

  if (!portfolio) {
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
    <div className="min-h-screen bg-white">
      {/* In a real implementation, you would use the portfolio data to render each component */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certificates />
      <Organizations />
      
      <div className="py-6 text-center text-sm text-gray-500 border-t">
        <p>Built with <a href="/" className="text-indigo-600 hover:underline">PortfolioBuild</a></p>
      </div>
    </div>
  );
};

export default Published;