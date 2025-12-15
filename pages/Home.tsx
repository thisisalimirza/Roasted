import React from 'react';
import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { CaseStudies } from '../components/CaseStudies';
import { Testimonials } from '../components/Testimonials';
import { RoastFeature } from '../components/RoastFeature';
import { Services } from '../components/Services';
import { OfferComparison } from '../components/OfferComparison';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      
      {/* Proof first: Show them what's possible */}
      <CaseStudies />
      
      {/* The Anchor: Free vs Paid Comparison (Pitch) */}
      <OfferComparison />

      {/* Full Service Suite (Secondary) */}
      <Services />

      <Testimonials />
      
      {/* The Hook: AI Feature */}
      <RoastFeature />
      
      {/* FAQ Section */}
      <div id="faq" className="bg-white py-24 border-t-2 border-black">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter text-center">
              Resources & FAQs
            </h2>
            <div className="space-y-4">
              {[
                { 
                  q: "What if I need help with development?", 
                  a: "Our deliverables are 100% dev-ready. We provide high-fidelity Figma files with all assets, spacing, and typography clearly defined. If you don't have a developer, we have a list of trusted partners we can introduce you to." 
                },
                { 
                  q: "Do you build websites from scratch?", 
                  a: "We focus exclusively on design, strategy, and copywriting. This allows us to be the best in the world at what we do (conversion). We don't code, but we speak developer." 
                },
                { 
                  q: "How many revisions do I get?", 
                  a: "Our standard Landing Page package includes 2 rounds of revisions. One round after the initial prototype is delivered, and a final polish round before handoff." 
                },
                { 
                  q: "How fast is the turnaround?", 
                  a: "For Landing Pages, we typically aim for a 2-3 week turnaround from kick-off to final files. Audits are faster, usually 48-72 hours." 
                }
              ].map((item, idx) => (
                <details key={idx} className="group bg-neo-bg border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="font-bold p-6 list-none flex justify-between items-center text-lg select-none cursor-pointer hover:bg-gray-50 transition-colors">
                    {item.q}
                    <span className="text-2xl text-neo-blue group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 font-mono text-gray-600 leading-relaxed border-t border-gray-100">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
        </div>
      </div>
    </>
  );
};