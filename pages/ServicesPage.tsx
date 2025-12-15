import React, { useEffect } from 'react';
import { NeoButton } from '../components/ui/NeoButton';
import { useLocation } from 'react-router-dom';
import { 
  Check, ArrowRight, FileText, Layout, Zap, Rocket, Star, 
  DollarSign, ShieldCheck, PenTool, MessageSquare, Monitor, 
  RefreshCw, Code, ShoppingCart, Layers, ExternalLink, Smartphone, Search
} from 'lucide-react';

const ServiceSection = ({ id, title, subtitle, price, color, features, icon: Icon, isReverse = false }: any) => (
  <div id={id} className={`py-24 border-b-2 border-black ${isReverse ? 'bg-neo-bg' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
        
        <div className={`${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className={`inline-block px-3 py-1 font-bold text-xs uppercase border border-black mb-4 text-black shadow-[4px_4px_0px_0px_#000] bg-${color === 'black' ? 'white' : 'neo-' + color} ${color === 'black' ? '' : ''}`}>
            Service
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-tight">{title}</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
            {subtitle}
          </p>
          
          <div className="bg-gray-50 border-2 border-black p-6 mb-8">
            <h4 className="font-black text-sm uppercase mb-4">What's Included:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className={`flex-shrink-0 mt-1 text-${color === 'yellow' ? 'yellow-600' : 'neo-' + color}`} size={18} strokeWidth={3} />
                  <span className="font-bold text-sm text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="text-3xl font-black">{price} <span className="text-lg font-normal text-gray-500">starting</span></div>
            {id === 'landing-pages' && (
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded border border-neo-blue">
                 <Star size={16} className="fill-neo-blue text-neo-blue" />
                 <span className="font-bold text-neo-blue text-sm">4.96 Rating</span>
              </div>
            )}
          </div>
          
          <NeoButton variant={color === 'black' ? 'secondary' : 'primary'} className="w-full md:w-auto">
            Start Project
          </NeoButton>
        </div>

        <div className={`${isReverse ? 'lg:order-1' : 'lg:order-2'} relative group`}>
           <div className={`absolute top-4 left-4 w-full h-full border-2 border-black bg-neo-${color} rounded-xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2`}></div>
           <div className="bg-white border-2 border-black rounded-xl p-8 shadow-neo h-full min-h-[400px] flex flex-col justify-center relative overflow-hidden">
              <Icon size={80} className={`text-neo-${color} mb-6 opacity-20 absolute top-8 right-8`} />
              <div className="space-y-6 relative z-10">
                 {/* Abstract UI Mockup */}
                 <div className="w-full h-8 bg-gray-100 rounded border border-gray-200 flex items-center px-3 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="grid grid-cols-3 gap-4">
                   <div className="col-span-2 h-32 bg-gray-100 rounded border border-gray-200 animate-pulse"></div>
                   <div className="col-span-1 h-32 bg-neo-${color}/20 rounded border border-gray-200"></div>
                 </div>
                 <div className="h-4 bg-gray-100 w-3/4 rounded"></div>
                 <div className="h-4 bg-gray-100 w-full rounded"></div>
                 <div className="h-12 w-1/3 bg-black text-white flex items-center justify-center font-bold text-xs rounded shadow-lg mt-4">
                   CONVERT
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  </div>
);

const PhaseHeader = ({ title, num, icon: Icon, color }: any) => (
  <div className={`bg-neo-${color} border-y-2 border-black py-12 px-4 sticky top-20 z-10 shadow-sm`}>
    <div className="max-w-7xl mx-auto flex items-center gap-4">
       <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-black text-2xl border-2 border-white shadow-[4px_4px_0px_0px_#fff]">
         {num}
       </div>
       <div>
         <div className="text-xs font-bold uppercase tracking-widest text-black/60 mb-1 flex items-center gap-1">
           <Icon size={14} /> Phase {num}
         </div>
         <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none">
           {title}
         </h2>
       </div>
    </div>
  </div>
);

export const ServicesPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-neo-bg min-h-screen pt-20">
      
      {/* Header */}
      <div className="bg-white border-b-2 border-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            We Fix Your <span className="text-neo-blue">Funnel</span>
          </h1>
          <p className="text-xl font-mono max-w-2xl mx-auto text-gray-600 mb-12">
            Stop guessing why people aren't buying. We provide the data-backed design blueprints to scale your revenue.
          </p>
          
          {/* Jump Links */}
          <div className="flex flex-wrap justify-center gap-4">
             <a href="#reports" className="font-bold text-sm uppercase underline decoration-2 underline-offset-4 decoration-neo-yellow hover:bg-neo-yellow hover:text-black transition-colors px-2">Diagnose</a>
             <a href="#landing-pages" className="font-bold text-sm uppercase underline decoration-2 underline-offset-4 decoration-neo-pink hover:bg-neo-pink hover:text-white transition-colors px-2">Design</a>
             <a href="#shopify" className="font-bold text-sm uppercase underline decoration-2 underline-offset-4 decoration-neo-green hover:bg-neo-green hover:text-black transition-colors px-2">Scale</a>
          </div>
        </div>
      </div>

      {/* Services List - Grouped by Phase */}
      <div className="flex flex-col">
        
        {/* PHASE 1 */}
        <PhaseHeader num="01" title="Diagnose & Strategy" color="yellow" icon={Search} />
        
        <ServiceSection 
          id="reports"
          title="Conversion Reports"
          subtitle="A comprehensive teardown of your entire user journey (Every URL). We don't just point out problems; we design the solutions. You get a prioritized list of friction points and a multi-page Figma file covering your entire site."
          price="$2,250"
          color="yellow"
          icon={FileText}
          isReverse={true}
          features={[
            "Every URL Audited (Home, PDP, Cart, etc)",
            "Heuristic & Heatmap Analysis",
            "Full-Site Figma Redesigns",
            "High-Fidelity Fix Mockups",
            "Competitor Benchmarking",
            "Prioritized Dev Action Plan"
          ]}
        />

        {/* PHASE 2 */}
        <PhaseHeader num="02" title="Design & Execution" color="pink" icon={PenTool} />

        <ServiceSection 
          id="landing-pages"
          title="Landing Page Design"
          subtitle="Conversion-optimized landing page design to help your highest traffic journeys perform their best. We weave your brand's unignorable features into a conversion optimized page."
          price="$2,500"
          color="pink"
          icon={Layout}
          features={[
            "Dev-Ready Figma Files",
            "Mobile & Desktop Designs",
            "Strategy & Copywriting",
            "2 Rounds of Revisions",
            "Prototype Review",
            "Conversion UX Best Practices"
          ]}
        />
        
        <ServiceSection 
          id="new-site"
          title="New Site Design"
          subtitle="Time for a refresh? We design complete e-commerce experiences that balance brand storytelling with hardcore conversion tactics. Don't just look good, sell good."
          price="$8,000"
          color="blue"
          icon={Layers}
          isReverse={true}
          features={[
            "Full Site Strategy",
            "Homepage, PLP, PDP, About, Blog",
            "Cart & Checkout Flow",
            "Design System Creation",
            "Custom Iconography",
            "Interactive Prototypes"
          ]}
        />

        {/* PHASE 3 */}
        <PhaseHeader num="03" title="Technical Scaling" color="green" icon={Rocket} />

        <ServiceSection 
          id="shopify"
          title="Shopify Development"
          subtitle="Pixel-perfect implementation of our designs. We build lightning-fast, accessible, and easy-to-manage Shopify themes. No bloatware, just clean Liquid code."
          price="$5,000"
          color="green"
          icon={Code}
          features={[
            "Custom Theme Development",
            "App Integrations",
            "Speed Optimization",
            "Pixel-Perfect Implementation",
            "QA & Testing",
            "Launch Support"
          ]}
        />

        <ServiceSection 
          id="mobile-apps"
          title="Mobile App Build"
          subtitle="Stop renting your audience. We build native iOS & Android apps that turn your best customers into obsessed loyalists. Retention is the new acquisition."
          price="$10,000"
          color="purple"
          icon={Smartphone}
          isReverse={true}
          features={[
            "Native iOS & Android Apps",
            "Unlimited Push Notifications",
            "App Store Optimization (ASO)",
            "Klaviyo & Yotpo Integration",
            "One-Tap Checkout",
            "Loyalty Program Sync"
          ]}
        />

      </div>

      {/* Sister Company / Traffic Partner Section */}
      <div className="bg-[#1a1a1a] text-white py-24 border-y-2 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 mb-4 uppercase tracking-widest text-xs border border-white/20">
                Partner Spotlight
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Conversion is useless if you have <span className="text-red-500">no traffic.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                We fix the bucket, they fill it with water. If you need more qualified eyeballs on your brand, check out our sister company, On-Call Ads.
              </p>
              <a href="https://www.oncallads.com/" target="_blank" rel="noopener noreferrer">
                <button className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-wide py-4 px-8 border-2 border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 mx-auto md:mx-0">
                  Visit On-Call Ads <ExternalLink size={18} />
                </button>
              </a>
            </div>
            
            <div className="flex-1 w-full max-w-md bg-zinc-900 border-2 border-zinc-700 p-8 rounded-xl shadow-2xl relative">
               <div className="absolute -top-4 -right-4 bg-white text-black font-bold px-4 py-2 rotate-3 border-2 border-black shadow-sm">
                 Traffic Experts
               </div>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600/20 text-red-500 rounded-lg flex items-center justify-center font-bold">01</div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Paid Social Scaling</h4>
                      <p className="text-sm text-gray-400">Meta, TikTok, and Pinterest experts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600/20 text-red-500 rounded-lg flex items-center justify-center font-bold">02</div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Google Ads Dominance</h4>
                      <p className="text-sm text-gray-400">Capture high-intent search traffic.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-600/20 text-red-500 rounded-lg flex items-center justify-center font-bold">03</div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Creative Testing</h4>
                      <p className="text-sm text-gray-400">We find the winning hook faster.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};