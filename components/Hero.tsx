import React from 'react';
import { NeoButton } from './ui/NeoButton';
import { Star, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 bg-neo-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Copy */}
        <div className="space-y-8 text-left relative z-10">
          <div className="inline-flex items-center gap-2 bg-neo-yellow px-4 py-2 border-2 border-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_#000]">
            <Star size={14} className="fill-black" />
            Conversion-Optimized Design
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter text-black uppercase">
            We Design Websites <br/>
            <span className="text-neo-blue underline decoration-4 underline-offset-4 decoration-black">That Actually Sell.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-lg leading-relaxed">
            Stop losing sales to bad UX. We combine data-backed strategy with world-class design to turn your traffic into revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/services">
              <NeoButton variant="primary" className="border-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
                View Services
              </NeoButton>
            </Link>
            <Link to="/contact">
              <NeoButton variant="outline" className="border-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] bg-white hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
                Get An Audit
              </NeoButton>
            </Link>
          </div>

          <div className="pt-8 border-t-2 border-gray-100 mt-8">
             <div className="flex items-center gap-4">
               <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-sm relative z-0 hover:z-10 transition-all hover:scale-110">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*13}`} alt="avatar" />
                   </div>
                 ))}
               </div>
               <div>
                 <div className="flex text-neo-blue mb-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                 </div>
                 <p className="text-sm font-bold uppercase tracking-wide">10,000+ Happy Brands Worldwide</p>
               </div>
             </div>
          </div>
        </div>

        {/* Right: Polished Abstract Visual */}
        <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
           
           {/* Background Blob */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neo-blue/5 rounded-full blur-3xl"></div>

           {/* Card Stack Effect */}
           <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Back Card (The "Before" - cluttered) */}
              <div className="absolute top-10 right-10 w-72 h-[450px] bg-white border-2 border-black rounded-2xl p-4 shadow-neo opacity-60 rotate-6 transition-transform hover:rotate-12 hover:z-20 cursor-default">
                 <div className="bg-red-50 text-red-500 text-xs font-bold px-2 py-1 absolute -top-3 -right-3 border border-black rotate-12">BEFORE</div>
                 <div className="w-full h-4 bg-gray-200 mb-4 rounded-sm"></div>
                 <div className="w-full h-32 bg-gray-100 mb-4 border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400">
                    Confusing Hero
                 </div>
                 <div className="space-y-2">
                    <div className="w-full h-2 bg-gray-100 rounded-sm"></div>
                    <div className="w-2/3 h-2 bg-gray-100 rounded-sm"></div>
                    <div className="w-full h-2 bg-gray-100 rounded-sm"></div>
                 </div>
                 <div className="mt-8 w-full h-10 border border-gray-300 rounded flex items-center justify-center text-gray-400 text-sm">
                    Weak CTA
                 </div>
              </div>

              {/* Front Card (The "After" - polished) */}
              <div className="absolute top-20 left-10 w-72 h-[450px] bg-white border-2 border-black rounded-2xl p-4 shadow-[8px_8px_0px_0px_#3B30FF] -rotate-3 transition-transform hover:rotate-0 hover:scale-105 z-10">
                 <div className="bg-neo-green text-black text-xs font-bold px-2 py-1 absolute -top-3 -left-3 border border-black -rotate-12 shadow-sm">AFTER</div>
                 
                 {/* Navbar */}
                 <div className="flex justify-between items-center mb-6">
                    <div className="w-6 h-6 rounded-full bg-black"></div>
                    <div className="w-6 h-1 bg-black rounded"></div>
                 </div>

                 {/* Hero Image */}
                 <div className="w-full h-40 bg-gray-50 mb-6 rounded border border-black relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-neo-yellow rounded-full blur-xl opacity-50 group-hover:scale-150 transition-transform"></div>
                    </div>
                    <img src="https://api.dicebear.com/7.x/identicon/svg?seed=product" alt="Product" className="w-full h-full object-cover opacity-50 mix-blend-multiply" />
                 </div>

                 {/* Content */}
                 <div className="mb-6">
                    <div className="w-3/4 h-6 bg-black mb-2 rounded-sm"></div>
                    <div className="w-1/2 h-3 bg-gray-200 rounded-sm"></div>
                 </div>

                 {/* CTA */}
                 <div className="w-full h-12 bg-neo-blue text-white font-bold rounded border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer">
                    Buy Now - $49
                 </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute bottom-20 right-20 bg-neo-yellow px-6 py-4 border-2 border-black shadow-[4px_4px_0px_0px_#000] rotate-6 z-20 animate-bounce cursor-default">
                 <div className="flex items-center gap-2 font-black text-2xl">
                    <TrendingUp size={28} />
                    +142%
                 </div>
                 <div className="text-xs font-bold uppercase tracking-wider">Revenue Lift</div>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
};