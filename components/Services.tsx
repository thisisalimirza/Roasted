import React from 'react';
import { NeoButton } from './ui/NeoButton';
import { ArrowRight, Zap, FileText, Layout, Layers, Code, ArrowUpRight, Smartphone, Search, PenTool, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const MiniServiceCard = ({ title, price, link, color }: any) => (
  <Link to={link} className="block group">
    <div className={`bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all relative overflow-hidden`}>
      <div className={`absolute top-0 right-0 w-8 h-8 bg-neo-${color} opacity-20 rounded-bl-full`}></div>
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-black text-lg leading-tight group-hover:text-neo-blue transition-colors">{title}</h4>
        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="text-xs font-mono text-gray-500 font-bold">{price}</div>
    </div>
  </Link>
);

export const Services: React.FC = () => {
  return (
    <div id="services" className="py-24 bg-neo-bg border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black leading-[0.9] tracking-tighter uppercase">
              The Roasted <span className="text-neo-blue">Growth Stack</span>
            </h2>
            <p className="text-lg font-medium text-gray-500 max-w-lg">
              We don't just "do design". We have a structured process to uncover friction, fix the design, and scale the tech.
            </p>
          </div>
          <Link to="/services">
             <NeoButton variant="secondary" className="border-2 text-sm shadow-[4px_4px_0px_0px_#000]">
                View Full Process
             </NeoButton>
          </Link>
        </div>

        {/* The 3-Column Stack Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* COLUMN 1: DIAGNOSE */}
          <div className="flex flex-col h-full">
            <div className="bg-neo-yellow border-2 border-black border-b-0 p-4 font-black uppercase tracking-widest text-sm flex items-center gap-2">
              <Search size={16} /> Phase 1: Diagnose
            </div>
            <div className="bg-white border-2 border-black p-8 flex-grow shadow-neo flex flex-col">
               <div className="mb-6">
                 <h3 className="text-3xl font-black mb-4 uppercase">Find Your Leaks</h3>
                 <p className="text-gray-600 font-medium text-sm leading-relaxed">
                   You can't fix what you can't see. We start by tearing apart your entire site (every URL) to find exactly where you're losing money.
                 </p>
               </div>
               
               <div className="mt-auto space-y-4">
                 <div className="border-t-2 border-dashed border-gray-200 my-4"></div>
                 <h4 className="font-bold text-xs uppercase text-gray-400 mb-2">Services:</h4>
                 
                 <Link to="/services/conversion-reports" className="block group">
                    <div className="bg-neo-yellow/10 border-2 border-black p-5 hover:bg-neo-yellow transition-colors relative">
                      <FileText size={24} className="mb-3 text-black" />
                      <h4 className="font-black text-xl mb-1">Landing Page Report</h4>
                      <p className="text-xs font-mono text-gray-600 mb-2">One-page deep-dive. Same process as our full report.</p>
                      <div className="inline-block bg-black text-white text-[10px] font-bold px-2 py-0.5">$250 One-Time</div>
                      <p className="text-[10px] text-gray-500 mt-2">Upgrade to Full Site Report ($2,250) anytime — we deduct the $250.</p>
                    </div>
                 </Link>
               </div>
            </div>
          </div>

          {/* COLUMN 2: DESIGN */}
          <div className="flex flex-col h-full">
            <div className="bg-neo-pink text-white border-2 border-black border-b-0 p-4 font-black uppercase tracking-widest text-sm flex items-center gap-2">
              <PenTool size={16} /> Phase 2: Design
            </div>
            <div className="bg-white border-2 border-black p-8 flex-grow shadow-neo flex flex-col">
               <div className="mb-6">
                 <h3 className="text-3xl font-black mb-4 uppercase">Fix Your Funnel</h3>
                 <p className="text-gray-600 font-medium text-sm leading-relaxed">
                   Once we know the problems, we design the solutions. High-converting, brand-aligned interfaces that print money.
                 </p>
               </div>

               <div className="mt-auto space-y-4">
                 <div className="border-t-2 border-dashed border-gray-200 my-4"></div>
                 <h4 className="font-bold text-xs uppercase text-gray-400 mb-2">Services:</h4>
                 
                 <MiniServiceCard
                   title="Funnel Buildout"
                   price="From $5k"
                   link="/services/landing-pages"
                   color="pink"
                 />
               </div>
            </div>
          </div>

          {/* COLUMN 3: SCALE */}
          <div className="flex flex-col h-full">
            <div className="bg-neo-green text-black border-2 border-black border-b-0 p-4 font-black uppercase tracking-widest text-sm flex items-center gap-2">
              <Rocket size={16} /> Phase 3: Scale
            </div>
            <div className="bg-white border-2 border-black p-8 flex-grow shadow-neo flex flex-col">
               <div className="mb-6">
                 <h3 className="text-3xl font-black mb-4 uppercase">Build & Retain Your Growth</h3>
                 <p className="text-gray-600 font-medium text-sm leading-relaxed">
                   We manage it for you with an ongoing retainer, or we train your team to manage it themselves with a hands-on handoff workshop.
                 </p>
               </div>

               <div className="mt-auto space-y-4">
                 <div className="border-t-2 border-dashed border-gray-200 my-4"></div>
                 <h4 className="font-bold text-xs uppercase text-gray-400 mb-2">Services:</h4>
                 
                 <MiniServiceCard
                   title="Retainer"
                   price="$1,200/mo + ad spend"
                   link="/services/shopify-development"
                   color="green"
                 />
                 <MiniServiceCard
                   title="Handoff Workshop"
                   price="Included"
                   link="/services/mobile-apps"
                   color="purple"
                 />
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};