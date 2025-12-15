import React from 'react';
import { NeoButton } from '../components/ui/NeoButton';
import { ArrowUpRight, TrendingUp, Clock, ShoppingBag, Users } from 'lucide-react';
import { NeoCard } from '../components/ui/NeoCard';
import { Link } from 'react-router-dom';

const cases = [
  {
    brand: "The Oodie",
    headline: "Generated millions in new monthly revenue",
    stats: [
      { label: "Increased CVR", value: "3 to 5%" },
      { label: "Payback Time", value: "11 Mins" }
    ],
    desc: "Optimized the bundle builder flow to reduce decision fatigue.",
    tags: ["Apparel", "DTC", "CRO"],
    color: "yellow"
  },
  {
    brand: "Fresh Chile Co",
    headline: "Saw a 190% increase in sales after working with Roasted",
    stats: [
      { label: "Conversion Lift", value: "78%" },
      { label: "Total Orders", value: "+271%" }
    ],
    desc: "Complete overhaul of the PDP to highlight social proof and scarcity.",
    tags: ["Food & Bev", "Redesign"],
    color: "pink"
  },
  {
    brand: "Crossnet",
    headline: "Saw a 20% increase in Add to Cart post-audit",
    stats: [
      { label: "Add to Cart", value: "+20%" },
      { label: "Happiness", value: "100%" }
    ],
    desc: "Simplified the game rules section to lower barrier to entry.",
    tags: ["Sports", "Audit"],
    color: "blue"
  },
  {
    brand: "Frontend Simplified",
    headline: "Improved their enrolment by 70% with Roasted",
    stats: [
      { label: "CVR Increase", value: "32-55%" },
      { label: "Enrolment", value: "+70%" }
    ],
    desc: "Restructured the landing page to focus on student outcomes.",
    tags: ["Education", "SaaS"],
    color: "green"
  },
  {
    brand: "Soshe Beauty",
    headline: "Nearly 2x'd their conversion rate",
    stats: [
      { label: "Conversion", value: "3 to 5%" },
      { label: "Payback Time", value: "2 Weeks" }
    ],
    desc: "Cleaned up the navigation and introduced visual hierarchy to collections.",
    tags: ["Beauty", "Shopify"],
    color: "white"
  },
  {
    brand: "Wandering Bear",
    headline: "Saw a 30% decrease in CPA with our landing page",
    stats: [
      { label: "CVR Increase", value: "34%" },
      { label: "Lower CPA", value: "30%" }
    ],
    desc: "Built a dedicated landing page for their cold traffic campaigns.",
    tags: ["Coffee", "Landing Page"],
    color: "yellow"
  },
  {
    brand: "Braxley Bands",
    headline: "Increased conversion by 40% with Roasted",
    stats: [
      { label: "Site-Wide CVR", value: "+40%" },
      { label: "AOV In-Cart", value: "+8%" }
    ],
    desc: "Implemented a sticky add-to-cart and smart upsell drawer.",
    tags: ["Accessories", "Mobile UX"],
    color: "pink"
  },
  {
    brand: "Roo & You",
    headline: "Increased new customers by 25% while doubling ad spend",
    stats: [
      { label: "Increased CVR", value: "40%" },
      { label: "New Cust.", value: "+25%" }
    ],
    desc: "Streamlined the checkout process for high-traffic drops.",
    tags: ["Home Goods", "Scale"],
    color: "blue"
  }
] as const;

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-neo-bg min-h-screen pt-20">
      
      {/* Header */}
      <div className="bg-neo-black text-white border-b-2 border-black py-24 px-4 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-neo-yellow rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-neo-pink rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block bg-neo-green text-black font-bold px-4 py-1 mb-6 border-2 border-black shadow-[4px_4px_0px_0px_#fff] rotate-2">
            10,000+ BRANDS AUDITED
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
            Success Stories
          </h1>
          <p className="text-xl font-mono max-w-2xl mx-auto text-gray-400 leading-relaxed">
            We don't sell opinions. We sell results. Here are a few of our favorite success stories from the archives.
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="bg-white border-b-2 border-black py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-neo-blue mb-1">3-5%</div>
            <div className="font-bold text-sm uppercase">Avg CVR Increase</div>
          </div>
          <div>
            <div className="text-4xl font-black text-neo-pink mb-1">11 Min</div>
            <div className="font-bold text-sm uppercase">Fastest Payback</div>
          </div>
          <div>
            <div className="text-4xl font-black text-neo-green mb-1">$500M+</div>
            <div className="font-bold text-sm uppercase">Revenue Generated</div>
          </div>
          <div>
            <div className="text-4xl font-black text-neo-yellow mb-1">100%</div>
            <div className="font-bold text-sm uppercase">Happiness Guarantee</div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <NeoCard key={i} color={c.color} className="group cursor-pointer hover:shadow-neo-lg transition-all h-full flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    {c.tags[0]}
                  </div>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-8 h-8 bg-white border-2 border-black rounded-full p-1" />
                </div>
                
                <h3 className="text-3xl font-black uppercase mb-4 leading-none">{c.brand}</h3>
                <p className="text-lg font-bold mb-6 leading-tight min-h-[3rem]">{c.headline}</p>
                
                <div className="bg-white/80 border-2 border-black p-4 mb-6 shadow-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {c.stats.map((stat, idx) => (
                      <div key={idx} className="text-center border-r last:border-0 border-gray-300">
                        <div className="font-black text-2xl md:text-3xl text-neo-black">{stat.value}</div>
                        <div className="font-mono text-xs text-gray-600 uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                 <p className="font-mono text-sm text-gray-800 mb-4 border-l-2 border-black pl-3">
                   "{c.desc}"
                 </p>
                 <div className="flex flex-wrap gap-2">
                  {c.tags.slice(1).map(tag => (
                    <span key={tag} className="border border-black px-2 py-1 text-[10px] font-bold uppercase bg-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </NeoCard>
          ))}
        </div>

        <div className="mt-24 bg-neo-blue text-white border-4 border-black p-12 text-center shadow-neo relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10">
             <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Want results like these?</h2>
             <p className="text-xl font-mono mb-8 max-w-2xl mx-auto">
               Stop leaving money on the table. Get a fresh perspective on your funnel today.
             </p>
             <Link to="/contact">
               <NeoButton variant="primary" className="text-xl px-12 py-4 shadow-[8px_8px_0px_0px_#000]">
                 Start Your Transformation
               </NeoButton>
             </Link>
           </div>
        </div>
      </div>

    </div>
  );
};