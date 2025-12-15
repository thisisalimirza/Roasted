import React from 'react';
import { NeoButton } from './ui/NeoButton';
import { Link } from 'react-router-dom';

export const CaseStudies: React.FC = () => {
  return (
    <div id="case-studies" className="py-24 bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
             Before & After <span className="text-neo-blue">Roasted</span>
           </h2>
           <p className="text-xl max-w-2xl mx-auto text-gray-600">
             See how we transform cluttered, confusing layouts into streamlined conversion machines.
           </p>
        </div>

        {/* Mobile Mockup Comparison */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-32">
          
          {/* BEFORE Phone */}
          <div className="relative">
             <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-600 font-bold px-4 py-1 rounded-full border-2 border-black text-sm uppercase tracking-wide">
               Before
             </div>
             
             {/* Phone Body */}
             <div className="w-[300px] h-[600px] border-[3px] border-black rounded-[40px] bg-gray-100 overflow-hidden relative shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                
                {/* Screen Content - Bad UX */}
                <div className="h-full overflow-y-auto no-scrollbar pt-8 bg-white opacity-80">
                   <div className="h-12 bg-gray-200 w-full mb-2"></div> {/* Navbar */}
                   <div className="h-64 bg-gray-300 w-full mb-4 flex items-center justify-center text-gray-500 font-mono text-xs">
                     LOW RES IMAGE
                   </div>
                   <div className="px-4 space-y-2">
                     <div className="h-6 bg-gray-800 w-3/4 mb-4"></div>
                     <div className="h-2 bg-gray-300 w-full"></div>
                     <div className="h-2 bg-gray-300 w-full"></div>
                     <div className="h-2 bg-gray-300 w-full"></div>
                     <div className="h-2 bg-gray-300 w-2/3"></div>
                   </div>
                   <div className="px-4 mt-8">
                      <div className="h-10 border border-gray-400 text-gray-500 flex items-center justify-center text-sm">Add to Cart</div>
                   </div>
                   <div className="mt-8 h-40 bg-gray-100 border-t border-gray-200 p-4">
                     <div className="h-4 bg-gray-300 w-1/2 mb-2"></div>
                     <div className="h-2 bg-gray-200 w-full"></div>
                   </div>
                </div>
             </div>
             
             {/* Metric Overlay */}
             <div className="absolute bottom-10 -right-4 bg-red-100 text-red-600 border-2 border-red-500 px-3 py-2 font-bold text-xs rounded shadow-sm rotate-3">
               0.8% Conversion
             </div>
          </div>

          {/* ARROW */}
          <div className="hidden lg:block">
            <div className="w-24 h-[2px] bg-gray-300 relative">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-gray-300 rotate-45"></div>
            </div>
          </div>

          {/* AFTER Phone */}
          <div className="relative">
             <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-neo-blue text-white font-bold px-4 py-1 rounded-full border-2 border-black text-sm uppercase tracking-wide shadow-neo">
               After
             </div>
             
             {/* Phone Body */}
             <div className="w-[300px] h-[600px] border-[3px] border-black rounded-[40px] bg-white overflow-hidden relative shadow-[10px_10px_0px_0px_#3B30FF]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                
                {/* Screen Content - Good UX */}
                <div className="h-full overflow-y-auto no-scrollbar pt-8 bg-white">
                   <div className="flex justify-between items-center px-4 mb-4">
                     <div className="w-6 h-6 rounded-full bg-black"></div>
                     <div className="w-6 h-6 rounded bg-gray-200"></div>
                   </div>
                   
                   <div className="px-4 mb-6">
                     <div className="h-8 bg-black w-full mb-2 rounded-sm"></div>
                     <div className="h-4 bg-gray-400 w-2/3 rounded-sm"></div>
                   </div>

                   <div className="relative h-64 w-full bg-gray-100 mb-6 group overflow-hidden">
                      <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                        <span className="font-black text-3xl text-gray-200 uppercase rotate-12">Product Hero</span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white px-3 py-1 font-bold text-xs border border-black rounded shadow-[2px_2px_0px_0px_#000] z-10">
                        Rated 4.9/5
                      </div>
                   </div>
                   
                   <div className="px-4">
                      <div className="w-full bg-neo-blue text-white font-bold h-12 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center mb-3">
                        Add to Cart - $49
                      </div>
                      <div className="flex justify-center gap-4 text-xs font-bold text-gray-500">
                        <span>Free Shipping</span>
                        <span>•</span>
                        <span>Money Back</span>
                      </div>
                   </div>
                </div>
             </div>
             
             {/* Metric Overlay */}
             <div className="absolute bottom-10 -right-8 bg-neo-green text-black border-2 border-black px-4 py-2 font-bold text-sm rounded shadow-neo -rotate-3 z-10">
               2.4% Conversion
             </div>
             <div className="absolute top-32 -left-12 bg-white text-black border-2 border-black px-3 py-2 font-bold text-xs rounded shadow-sm rotate-6 max-w-[120px] text-center">
               "Sticky CTA added"
             </div>
          </div>

        </div>

        <div className="text-center mt-20">
          <Link to="/case-studies">
            <NeoButton variant="primary">
              See More Case Studies
            </NeoButton>
          </Link>
        </div>
      </div>
    </div>
  );
};