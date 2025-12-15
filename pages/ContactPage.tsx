import React from 'react';
import { NeoButton } from '../components/ui/NeoButton';
import { Mail, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your interest! We'll be in touch shortly.");
  };

  return (
    <div className="bg-neo-bg min-h-screen pt-20 pb-24">
      
      {/* Header */}
      <div className="bg-neo-black text-white py-24 px-4 border-b-2 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
            Get <span className="text-neo-green">Roasted</span>
          </h1>
          <p className="text-xl font-mono text-gray-400 max-w-2xl mx-auto">
            Ready to stop leaving money on the table? You're in the right place.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT: The Form */}
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-neo-yellow border-2 border-black flex items-center justify-center font-black text-xl shadow-sm text-black">01</div>
               <h2 className="text-3xl font-black uppercase text-black">Start a Project</h2>
             </div>
             
             <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="block font-bold mb-2 uppercase text-xs tracking-wider text-black">First Name</label>
                      <input type="text" className="w-full border-2 border-black p-4 font-mono text-black bg-white focus:outline-none focus:bg-neo-yellow/20 transition-colors placeholder-gray-400" placeholder="Jane" required />
                   </div>
                   <div>
                      <label className="block font-bold mb-2 uppercase text-xs tracking-wider text-black">Last Name</label>
                      <input type="text" className="w-full border-2 border-black p-4 font-mono text-black bg-white focus:outline-none focus:bg-neo-yellow/20 transition-colors placeholder-gray-400" placeholder="Doe" required />
                   </div>
                </div>
                
                <div>
                  <label className="block font-bold mb-2 uppercase text-xs tracking-wider text-black">Email Address</label>
                  <input type="email" className="w-full border-2 border-black p-4 font-mono text-black bg-white focus:outline-none focus:bg-neo-yellow/20 transition-colors placeholder-gray-400" placeholder="jane@company.com" required />
                </div>
                
                <div>
                  <label className="block font-bold mb-2 uppercase text-xs tracking-wider text-black">Website URL</label>
                  <input type="text" className="w-full border-2 border-black p-4 font-mono text-black bg-white focus:outline-none focus:bg-neo-yellow/20 transition-colors placeholder-gray-400" placeholder="https://" />
                </div>
                
                <div>
                  <label className="block font-bold mb-2 uppercase text-xs tracking-wider text-black">What do you need?</label>
                  <select className="w-full border-2 border-black p-4 font-mono text-black bg-white focus:outline-none focus:bg-neo-yellow/20 transition-colors">
                    <option>Select an option...</option>
                    <option>Landing Page Design</option>
                    <option>Conversion Audit</option>
                    <option>New Site Design</option>
                    <option>Shopify Development</option>
                    <option>Mobile App Build</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-bold mb-2 uppercase text-xs tracking-wider text-black">Tell us more</label>
                  <textarea className="w-full border-2 border-black p-4 font-mono text-black bg-white focus:outline-none focus:bg-neo-yellow/20 transition-colors h-32 placeholder-gray-400" placeholder="What are your goals?"></textarea>
                </div>

                <NeoButton fullWidth variant="primary" className="text-xl py-4 border-black" type="submit">
                  Send Request
                </NeoButton>
             </form>
          </div>

          {/* RIGHT: Alternatives */}
          <div className="space-y-8 flex flex-col">
            
            {/* Calendar Option */}
            <div className="bg-neo-blue text-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-white text-black border-2 border-black flex items-center justify-center font-black text-xl shadow-sm">02</div>
                  <Calendar size={32} />
               </div>
               
               <h3 className="text-3xl font-black uppercase mb-4 leading-none relative z-10">
                 Hate playing email tag?
               </h3>
               <p className="font-medium text-blue-100 mb-8 max-w-md relative z-10 text-lg">
                 We do too. Skip the back-and-forth and grab a time directly on our calendar. Ideally not at 4am.
               </p>
               
               <NeoButton variant="secondary" className="w-full border-black shadow-[4px_4px_0px_0px_#000]">
                 Book Discovery Call
               </NeoButton>
            </div>

            {/* Email Option */}
            <div className="bg-neo-pink text-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] flex-grow relative overflow-hidden group hover:-translate-y-1 transition-transform">
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

               <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 bg-white text-black border-2 border-black flex items-center justify-center font-black text-xl shadow-sm">03</div>
                  <Mail size={32} />
               </div>
               
               <h3 className="text-3xl font-black uppercase mb-4 leading-none relative z-10">
                 General Inquiries & Hate Mail
               </h3>
               <p className="font-medium text-pink-100 mb-8 max-w-md relative z-10 text-lg">
                 Just want to say hi? Have a burning question? Want to tell us our design sucks? We read everything.
               </p>
               
               <a href="mailto:hello@roasted.com" className="block">
                 <NeoButton variant="secondary" className="w-full border-black shadow-[4px_4px_0px_0px_#000]">
                   hello@roasted.com
                 </NeoButton>
               </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};