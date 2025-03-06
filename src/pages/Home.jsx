import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Your Professional Portfolio in Minutes</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Create, customize, and publish your professional portfolio with our easy-to-use portfolio builder.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/templates">
                <Button size="lg" variant="primary" className="bg-white text-indigo-700 hover:bg-gray-100">
                  Choose a Template
                </Button>
              </Link>
              <Link to="/editor">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-700">
                  Start from Scratch
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Choose a Template</h3>
                <p className="text-gray-600">
                  Select from our professionally designed templates or start from scratch.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customize Content</h3>
                <p className="text-gray-600">
                  Add your information, projects, skills, and achievements with our user-friendly editor.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Publish & Share</h3>
                <p className="text-gray-600">
                  Publish your portfolio and share it with recruiters, clients, or on social media.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Featured Templates</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Choose from our professionally designed templates to showcase your skills and experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Template 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 bg-gray-200 relative">
                  <img 
                    src="https://via.placeholder.com/400x250?text=Modern+Template" 
                    alt="Modern Template" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link to="/templates">
                      <Button variant="primary">Select Template</Button>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Modern</h3>
                  <p className="text-gray-600 text-sm">Clean, professional design for developers.</p>
                </div>
              </div>
              
              {/* Template 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 bg-gray-200 relative">
                  <img 
                    src="https://via.placeholder.com/400x250?text=Creative+Template" 
                    alt="Creative Template" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link to="/templates">
                      <Button variant="primary">Select Template</Button>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Creative</h3>
                  <p className="text-gray-600 text-sm">Bold design for designers and creatives.</p>
                </div>
              </div>
              
              {/* Template 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 bg-gray-200 relative">
                  <img 
                    src="https://via.placeholder.com/400x250?text=Minimalist+Template" 
                    alt="Minimalist Template" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link to="/templates">
                      <Button variant="primary">Select Template</Button>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Minimalist</h3>
                  <p className="text-gray-600 text-sm">Simple, elegant design for any profession.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/templates">
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  View All Templates
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-indigo-600 rounded-lg p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your Portfolio?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Create your professional online presence today with our easy-to-use portfolio builder.
              </p>
              <Link to="/templates">
                <Button size="lg" variant="primary" className="bg-white text-indigo-700 hover:bg-gray-100">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;