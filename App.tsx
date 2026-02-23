import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  // Simple client-side routing using state
  // In a larger app, we would use react-router-dom, but Hash routing works well here
  // to comply with single page app requirements without server config.
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage />;
      case 'research':
        return <ResearchPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;