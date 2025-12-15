import React from 'react';
import { NeoButton } from './ui/NeoButton';
import { Star, ArrowRight, Zap, Play, Scissors, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OfferComparison: React.FC = () => {
  return (
    <div className="py-24 bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-black leading-[0.9] tracking-tighter uppercase">
            The Fastest Way To <br/> <span className="text-neo-blue">Fix Your Funnel</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-black uppercase tracking-widest text-gray-500">
            <span className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full border border-gray-200 text-black">
               <Zap size={14} className="text-neo-blue fill-neo-blue" /> actionable insights
            </span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full border border-gray-200 text-black">
               <Zap size={14} className="text-neo-blue fill-neo-blue" /> dev-ready assets
            </span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full border border-gray-200 text-black">
               <Zap size={14} className="text-neo-blue fill-neo-blue" /> 48hr turnaround
            </span>
          </div>
        </div>

        {/* The Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* FREE TRIAL CARD (Left) */}
          <div className="lg:col-span-5 bg-[#FFF8EE] border-2 border-neo-blue rounded-xl overflow-hidden flex flex-col shadow-[8px_8px_0px_0px_#3B30FF] hover:-translate-y-1 transition-transform relative group">
             
             {/* Value Badge */}
             <div className="absolute top-4 right-4 bg-neo-blue text-white text-[10px] font-black uppercase px-2 py-1 border border-black shadow-sm z-20 rotate-3">
               Valued at $500
             </div>

             <div className="h-64 p-8 bg-blue-50/50 flex items-center justify-center border-b-2 border-neo-blue/20 relative overflow-hidden">
                {/* Abstract Visual for Free Trial - Refined */}
                <div className="relative w-48 h-56">
                   {/* Background Sheet */}
                   <div className="absolute inset-0 bg-white border-2 border-neo-blue rounded-lg shadow-sm transform group-hover:rotate-1 transition-transform origin-bottom-left"></div>
                   
                   {/* Wireframe Content */}
                   <div className="absolute inset-4 space-y-3 opacity-50">
                      <div className="h-4 bg-blue-100 rounded w-full"></div>
                      <div className="flex gap-2">
                        <div className="h-16 w-16 bg-blue-50 rounded border border-blue-100"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-2 bg-blue-100 rounded w-full"></div>
                          <div className="h-2 bg-blue-100 rounded w-4/5"></div>
                          <div className="h-2 bg-blue-100 rounded w-full"></div>
                        </div>
                      </div>
                      <div className="h-20 bg-blue-50 rounded border border-dashed border-blue-200"></div>
                   </div>

                   {/* Scissors Icon overlay - The "Cut" */}
                   <div className="absolute -left-6 top-1/3 w-12 h-12 bg-white border-2 border-neo-blue rounded-full flex items-center justify-center text-neo-blue shadow-[2px_2px_0px_0px_#3B30FF] z-10 animate-pulse">
                      <Scissors size={24} className="rotate-90" />
                   </div>
                   
                   {/* Cut Line */}
                   <div className="absolute top-1/3 left-0 w-full border-t-2 border-dashed border-neo-blue transform -rotate-12 pointer-events-none"></div>

                   {/* Sparkle */}
                   <div className="absolute -right-4 bottom-8 w-10 h-10 bg-neo-yellow border-2 border-black rounded-full flex items-center justify-center text-black shadow-sm -rotate-12 z-10">
                      <Star size={16} className="fill-white text-white" />
                   </div>
                </div>
             </div>
             
             <div className="p-8 flex-grow flex flex-col items-start bg-[#FFF8EE]">
                <div className="font-black text-white text-xs tracking-widest uppercase mb-3 bg-neo-blue px-2 py-1 rounded-sm border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">Free Trial</div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-black leading-none">Try Roasted Free</h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                  Get one free redesigned section (with a conversion report) from any URL on your website.
                </p>
                <div className="mt-auto w-full">
                  <NeoButton 
                     variant="outline" 
                     fullWidth 
                     className="bg-white text-black border-neo-blue shadow-[4px_4px_0px_0px_#3B30FF] hover:shadow-[2px_2px_0px_0px_#3B30FF] hover:bg-blue-50"
                     onClick={() => document.getElementById('roast-ai')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Your Free Roast
                  </NeoButton>
                  <p className="text-center text-[10px] uppercase font-bold text-gray-400 mt-3 tracking-widest">
                    No Credit Card Required
                  </p>
                </div>
             </div>
          </div>

          {/* PAID REPORT CARD (Right) */}
          <div className="lg:col-span-7 bg-[#F0FFF4] border-2 border-neo-green rounded-xl overflow-hidden flex flex-col shadow-[8px_8px_0px_0px_#00FF99] hover:-translate-y-1 transition-transform group">
             <div className="h-64 p-4 md:p-8 bg-[#E6FFFA] flex items-center justify-center border-b-2 border-neo-green/20 relative overflow-hidden">
                {/* Abstract Visual for Paid Report - Refined */}
                <div className="flex items-center gap-6 scale-90 md:scale-100">
                   {/* Screen 1 - Analysis */}
                   <div className="w-48 h-40 bg-white border-2 border-neo-green rounded shadow-sm p-3 relative -rotate-6 z-10 group-hover:-rotate-12 transition-transform duration-500">
                      <div className="flex items-center justify-between mb-2">
                         <div className="h-2 bg-gray-100 w-1/3"></div>
                         <div className="h-2 w-2 rounded-full bg-red-400"></div>
                      </div>
                      <div className="h-20 bg-gray-50 border border-dashed border-gray-200 mb-2 flex items-center justify-center text-[10px] text-gray-400 font-mono">
                        HERO_SECTION.JPG
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-100 w-full"></div>
                        <div className="h-1 bg-gray-100 w-full"></div>
                      </div>
                      {/* Sticky Note */}
                      <div className="absolute -top-3 -right-6 w-24 bg-yellow-200 border border-black p-2 text-[8px] font-mono leading-tight rotate-6 shadow-sm z-20">
                        <span className="font-bold">NOTE:</span> Copy is too vague here.
                      </div>
                   </div>

                   {/* Screen 2 - Fix */}
                   <div className="w-48 h-40 bg-white border-2 border-neo-green rounded shadow-sm p-3 relative rotate-3 z-0 group-hover:rotate-6 transition-transform duration-500">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neo-green text-black text-[8px] font-black px-2 py-0.5 border border-black z-10">FIXED</div>
                      <div className="flex justify-between mb-2">
                        <div className="h-2 bg-black w-10"></div>
                        <div className="h-2 bg-gray-200 w-4"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-24 bg-gray-100 rounded-sm border border-gray-200"></div>
                        <div className="space-y-2">
                           <div className="h-4 bg-neo-green/40 w-full rounded-sm"></div>
                           <div className="h-2 bg-gray-200 w-full rounded-sm"></div>
                           <div className="h-8 bg-black w-full rounded-sm mt-2 flex items-center justify-center text-[8px] text-white font-bold">CTA</div>
                        </div>
                      </div>
                      {/* Cursor */}
                      <div className="absolute bottom-2 right-6 drop-shadow-md">
                         <MousePointer2 size={24} className="fill-black text-white stroke-[1px]" />
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-8 flex-grow flex flex-col items-start bg-[#F0FFF4] relative">
                <div className="font-black text-black text-xs tracking-widest uppercase mb-3 bg-neo-green px-2 py-1 rounded-sm border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">Starting at $2,250</div>
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-black leading-none">Roasted Conversion Reports</h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium max-w-2xl">
                  Our expert conversion team analyzes your website through your customers' eyes, identifying the top 'conversion-critical' friction points with ready-to-implement designs.
                </p>
                
                <div className="mt-auto w-full flex flex-col md:flex-row gap-6 items-center">
                   <Link to="/services/conversion-reports" className="w-full md:w-auto">
                    <NeoButton 
                        fullWidth
                        className="bg-white text-black border-neo-green shadow-[4px_4px_0px_0px_#00FF99] hover:shadow-[2px_2px_0px_0px_#00FF99] hover:bg-green-50"
                      >
                        Explore Conversion Reports
                      </NeoButton>
                   </Link>
                   
                   {/* Mini Testimonial */}
                   <div className="hidden md:flex items-center gap-3 bg-white/50 border border-neo-green/30 px-4 py-2 rounded-full">
                      <div className="flex text-neo-blue">
                        {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                      </div>
                      <div className="text-xs font-black italic text-neo-blue">"Mindblowing Results."</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
