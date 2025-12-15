import React from 'react';
import { NeoCard } from './ui/NeoCard';

const testimonials = [
  {
    name: "Shaungh Wolf",
    brand: "Wandering Bear Coffee",
    quote: "The Roasted LP outperformed our 'unbeatable' top performing lander of 2 years in a head-to-head test.",
    metric: "Beat Control by 34%",
    tag: "E-Commerce",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shaungh"
  },
  {
    name: "Elena Seranova",
    brand: "NMN Bio",
    quote: "Being in e-commerce for this long, I can definitely say that this service will move the needle.",
    metric: "Founder Approved",
    tag: "SaaS",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    name: "Jeremy Szelag",
    brand: "Head of Growth, Future Golf",
    quote: "The team delivered on the first shot, in an easy to understand deliverable.",
    metric: "Instant Impact",
    tag: "E-Commerce",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jeremy"
  },
  {
    name: "Alice Williams",
    brand: "Founder, Ovira",
    quote: "The first time I've dealt with an agency where I have been SUPER impressed with the work.",
    metric: "Highly Recommended",
    tag: "E-Commerce",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
  },
  {
    name: "Alex Nagourney",
    brand: "VP Growth, Perelel Health",
    quote: "Even with our complicated subscription product, Roasted delivered a very clear landing page that's easy to understand.",
    metric: "Subscription Growth",
    tag: "E-Commerce",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    name: "Ian Blair",
    brand: "Founder, Laundry Sauce",
    quote: "They did a great job identifying friction points in our website. This serves as a basis for us to go test new ideas!",
    metric: "Actionable Insights",
    tag: "E-Commerce",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ian"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-neo-bg border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-neo-white border-2 border-black px-4 py-1 font-bold text-sm uppercase mb-4 shadow-neo">
            Nice Words
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 max-w-4xl mx-auto leading-tight">
            We are driven by quality and we're <span className="bg-neo-pink text-white px-2">0 bullshit.</span> If you think the same way, we love a good chat.
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid">
              <div className="bg-white border-2 border-black p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="flex justify-between items-start mb-6">
                   <div className="bg-blue-50 text-neo-blue border border-neo-blue/20 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
                     {t.tag}
                   </div>
                   <div className="text-neo-yellow">
                     ★★★★★
                   </div>
                </div>
                
                <p className="font-medium text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                
                <div className="flex items-center gap-4 border-t-2 border-gray-100 pt-4">
                   <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-black bg-gray-100" />
                   <div>
                     <div className="font-bold text-sm leading-tight">{t.name}</div>
                     <div className="text-xs text-gray-600 font-mono">{t.brand}</div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};