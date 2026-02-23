import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-ink py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        
        <div className="mb-8 md:mb-0">
          <h2 className="font-serif text-2xl font-bold text-ink mb-2">ProAyaanX</h2>
          <p className="font-mono text-xs text-gray-500 max-w-xs">
            &copy; {new Date().getFullYear()} ProAyaanX VLSI Institute.<br/>
            All systems nominal.
          </p>
        </div>

        <div className="flex items-center space-x-8">
          <a href="#" className="text-ink hover:text-engineering-orange transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-ink hover:text-engineering-orange transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-ink hover:text-engineering-orange transition-colors"><Github size={20} /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;