import React from 'react';
import { FACULTY } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-paper w-full">
      
      {/* Header Text */}
      <div className="px-6 md:px-12 py-24 border-b border-ink">
        <h1 className="font-serif text-6xl md:text-8xl mb-8">The Institute</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="font-sans text-lg leading-relaxed">
            Established to counteract the growing disconnect between academic theory and industrial reality, 
            ProAyaanX operates on a single principle: <strong className="font-serif font-normal">Bridging the gap between Student & Technology.</strong>
          </p>
          <div className="font-mono text-sm text-gray-600 space-y-4">
            <p>LOCATION: HYDERABAD, INDIA</p>
            <p>FOUNDED: 2024</p>
            <p>FOCUS: VLSI TRAINING & PHD RESEARCH</p>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="border-b border-ink">
        <div className="px-6 md:px-12 py-4 border-b border-gray-300">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500">The Faculty</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          {FACULTY.map((person, idx) => (
            <div key={person.id} className={`
              p-8 border-b border-ink md:border-b-0 
              ${idx !== FACULTY.length - 1 ? 'md:border-r' : ''} 
              border-gray-300 hover:bg-white transition-colors
            `}>
              <div className="mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                <img src={person.image} alt={person.name} className="w-full h-64 object-cover object-top border border-gray-200" />
              </div>
              <h3 className="font-serif text-2xl mb-1">{person.name}</h3>
              <p className="font-mono text-xs text-engineering-orange uppercase mb-4">{person.role}</p>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* History / Timeline */}
      <div className="px-6 md:px-12 py-24 bg-ink text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl mb-12">Our Trajectory</h2>
          <div className="space-y-12 border-l border-gray-700 pl-8 md:pl-12 relative">
            {[
              { year: '2024', title: 'Establishment', desc: 'ProAyaanX founded in Hyderabad to bridge the gap between students and cutting-edge technology.' },
              { year: '2024', title: 'Research Wing', desc: 'Launch of dedicated PhD thesis support for ECE, CSE, and emerging tech domains.' },
              { year: 'Future', title: 'Global Expansion', desc: 'Aiming to become the premier research institute in South India.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 bg-engineering-orange rounded-none"></span>
                <span className="font-mono text-xl md:text-2xl block mb-2 text-gray-400">{item.year}</span>
                <h4 className="font-serif text-2xl mb-2">{item.title}</h4>
                <p className="font-sans text-gray-400 max-w-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;