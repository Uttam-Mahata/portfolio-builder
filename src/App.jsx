import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import Home from './pages/Home';
import TemplateSelection from './pages/TemplateSelection';
import Editor from './pages/Editor';
import Preview from './pages/Preview';
import Published from './pages/Published';

const App = () => {
  return (
    <PortfolioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<TemplateSelection />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/p/:portfolioId" element={<Published />} />
        </Routes>
      </Router>
    </PortfolioProvider>
  );
};

export default App;