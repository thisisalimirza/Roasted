import React from 'react';
import { NeoButton } from './ui/NeoButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToRoast = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('roast-ai')?.scrollIntoView({ behavior: 'smooth'});
      }, 100);
    } else {
      document.getElementById('roast-ai')?.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <footer className="bg-neo-bg border-t-2 border-black">
      {/* Pre-Footer CTA */}
      <div className="bg-neo-yellow border-b-2 border-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Get Started With Roasted Free</h2>
          <p className="font-mono text-lg mb-8 max-w-xl mx-auto">
            Get one free redesigned section (with a conversion report) from any URL on your website. 100% Free. No Credit Card Required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <NeoButton variant="secondary" className="border-2 shadow-neo" onClick={handleScrollToRoast}>Try Roasted Free</NeoButton>
             <Link to="/contact">
               <NeoButton variant="outline" className="bg-transparent border-2 shadow-none hover:bg-white/20">Book A Discovery Call</NeoButton>
             </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-neo-blue rounded-full border border-black"></div>
            <span className="font-black text-xl italic">ROASTED</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Conversion design, UX education, and founder-led breakdowns. Packaged up and delivered straight to your inbox.
          </p>
          <div className="text-sm font-bold">© Roasted Inc. 2025</div>
        </div>
        
        <div>
          <h4 className="font-black mb-4 uppercase text-sm">Products</h4>
          <ul className="space-y-2 text-sm font-medium text-gray-600">
            <li><Link to="/services/landing-pages" className="hover:text-neo-blue">Landing Pages</Link></li>
            <li><Link to="/services/conversion-reports" className="hover:text-neo-blue">Conversion Reports</Link></li>
            <li><Link to="/services/new-site-design" className="hover:text-neo-blue">New Site Design</Link></li>
            <li><Link to="/services/shopify-development" className="hover:text-neo-blue">Shopify Development</Link></li>
            <li><Link to="/services/mobile-apps" className="hover:text-neo-purple font-bold">Mobile Apps</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-4 uppercase text-sm">Resources</h4>
          <ul className="space-y-2 text-sm font-medium text-gray-600">
            <li><Link to="/about" className="hover:text-neo-blue">FAQs</Link></li>
            <li><Link to="/case-studies" className="hover:text-neo-blue">Case Studies</Link></li>
            <li><Link to="/about" className="hover:text-neo-blue">WTF Is Roasted?</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-4 uppercase text-sm">Partners</h4>
          <ul className="space-y-2 text-sm font-medium text-gray-600">
            <li>
              <a href="https://www.oncallads.com/" target="_blank" rel="noreferrer" className="hover:text-red-500 font-bold flex items-center gap-1">
                On-Call Ads (Traffic)
              </a>
            </li>
            <li><Link to="/contact" className="hover:text-neo-blue">Book a Call</Link></li>
            <li><a href="#" className="hover:text-neo-blue">Twitter</a></li>
            <li><a href="#" className="hover:text-neo-blue">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
