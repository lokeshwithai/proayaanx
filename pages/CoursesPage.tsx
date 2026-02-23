import React from 'react';
import { COURSES } from '../constants';
import { ArrowRight } from 'lucide-react';

const CoursesPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-paper w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        
        <div className="mb-16 border-b border-ink pb-8">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Curriculum</h1>
          <p className="font-mono text-sm md:text-base max-w-2xl text-gray-600">
            Rigorous, project-based modules designed for the modern semiconductor landscape. 
            Select a specialization to view the detailed syllabus.
          </p>
        </div>

        <div className="flex flex-col">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b-2 border-ink font-mono text-xs uppercase tracking-widest text-gray-500">
            <div className="col-span-1">ID</div>
            <div className="col-span-5">Course Name</div>
            <div className="col-span-2">Duration</div>
            <div className="col-span-3">Focus Areas</div>
            <div className="col-span-1 text-right">Action</div>
          </div>

          {/* Course Rows */}
          {COURSES.map((course, index) => (
            <div key={course.id} className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 py-8 md:py-6 border-b border-gray-300 hover:bg-white transition-colors items-center relative">
              
              {/* Mobile Layout Wrapper */}
              <div className="col-span-1 font-mono text-sm text-gray-400 flex items-center">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="col-span-12 md:col-span-5 flex items-center space-x-6">
                {/* Thumbnail Image - Visible on Desktop */}
                <div className="hidden md:block w-16 h-16 overflow-hidden border border-gray-200 group-hover:border-ink transition-colors">
                   <img src={course.image} alt={course.title} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl md:text-xl text-ink group-hover:text-engineering-orange transition-colors cursor-pointer">
                    {course.title}
                  </h3>
                  {/* Mobile Description */}
                  <p className="md:hidden mt-2 text-sm text-gray-600 line-clamp-2">{course.description}</p>
                </div>
              </div>

              <div className="col-span-6 md:col-span-2 font-mono text-sm">
                <span className="md:hidden text-gray-400 text-xs uppercase mr-2">Duration:</span>
                {course.duration}
              </div>

              <div className="col-span-12 md:col-span-3 flex flex-wrap gap-2">
                {course.topics.slice(0, 3).map((topic, i) => (
                  <span key={i} className="px-2 py-1 border border-gray-300 text-[10px] font-mono uppercase tracking-wide text-gray-600 bg-paper/50">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="col-span-6 md:col-span-1 flex justify-end">
                <button className="opacity-100 md:opacity-0 group-hover:opacity-100 flex items-center text-sm font-bold uppercase tracking-wider hover:text-engineering-orange transition-all">
                   <ArrowRight size={20} />
                </button>
              </div>
              
              {/* Mobile Image (full width bottom) */}
              <div className="md:hidden col-span-12 mt-2">
                 <img src={course.image} alt={course.title} referrerPolicy="no-referrer" className="w-full h-48 object-cover border border-gray-200 grayscale" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-ink text-white">
          <h3 className="font-serif text-2xl mb-4">Custom Corporate Training?</h3>
          <p className="font-mono text-sm text-gray-400 mb-6 max-w-2xl">
            We offer bespoke VLSI training modules for corporate teams, focused on specific PDKs or methodologies (UVM, Low Power, DFT).
          </p>
          <button className="border border-white px-6 py-3 font-mono text-xs hover:bg-white hover:text-ink transition-colors">
            CONTACT CORPORATE RELATIONS
          </button>
        </div>

      </div>
    </div>
  );
};

export default CoursesPage;