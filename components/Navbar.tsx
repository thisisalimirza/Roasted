import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NeoButton } from './ui/NeoButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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

  const navLinkClass = "font-bold text-sm text-black hover:text-neo-blue transition-colors uppercase";

  return (
    <nav className="fixed top-0 w-full z-50 bg-neo-white/95 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-neo-blue rounded-full border-2 border-black"></div>
            <span className="font-black text-2xl tracking-tighter">
              ROASTED
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            
            {/* Services Dropdown */}
            <div 
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/services" className={`${navLinkClass} flex items-center gap-1`}>
                Services <ChevronDown size={14} />
              </Link>
              
              {isServicesOpen && (
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-white border-2 border-black shadow-neo-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link to="/services/landing-pages" className="block px-4 py-3 hover:bg-gray-50 font-bold text-sm border-b border-gray-100">Landing Pages</Link>
                  <Link to="/services/conversion-reports" className="block px-4 py-3 hover:bg-gray-50 font-bold text-sm border-b border-gray-100">Conversion Reports</Link>
                  <Link to="/services/new-site-design" className="block px-4 py-3 hover:bg-gray-50 font-bold text-sm border-b border-gray-100">New Site Design</Link>
                  <Link to="/services/shopify-development" className="block px-4 py-3 hover:bg-gray-50 font-bold text-sm border-b border-gray-100">Shopify Dev</Link>
                  <Link to="/services/mobile-apps" className="block px-4 py-3 hover:bg-gray-50 font-bold text-sm text-neo-purple">Mobile Apps</Link>
                </div>
              )}
            </div>

            <Link to="/case-studies" className={navLinkClass}>Case Studies</Link>
            <Link to="/about" className={navLinkClass}>WTF Is Roasted?</Link>
            <Link to="/contact">
              <NeoButton variant="outline" className="text-sm px-4 py-2 border-2 shadow-[2px_2px_0px_0px_#000]">
                Book A Call
              </NeoButton>
            </Link>
            <NeoButton variant="primary" className="text-sm px-4 py-2 border-2 shadow-[2px_2px_0px_0px_#000]" onClick={handleScrollToRoast}>
              Try Free
            </NeoButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black bg-white absolute w-full h-screen top-20 left-0 z-40 overflow-y-auto pb-20">
          <div className="px-4 pt-8 pb-3 space-y-6 flex flex-col items-center">
            <div className="w-full border-b border-gray-200 pb-4 mb-4">
              <div className="font-black text-gray-400 text-xs uppercase mb-4 text-center">Services</div>
              <Link to="/services/landing-pages" className="block text-center text-xl font-bold mb-3 hover:text-neo-blue" onClick={() => setIsOpen(false)}>Landing Pages</Link>
              <Link to="/services/conversion-reports" className="block text-center text-xl font-bold mb-3 hover:text-neo-blue" onClick={() => setIsOpen(false)}>Conversion Reports</Link>
              <Link to="/services/new-site-design" className="block text-center text-xl font-bold mb-3 hover:text-neo-blue" onClick={() => setIsOpen(false)}>New Site Design</Link>
              <Link to="/services/shopify-development" className="block text-center text-xl font-bold mb-3 hover:text-neo-blue" onClick={() => setIsOpen(false)}>Shopify Dev</Link>
              <Link to="/services/mobile-apps" className="block text-center text-xl font-bold hover:text-neo-purple" onClick={() => setIsOpen(false)}>Mobile Apps</Link>
            </div>
            
            <Link to="/case-studies" className="font-black text-3xl hover:text-neo-blue" onClick={() => setIsOpen(false)}>CASE STUDIES</Link>
            <Link to="/about" className="font-black text-3xl hover:text-neo-blue" onClick={() => setIsOpen(false)}>WTF IS ROASTED?</Link>
            
            <Link to="/contact" className="w-full" onClick={() => setIsOpen(false)}>
              <NeoButton fullWidth variant="outline" className="py-4">Book A Call</NeoButton>
            </Link>
            <NeoButton fullWidth variant="primary" className="py-4" onClick={() => {
              setIsOpen(false);
              handleScrollToRoast();
            }}>
              Try Free
            </NeoButton>
          </div>
        </div>
      )}
    </nav>
  );
};
