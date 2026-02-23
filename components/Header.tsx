import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Index' },
    { id: 'about', label: 'The Institute' },
    { id: 'courses', label: 'Curriculum' },
    { id: 'research', label: 'Research & Thesis' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-ink h-16 flex items-center justify-between px-6 md:px-12">
        {/* Logo Area - Pure Typography */}
        <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
          <span className="font-serif font-bold text-xl tracking-tight text-ink uppercase group-hover:text-engineering-orange transition-colors">ProAyaanX</span>
          <span className="hidden md:inline-block ml-3 text-[10px] font-mono bg-ink text-white px-1 py-0.5">EST. 2024</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium tracking-wide uppercase relative group ${
                currentPage === item.id ? 'text-engineering-orange' : 'text-ink hover:text-gray-600'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-5 left-0 w-full h-[2px] bg-engineering-orange transform transition-transform duration-300 ${
                currentPage === item.id ? 'scale-x-100' : 'scale-x-0'
              }`}></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-paper pt-20 px-6 md:hidden border-b border-ink">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-between text-2xl font-serif text-ink border-b border-subtle-gray pb-4"
              >
                <span>{item.label}</span>
                <ArrowRight className="opacity-50" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;