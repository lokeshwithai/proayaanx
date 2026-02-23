import React, { useState } from 'react';
import { MOCK_PAPERS } from '../constants';
import { FileText, Search, Cpu, PenTool, Download, ChevronRight, BookOpen, Upload, CheckCircle } from 'lucide-react';
import { generateResearchContent } from '../services/geminiService';
import { ResearchToolMode } from '../types';

const ResearchPage: React.FC = () => {
  const [toolMode, setToolMode] = useState<ResearchToolMode>(ResearchToolMode.BRAINSTORM);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Submission Form State
  const [submission, setSubmission] = useState({
    title: '',
    author: '',
    domain: 'ECE',
    file: null as File | null
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setOutput('');
    const result = await generateResearchContent(toolMode, input);
    setOutput(result);
    setIsLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSubmission({ ...submission, file: e.target.files[0] });
    }
  };

  const handleThesisSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setSubmitStatus('success');
        // Reset after 5 seconds
        setTimeout(() => {
            setSubmitStatus('idle');
            setSubmission({ title: '', author: '', domain: 'ECE', file: null });
        }, 5000);
    }, 1000);
  };

  const thesisDomains = [
    { code: 'ECE', name: 'Electronics & Communication Engineering' },
    { code: 'CSE', name: 'Computer Science & Engineering' },
    { code: 'IP', name: 'Image Processing & Computer Vision' },
    { code: 'CS', name: 'Cyber Security & Network Defense' },
    { code: 'MANET', name: 'Mobile Adhoc Networks' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-paper w-full flex flex-col lg:flex-row">
      
      {/* Left Panel: Research Archive (Content) */}
      <div className="w-full lg:w-2/3 border-r border-ink min-h-screen">
        <div className="p-8 md:p-16 border-b border-ink bg-white">
          <div className="flex items-center mb-4 space-x-2">
            <div className="w-3 h-3 bg-engineering-orange rounded-full"></div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Publications & Thesis</span>
          </div>
          <h1 className="font-serif text-5xl mb-6">Research & Thesis Support</h1>
          <p className="font-sans text-gray-600 max-w-xl leading-relaxed">
             We offer comprehensive support for PhD candidates, including entire thesis writeups and technical paper publishing. 
             Our expertise bridges the gap between conceptual frameworks and published reality.
          </p>
          <div className="flex gap-4 mt-8">
             <button 
                onClick={() => document.getElementById('submission-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-ink text-white px-6 py-3 font-mono text-xs flex items-center hover:bg-engineering-orange transition-colors"
              >
                <Upload size={14} className="mr-2" />
                SUBMIT THESIS
              </button>
            <button 
              onClick={() => setShowModal(true)}
              className="border border-ink px-6 py-3 font-mono text-xs flex items-center hover:bg-gray-50 transition-colors"
            >
              <PenTool size={14} className="mr-2" />
              GENERAL INQUIRY
            </button>
          </div>
        </div>

        {/* PhD Support Section (Domains) */}
        <div className="p-8 md:p-12 border-b border-ink bg-[#f8f8f6]">
          <h3 className="font-serif text-3xl mb-8">Specialized Domains</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {thesisDomains.map((domain) => (
              <div key={domain.code} className="flex items-start p-4 border border-gray-300 bg-white hover:border-ink transition-colors">
                <BookOpen size={20} className="text-engineering-orange mr-4 mt-1" />
                <div>
                  <span className="font-mono text-xs font-bold block mb-1">{domain.code}</span>
                  <span className="font-serif text-lg">{domain.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NEW: Thesis Submission Portal */}
        <div id="submission-form" className="p-8 md:p-12 border-b border-ink bg-white relative overflow-hidden">
            {/* Texture/Decoration */}
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
               <Upload size={200} />
            </div>

            <div className="relative z-10">
                <div className="inline-block bg-black text-white px-2 py-1 font-mono text-[10px] uppercase mb-4">
                    Faculty Review Portal
                </div>
                <h3 className="font-serif text-3xl mb-4">Submit Full Thesis / Writeup</h3>
                <p className="font-sans text-gray-600 mb-8 max-w-2xl">
                    Securely upload your complete PhD thesis, research paper draft, or technical report. 
                    Our review committee typically responds within 48-72 hours.
                </p>

                {submitStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 p-8 flex flex-col items-center justify-center text-center animate-in fade-in">
                        <CheckCircle size={48} className="text-green-600 mb-4" />
                        <h4 className="font-serif text-2xl mb-2">Submission Received</h4>
                        <p className="font-mono text-sm text-gray-600">
                            Your document "{submission.title}" has been queued for review. <br/>
                            A confirmation email will be sent to the author.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleThesisSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="col-span-2 md:col-span-1 space-y-2">
                            <label className="block font-mono text-xs uppercase text-gray-500">Document Title</label>
                            <input 
                                type="text" 
                                required
                                value={submission.title}
                                onChange={(e) => setSubmission({...submission, title: e.target.value})}
                                placeholder="e.g. Optimized Routing in MANETs"
                                className="w-full border-b border-gray-300 py-2 bg-transparent font-serif text-lg focus:outline-none focus:border-ink placeholder-gray-300"
                            />
                        </div>

                        <div className="col-span-2 md:col-span-1 space-y-2">
                             <label className="block font-mono text-xs uppercase text-gray-500">Primary Author</label>
                            <input 
                                type="text" 
                                required
                                value={submission.author}
                                onChange={(e) => setSubmission({...submission, author: e.target.value})}
                                placeholder="Full Name"
                                className="w-full border-b border-gray-300 py-2 bg-transparent font-serif text-lg focus:outline-none focus:border-ink placeholder-gray-300"
                            />
                        </div>

                        <div className="col-span-2 md:col-span-1 space-y-2">
                             <label className="block font-mono text-xs uppercase text-gray-500">Specialization Domain</label>
                            <select 
                                value={submission.domain}
                                onChange={(e) => setSubmission({...submission, domain: e.target.value})}
                                className="w-full border-b border-gray-300 py-2 bg-transparent font-serif text-lg focus:outline-none focus:border-ink"
                            >
                                <option value="ECE">Electronics & Comm. (ECE)</option>
                                <option value="CSE">Computer Science (CSE)</option>
                                <option value="Image Processing">Image Processing</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="MANET">Mobile Adhoc Networks</option>
                            </select>
                        </div>

                        <div className="col-span-2 md:col-span-1 space-y-2">
                            <label className="block font-mono text-xs uppercase text-gray-500">Upload Document (PDF/DOCX)</label>
                            <div className="relative group">
                                <input 
                                    type="file" 
                                    id="file-upload" 
                                    className="hidden" 
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    required 
                                />
                                <label htmlFor="file-upload" className="flex items-center justify-between border-b border-gray-300 py-2 cursor-pointer group-hover:border-ink transition-colors">
                                    <span className={`font-serif text-lg truncate pr-4 ${submission.file ? 'text-ink' : 'text-gray-300'}`}>
                                        {submission.file ? submission.file.name : "Select File..."}
                                    </span>
                                    <div className="bg-gray-100 text-ink px-2 py-1 font-mono text-[10px] uppercase group-hover:bg-engineering-orange group-hover:text-white transition-colors">
                                        Browse
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="col-span-2 mt-4">
                            <button 
                                type="submit" 
                                className="bg-engineering-orange text-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors shadow-sharp hover:shadow-sharp-hover transform hover:-translate-y-1 duration-200"
                            >
                                Upload Submission
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>

        {/* Paper List */}
        <div>
           <div className="px-8 md:px-12 py-6 border-b border-gray-200">
             <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500">Recent Institute Publications</h3>
           </div>
          {MOCK_PAPERS.map((paper) => (
            <div key={paper.id} className="p-8 md:p-12 border-b border-gray-300 hover:bg-[#fdfdfd] transition-colors group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <span className="font-mono text-xs text-engineering-orange uppercase mb-2 md:mb-0">{paper.category}</span>
                <span className="font-mono text-xs text-gray-400">{paper.publicationDate}</span>
              </div>
              <h3 className="font-serif text-2xl mb-3 group-hover:underline decoration-1 underline-offset-4 cursor-pointer">
                {paper.title}
              </h3>
              <p className="font-mono text-xs text-gray-500 mb-4 uppercase tracking-wide">
                {paper.authors.join('  /  ')}
              </p>
              <p className="font-sans text-sm text-gray-700 leading-relaxed mb-6 max-w-3xl">
                {paper.abstract}
              </p>
              <div className="flex items-center space-x-6">
                 <button className="flex items-center font-mono text-xs font-bold hover:text-engineering-orange transition-colors">
                    <Download size={14} className="mr-2" /> PDF
                 </button>
                 <button className="flex items-center font-mono text-xs font-bold hover:text-engineering-orange transition-colors">
                    CITE
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel: Research Assistant Tool (Functional) */}
      <div className="w-full lg:w-1/3 bg-[#f0f0ed] flex flex-col h-auto lg:h-screen lg:sticky lg:top-16 overflow-y-auto">
        <div className="p-8 border-b border-gray-300">
          <div className="flex items-center space-x-2 mb-2">
            <Cpu size={18} className="text-engineering-orange" />
            <h2 className="font-mono text-sm font-bold uppercase">AI Research Assistant</h2>
          </div>
          <p className="text-xs text-gray-500 font-mono">Powered by Gemini 2.5 Flash</p>
        </div>

        <div className="p-8 flex-grow flex flex-col">
          {/* Tool Selector */}
          <div className="grid grid-cols-3 gap-1px bg-gray-300 border border-gray-300 mb-6">
            {[ResearchToolMode.BRAINSTORM, ResearchToolMode.SUMMARIZE, ResearchToolMode.PROOFREAD].map((mode) => (
              <button
                key={mode}
                onClick={() => setToolMode(mode)}
                className={`py-3 px-1 text-[10px] font-mono uppercase tracking-tighter ${
                  toolMode === mode ? 'bg-white text-ink font-bold shadow-inner' : 'bg-[#e5e5e5] text-gray-500 hover:bg-gray-200'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="block font-mono text-xs uppercase mb-2 text-gray-600">
              {toolMode === ResearchToolMode.BRAINSTORM ? 'Research Topic' : 'Input Text'}
            </label>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-32 bg-white border border-gray-300 p-4 font-mono text-xs focus:outline-none focus:border-ink resize-none placeholder-gray-300"
              placeholder={toolMode === ResearchToolMode.BRAINSTORM ? "e.g. Image Processing Algorithms..." : "Paste abstract here..."}
            />
          </div>

          <button 
            onClick={handleGenerate}
            disabled={isLoading || !input}
            className="w-full bg-ink text-white py-3 font-mono text-xs hover:bg-gray-800 disabled:bg-gray-400 transition-colors mb-8 flex justify-center items-center"
          >
            {isLoading ? 'PROCESSING DATA...' : 'EXECUTE'}
            {!isLoading && <ChevronRight size={14} className="ml-2" />}
          </button>

          {output && (
            <div className="flex-grow border-t border-gray-300 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <span className="block font-mono text-[10px] uppercase text-gray-400 mb-2">Output Stream</span>
               <div className="font-mono text-xs leading-relaxed text-gray-800 whitespace-pre-line">
                 {output}
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-paper w-full max-w-md border border-ink shadow-sharp p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-xl">General Inquiry</h3>
              <button onClick={() => setShowModal(false)}><span className="font-mono text-xl">✕</span></button>
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowModal(false); alert("Inquiry Received. Our Research Team will contact you."); }}>
              <input type="text" placeholder="Full Name" className="w-full bg-white border border-gray-300 p-3 font-mono text-xs focus:border-ink focus:outline-none" required />
              <input type="email" placeholder="Email Address" className="w-full bg-white border border-gray-300 p-3 font-mono text-xs focus:border-ink focus:outline-none" required />
              
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-gray-500">Domain Interest</label>
                <select className="w-full bg-white border border-gray-300 p-3 font-mono text-xs focus:border-ink focus:outline-none">
                  <option>ECE (Electronics & Comm.)</option>
                  <option>CSE (Computer Science)</option>
                  <option>Image Processing</option>
                  <option>Cyber Security</option>
                  <option>MANETs</option>
                  <option>VLSI Design</option>
                </select>
              </div>

              <textarea placeholder="Briefly describe your thesis requirements..." className="w-full bg-white border border-gray-300 p-3 font-mono text-xs focus:border-ink focus:outline-none h-24 resize-none"></textarea>

              <button type="submit" className="w-full bg-engineering-orange text-white py-3 font-mono text-xs font-bold hover:bg-orange-700 transition-colors">
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchPage;