import React from 'react';

const brands = [
  "SELTZER.IO", "VØID MERCH", "CHUNKY.", "GLITCH MODE", "RAW POWER", 
  "HYPER_KICKS", "NEO.BANK", "FLUX CAPACITOR", "SYNTHWAVE", "BRUTALIST ARCH",
  "SELTZER.IO", "VØID MERCH", "CHUNKY.", "GLITCH MODE", "RAW POWER", 
  "HYPER_KICKS", "NEO.BANK", "FLUX CAPACITOR", "SYNTHWAVE", "BRUTALIST ARCH"
];

export const SocialProof: React.FC = () => {
  return (
    <div className="bg-neo-black text-neo-white py-6 border-b-4 border-black overflow-hidden whitespace-nowrap relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neo-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neo-black to-transparent z-10"></div>
      
      <div className="inline-block animate-marquee">
        {brands.map((brand, index) => (
          <span key={index} className="mx-8 font-black text-2xl md:text-4xl tracking-tighter text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};