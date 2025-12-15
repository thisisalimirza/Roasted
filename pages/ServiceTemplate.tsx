import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesContent';
import { NeoButton } from '../components/ui/NeoButton';
import { Check, ArrowRight, HelpCircle, AlertTriangle, Zap } from 'lucide-react';

export const ServiceTemplate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug as keyof typeof servicesData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-4xl font-black">Service Not Found</h1>
        <Link to="/services" className="text-neo-blue underline">Back to Services</Link>
      </div>
    );
  }

  const { title, headline, description, price, color, features, painPoints, process } = service;

  return (
    <div className="pt-20 bg-neo-bg">
      
      {/* Hero Section */}
      <div className={`bg-white border-b-2 border-black py-20 px-4 relative overflow-hidden`}>
        <div className={`absolute top-0 right-0 w-64 h-64 bg-neo-${color} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className={`inline-block px-3 py-1 font-bold text-xs uppercase border border-black mb-6 text-black shadow-[4px_4px_0px_0px_#000] bg-neo-${color}`}>
              {title}
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
              {headline}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600 mb-8 leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link to="/contact">
                <NeoButton variant="primary" className={`bg-neo-${color} text-black border-2 shadow-[4px_4px_0px_0px_#000]`}>
                  Start Project — {price}
                </NeoButton>
              </Link>
              <div className="text-sm font-bold uppercase tracking-wider text-gray-400">
                Risk Free Guarantee
              </div>
            </div>
          </div>
          
          {/* Abstract Hero Visual */}
          <div className="relative">
             <div className="w-full h-[400px] border-4 border-black bg-neo-bg shadow-neo relative flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-0 bg-neo-${color} opacity-5`}></div>
                <div className="grid grid-cols-2 gap-4 rotate-3 scale-110">
                   <div className="w-32 h-32 bg-white border-2 border-black p-2 shadow-sm">
                      <div className="w-full h-2 bg-gray-200 mb-2"></div>
                      <div className="w-2/3 h-2 bg-gray-200"></div>
                   </div>
                   <div className="w-32 h-32 bg-white border-2 border-black p-2 shadow-sm mt-8">
                      <div className="w-10 h-10 rounded-full bg-gray-200 mb-2"></div>
                      <div className="w-full h-2 bg-gray-200"></div>
                   </div>
                   <div className="w-32 h-32 bg-white border-2 border-black p-2 shadow-sm -mt-8">
                      <div className="w-full h-full bg-gray-100 border border-dashed border-gray-300"></div>
                   </div>
                   <div className="w-32 h-32 bg-neo-black border-2 border-black p-2 shadow-sm flex items-center justify-center">
                      <Zap className="text-neo-yellow w-12 h-12" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* The Problem (Why you need us) */}
      <div className="py-24 px-4 bg-neo-black text-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-mono text-neo-pink mb-12 uppercase tracking-widest border-b border-gray-800 pb-4">
            Why you're here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point: any, i: number) => (
              <div key={i} className="group">
                <div className="mb-4 text-neo-pink">
                  <AlertTriangle size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-neo-pink transition-colors">{point.title}</h3>
                <p className="text-gray-400 font-mono leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables (What you get) */}
      <div className="py-24 px-4 bg-white border-b-2 border-black">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                 The <span className={`text-neo-${color}`}>Deliverables</span>
               </h2>
               <p className="font-bold text-gray-500 uppercase tracking-widest">
                 0 Fluff. All Value.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black">
               {features.map((feature: string, i: number) => (
                 <div key={i} className="border-b-2 md:border-b-0 md:border-r-2 border-black last:border-0 p-8 hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-xs mb-4 shadow-[4px_4px_0px_0px_#ccc]">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-black">{feature}</h3>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Process Section */}
      <div className={`py-24 px-4 bg-neo-${color} border-b-2 border-black`}>
         <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center uppercase border-2 border-black bg-white inline-block px-6 py-2 shadow-[4px_4px_0px_0px_#000] rotate-2">
              How We Work
            </h2>
            
            <div className="space-y-8">
              {process.map((step: any, i: number) => (
                <div key={i} className="flex gap-6 items-start">
                   <div className="flex-col items-center hidden md:flex">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl z-10">
                        {i + 1}
                      </div>
                      {i !== process.length - 1 && (
                        <div className="w-1 h-16 bg-black/20 -my-2"></div>
                      )}
                   </div>
                   <div className="bg-white border-2 border-black p-6 w-full shadow-neo hover:-translate-y-1 transition-transform">
                      <h3 className="text-2xl font-black mb-2">{step.title}</h3>
                      <p className="font-medium text-gray-600">{step.desc}</p>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </div>

      {/* CTA */}
      <div className="py-32 px-4 text-center bg-neo-bg">
        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
          Ready to fix your {title}?
        </h2>
        <Link to="/contact">
           <NeoButton variant="primary" className="text-xl px-12 py-4 shadow-[8px_8px_0px_0px_#000]">
             Let's Get Started
           </NeoButton>
        </Link>
      </div>

    </div>
  );
};
