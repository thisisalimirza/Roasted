import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <div className="bg-neo-black text-neo-white py-32 px-4 border-b-4 border-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-neo-yellow font-mono font-bold mb-8 uppercase tracking-widest text-sm">Our Philosophy</h2>
        
        <div className="space-y-12 font-black text-4xl md:text-7xl leading-tight uppercase tracking-tight">
          <p>
            Pretty websites <span className="text-gray-600 line-through decoration-4 decoration-neo-pink">don't sell.</span>
          </p>
          <p>
            Clarity <span className="text-neo-green">sells.</span>
          </p>
          <p>
            Speed <span className="text-neo-green">sells.</span>
          </p>
          <p className="text-neo-white">
            We strip away the vanity metrics and the fluff to reveal the raw conversion engine underneath.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t-2 border-white/20 pt-8">
           {[
             { title: "Data > Vibes", desc: "We don't care if you 'like' the color blue. We care if users click the button." },
             { title: "Brutal Honesty", desc: "We will hurt your feelings to save your business. It's tough love." },
             { title: "Speed Kills", desc: "Audits delivered in 48 hours. Implementation guides included." }
           ].map((item, i) => (
             <div key={i}>
               <h3 className="font-bold text-xl mb-2 text-neo-pink">{item.title}</h3>
               <p className="font-mono text-sm text-gray-400">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};