import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const purpose = formData.get('purpose');
    const message = formData.get('message');

    const subject = `Inquiry: ${purpose} - ${fullName}`;
    const body = `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:hello@proayaanx.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-16 min-h-screen bg-paper w-full grid grid-cols-1 md:grid-cols-2">
      
      {/* Left: Info */}
      <div className="p-8 md:p-24 border-b md:border-b-0 md:border-r border-ink flex flex-col justify-between">
        <div>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">Inquire</h1>
          <p className="font-sans text-lg text-gray-700 max-w-md leading-relaxed mb-12">
            Whether you are a prospective student, a PhD candidate, or an industry recruiter, we are open to dialogue.
          </p>
        </div>
        
        <div className="space-y-8 font-mono text-sm">
          <div>
            <span className="block text-gray-400 text-xs uppercase mb-1">Address</span>
            <p>Hyderabad</p>
          </div>
          <div>
            <span className="block text-gray-400 text-xs uppercase mb-1">Email</span>
            <p className="text-engineering-orange hover:underline cursor-pointer">hello@proayaanx.com</p>
          </div>
          <div>
            <span className="block text-gray-400 text-xs uppercase mb-1">Phone</span>
            <p>+91 8501033736</p>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="p-8 md:p-24 bg-white flex items-center">
        {submitted ? (
          <div className="text-center w-full animate-in zoom-in duration-300">
            <h2 className="font-serif text-3xl mb-4">Message Transmitted.</h2>
            <p className="font-mono text-sm text-gray-500 mb-8">Our admissions team will review your query.</p>
            <button onClick={() => setSubmitted(false)} className="border-b border-ink text-sm font-mono uppercase hover:text-engineering-orange">
              Reset Form
            </button>
          </div>
        ) : (
          <form className="w-full space-y-8" onSubmit={handleSubmit}>
            <div className="group">
              <label className="block font-mono text-xs uppercase mb-2 text-gray-500 group-focus-within:text-ink">Full Name</label>
              <input type="text" name="fullName" required className="w-full border-b border-gray-300 py-2 focus:border-ink focus:outline-none bg-transparent transition-colors font-serif text-xl" />
            </div>
            <div className="group">
              <label className="block font-mono text-xs uppercase mb-2 text-gray-500 group-focus-within:text-ink">Email Address</label>
              <input type="email" name="email" required className="w-full border-b border-gray-300 py-2 focus:border-ink focus:outline-none bg-transparent transition-colors font-serif text-xl" />
            </div>
            <div className="group">
              <label className="block font-mono text-xs uppercase mb-2 text-gray-500 group-focus-within:text-ink">Purpose</label>
              <select name="purpose" className="w-full border-b border-gray-300 py-2 focus:border-ink focus:outline-none bg-transparent transition-colors font-serif text-xl">
                <option>Course Admission</option>
                <option>PhD Thesis Support</option>
                <option>Research Collaboration</option>
                <option>Corporate Training</option>
              </select>
            </div>
            <div className="group">
              <label className="block font-mono text-xs uppercase mb-2 text-gray-500 group-focus-within:text-ink">Message</label>
              <textarea name="message" rows={3} required className="w-full border-b border-gray-300 py-2 focus:border-ink focus:outline-none bg-transparent transition-colors font-serif text-xl resize-none"></textarea>
            </div>
            
            <button type="submit" className="group w-full bg-ink text-white py-4 flex items-center justify-center hover:bg-engineering-orange transition-colors duration-300 shadow-sharp hover:shadow-sharp-hover transform hover:-translate-y-1">
              <span className="font-mono text-sm font-bold uppercase tracking-widest">Send Message</span>
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
            </button>
          </form>
        )}
      </div>

    </div>
  );
};

export default ContactPage;