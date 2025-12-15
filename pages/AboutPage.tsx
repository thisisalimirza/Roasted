import React from 'react';
import { Manifesto } from '../components/Manifesto';
import { NeoButton } from '../components/ui/NeoButton';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-neo-bg min-h-screen pt-20">
      
      {/* Header */}
      <div className="py-24 px-4 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none">
            WTF Is <br/> <span className="text-neo-blue">Roasted?</span>
          </h1>
          <p className="text-2xl font-bold leading-relaxed max-w-3xl mx-auto">
            We are driven by quality and we're <span className="underline decoration-neo-pink decoration-4">0 bullshit</span>. If you think the same way, we love a good chat.
          </p>
        </div>
      </div>

      <Manifesto />

      {/* Stats Section */}
      <div className="bg-neo-yellow border-b-4 border-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-5xl font-black mb-8 uppercase leading-tight">
                   The Anti-Agency for Growth Brands.
                 </h2>
                 <p className="font-mono text-lg mb-8">
                   Most agencies charge you for "meetings" and "strategy decks". We charge you for deliverables that actually make you money.
                 </p>
                 <Link to="/case-studies">
                   <NeoButton variant="primary" className="bg-white hover:bg-black hover:text-white">Read Our Reviews</NeoButton>
                 </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white border-4 border-black p-6 shadow-neo">
                    <div className="text-5xl font-black mb-2">6x</div>
                    <div className="font-bold text-sm uppercase">Faster than hiring in-house</div>
                 </div>
                 <div className="bg-neo-pink text-white border-4 border-black p-6 shadow-neo">
                    <div className="text-5xl font-black mb-2">10k+</div>
                    <div className="font-bold text-sm uppercase">Brands Roasted</div>
                 </div>
                 <div className="bg-neo-blue text-white border-4 border-black p-6 shadow-neo">
                    <div className="text-5xl font-black mb-2">4.98</div>
                    <div className="font-bold text-sm uppercase">Average Rating</div>
                 </div>
                 <div className="bg-white border-4 border-black p-6 shadow-neo">
                    <div className="text-5xl font-black mb-2">50%</div>
                    <div className="font-bold text-sm uppercase">More Affordable</div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24">
         <h2 className="text-4xl font-black mb-12 text-center uppercase">The Team</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-6 shadow-neo hover:rotate-1 transition-transform">
               <div className="w-20 h-20 bg-neo-yellow rounded-full border-2 border-black mb-4 flex items-center justify-center font-black text-2xl">
                 JD
               </div>
               <h3 className="font-black text-xl">John Doe</h3>
               <p className="font-mono text-sm text-gray-500 mb-4">Founder & Lead Roaster</p>
               <p className="font-medium">
                 Ex-Head of Product at Shopify Plus brands. Obsessed with reducing friction. Hates carousels.
               </p>
            </div>
            <div className="bg-white border-2 border-black p-6 shadow-neo hover:-rotate-1 transition-transform">
               <div className="w-20 h-20 bg-neo-pink rounded-full border-2 border-black mb-4 flex items-center justify-center font-black text-2xl text-white">
                 JS
               </div>
               <h3 className="font-black text-xl">Jane Smith</h3>
               <p className="font-mono text-sm text-gray-500 mb-4">Head of Design</p>
               <p className="font-medium">
                 UI Wizard. Turns brutal critiques into beautiful, high-converting interfaces in Figma.
               </p>
            </div>
         </div>
      </div>

    </div>
  );
};