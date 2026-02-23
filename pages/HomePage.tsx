import React from 'react';
import { ArrowRight, ArrowUpRight, Cpu, ScrollText, Users, Layers } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16 w-full min-h-screen flex flex-col">
      {/* Hero Section - Asymmetric Grid */}
      <section className="w-full border-b border-ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
          
          {/* Main Typographic Area */}
          <div className="lg:col-span-8 p-8 md:p-16 lg:p-24 flex flex-col justify-between border-r border-ink bg-paper relative overflow-hidden">
            
            {/* Background Texture Image */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1624377632657-3902bfd35958?q=80&w=2000&auto=format&fit=crop)' }}
            ></div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Cpu size={400} strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 border border-ink px-3 py-1 text-xs font-mono uppercase mb-6 bg-white/50 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Admissions Open: 2024-25</span>
              </div>

              <p className="font-mono text-sm md:text-base text-engineering-orange font-bold uppercase tracking-widest mb-4">
                Advanced VLSI Engineering & Research Institute
              </p>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-ink mb-8">
                Bridging Students <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink to-gray-600 italic">& Technology.</span>
              </h1>
            </div>
            
            <div className="max-w-xl relative z-10">
              <p className="font-mono text-sm md:text-base text-gray-600 mb-8 leading-relaxed text-justify bg-paper/80 md:bg-transparent">
                ProAyaanX is Hyderabad's premier institute for advanced technology and research. 
                We exist to close the gap between academic learning and industrial reality, offering comprehensive training in VLSI and specialized PhD thesis support.
                <br/><br/>
                // TRAIN . RESEARCH . PUBLISH
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('courses')}
                  className="group bg-ink text-white px-8 py-4 font-mono text-sm flex items-center justify-center hover:bg-engineering-orange transition-colors duration-300"
                >
                  Explore Curriculum
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
                <button 
                  onClick={() => onNavigate('research')}
                  className="group border border-ink px-8 py-4 font-mono text-sm flex items-center justify-center hover:bg-white transition-colors"
                >
                  PhD & Thesis Support
                  <ScrollText className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Statistics / Info */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex-1 bg-ink text-paper p-8 md:p-12 flex flex-col justify-center border-b border-gray-700 relative overflow-hidden">
              {/* Texture */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
              
              <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4 relative z-10">Our Impact</h3>
              <div className="space-y-8 relative z-10">
                <div>
                  <span className="text-5xl font-serif block mb-1">20+</span>
                  <span className="text-sm font-mono text-gray-400">Research Domains</span>
                </div>
                <div>
                  <span className="text-5xl font-serif block mb-1">100%</span>
                  <span className="text-sm font-mono text-gray-400">Thesis Completion Support</span>
                </div>
                <div>
                  <span className="text-5xl font-serif block mb-1">HYD</span>
                  <span className="text-sm font-mono text-gray-400">Based in Hyderabad</span>
                </div>
              </div>
            </div>
            <div 
              className="flex-1 bg-engineering-orange p-8 md:p-12 flex flex-col justify-center text-white relative group cursor-pointer overflow-hidden" 
              onClick={() => onNavigate('contact')}
            >
               <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <ArrowUpRight className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              <h3 className="font-serif text-3xl mb-2 relative z-10">Start Your Journey</h3>
              <p className="font-mono text-sm opacity-90 relative z-10">
                Join our next cohort or schedule a consultation for your PhD research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section - Text Heavy */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-b border-ink bg-[#e8e8e5]">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4 block">The Mission</span>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-12">
            "Connecting student potential with technological reality."
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-800 leading-relaxed mb-6 font-sans">
                The pace of technological advancement in Hyderabad and across the globe demands a new approach to education. 
                At ProAyaanX, we move beyond textbook theory.
              </p>
            </div>
            <div>
              <p className="text-gray-800 leading-relaxed mb-6 font-sans">
                Whether you are designing advanced VLSI circuits or drafting a complex PhD thesis in Cyber Security, 
                our institute provides the expert guidance and rigorous methodology required for success.
              </p>
              <a onClick={() => onNavigate('about')} className="inline-block border-b border-ink pb-1 font-mono text-sm cursor-pointer hover:text-engineering-orange hover:border-engineering-orange transition-colors">
                READ OUR PHILOSOPHY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Editorial List */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { icon: Layers, title: 'VLSI Training', desc: 'Comprehensive flows from RTL to GDSII. Master the tools that power the semiconductor industry.' },
            { icon: ScrollText, title: 'PhD Thesis Support', desc: 'End-to-end guidance for thesis writing in ECE, CSE, and emerging technologies.' },
            { icon: Users, title: 'Expert Mentorship', desc: 'Learn directly from industry professionals and seasoned researchers.' }
          ].map((item, idx) => (
            <div key={idx} className="p-12 border-b border-ink md:border-r md:border-b-0 last:border-r-0 group hover:bg-white transition-colors duration-300">
              <item.icon size={32} strokeWidth={1.5} className="mb-8 text-ink group-hover:text-engineering-orange transition-colors" />
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;