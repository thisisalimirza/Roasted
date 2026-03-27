import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { NeoButton } from '../components/ui/NeoButton';
import { caseStudiesData } from '../data/caseStudiesContent';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Check,
  X,
  Quote,
  Zap,
  Star,
  ArrowUpRight
} from 'lucide-react';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const study = caseStudiesData.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-4xl font-black">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-neo-blue underline mt-4 inline-block">Back to Case Studies</Link>
      </div>
    );
  }

  const currentIndex = caseStudiesData.findIndex(c => c.slug === slug);
  const nextStudy = caseStudiesData[(currentIndex + 1) % caseStudiesData.length];
  const prevStudy = caseStudiesData[(currentIndex - 1 + caseStudiesData.length) % caseStudiesData.length];

  const colorMap: Record<string, string> = {
    yellow: 'neo-yellow',
    pink: 'neo-pink',
    blue: 'neo-blue',
    green: 'neo-green',
    white: 'gray-200',
  };
  const accentColor = colorMap[study.color] || 'neo-blue';

  return (
    <div className="bg-neo-bg min-h-screen pt-20">

      {/* Hero */}
      <div className={`bg-${accentColor} border-b-2 border-black relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10">
          {/* Breadcrumb */}
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest mb-8 hover:opacity-70 transition-opacity text-black"
          >
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                  {study.industry}
                </span>
                <span className="bg-white/80 text-black px-3 py-1 text-xs font-bold uppercase tracking-widest border border-black">
                  {study.service}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-black mb-6">
                {study.brand}
              </h1>
              <p className="text-xl md:text-2xl font-bold text-black/80 leading-tight max-w-lg">
                {study.headline}
              </p>
            </div>

            {/* Hero Stat */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] text-center rotate-2 hover:rotate-0 transition-transform">
                <TrendingUp size={32} className="mx-auto mb-4 text-black" />
                <div className="text-6xl md:text-8xl font-black text-black leading-none mb-2">
                  {study.heroStat.value}
                </div>
                <div className="font-bold uppercase tracking-widest text-sm text-gray-600">
                  {study.heroStat.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-neo-black text-white border-b-2 border-black py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {study.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-3xl md:text-4xl font-black text-${accentColor} mb-1`}>
                {stat.value}
              </div>
              <div className="font-bold text-xs uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
          <div className="text-center">
            <div className={`text-3xl md:text-4xl font-black text-${accentColor} mb-1`}>
              {study.industry}
            </div>
            <div className="font-bold text-xs uppercase tracking-widest text-gray-400">
              Industry
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl md:text-4xl font-black text-${accentColor} mb-1`}>
              {study.service}
            </div>
            <div className="font-bold text-xs uppercase tracking-widest text-gray-400">
              Service Used
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="bg-white border-b-2 border-black py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000]">
              <X size={24} className="text-red-600" strokeWidth={3} />
            </div>
            <h2 className="text-sm font-black uppercase tracking-widest text-red-600">The Challenge</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
            {study.challenge.title}
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            {study.challenge.body}
          </p>
        </div>
      </div>

      {/* Before / After */}
      <div className={`bg-neo-bg border-b-2 border-black py-20 px-4`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-center mb-16">
            Before <span className="text-gray-400">&</span> After
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Before */}
            <div className="bg-white border-2 border-black p-8 md:p-10">
              <div className="inline-block bg-gray-200 text-gray-600 font-bold px-4 py-1 text-xs uppercase tracking-widest border border-black mb-8">
                Before
              </div>
              <div className="space-y-6">
                {study.beforeAfter.before.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 border border-red-300 rounded-full flex items-center justify-center mt-0.5">
                      <X size={14} className="text-red-500" strokeWidth={3} />
                    </div>
                    <p className="font-medium text-gray-700 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className={`bg-${accentColor}/10 border-2 border-l-0 border-black p-8 md:p-10`}>
              <div className={`inline-block bg-${accentColor} text-black font-bold px-4 py-1 text-xs uppercase tracking-widest border border-black mb-8`}>
                After
              </div>
              <div className="space-y-6">
                {study.beforeAfter.after.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 bg-${accentColor}/30 border border-black rounded-full flex items-center justify-center mt-0.5`}>
                      <Check size={14} className="text-black" strokeWidth={3} />
                    </div>
                    <p className="font-bold text-black leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-white border-b-2 border-black py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-12 h-12 bg-${accentColor} border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000]`}>
              <Zap size={24} className="text-black" />
            </div>
            <h2 className="text-sm font-black uppercase tracking-widest text-black">Our Approach</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
            {study.approach.title}
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-12">
            {study.approach.body}
          </p>

          {/* Key Changes */}
          <div className="bg-neo-bg border-2 border-black p-8">
            <h4 className="font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap size={14} className={`text-${accentColor}`} /> Key Changes Implemented
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.keyChanges.map((change, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-black text-white flex items-center justify-center font-bold text-[10px] mt-0.5">
                    {i + 1}
                  </div>
                  <span className="font-bold text-sm text-gray-800">{change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className={`bg-neo-black text-white border-b-2 border-black py-20 px-4 relative overflow-hidden`}>
        <div className={`absolute top-10 right-10 w-64 h-64 bg-${accentColor} rounded-full blur-[100px] opacity-20`}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-12 h-12 bg-${accentColor} border-2 border-white flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]`}>
              <TrendingUp size={24} className="text-black" />
            </div>
            <h2 className={`text-sm font-black uppercase tracking-widest text-${accentColor}`}>The Results</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
            {study.results.title}
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            {study.results.body}
          </p>

          {/* Results Stats */}
          <div className="grid grid-cols-2 gap-6 mt-12">
            {study.stats.map((stat, i) => (
              <div key={i} className={`border-2 border-${accentColor}/40 p-6 text-center`}>
                <div className={`text-4xl md:text-5xl font-black text-${accentColor} mb-2`}>
                  {stat.value}
                </div>
                <div className="font-bold text-xs uppercase tracking-widest text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {study.testimonial && (
        <div className={`bg-${accentColor} border-b-2 border-black py-20 px-4`}>
          <div className="max-w-4xl mx-auto text-center">
            <Quote size={48} className="mx-auto mb-8 text-black/20" />
            <blockquote className="text-2xl md:text-4xl font-black text-black leading-tight mb-8 tracking-tight">
              "{study.testimonial.quote}"
            </blockquote>
            <div>
              <div className="font-black text-lg text-black">{study.testimonial.author}</div>
              <div className="font-bold text-sm text-black/60">{study.testimonial.role}</div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="bg-white border-b-2 border-black">
        <div className="grid grid-cols-2">
          <Link
            to={`/case-studies/${prevStudy.slug}`}
            className="border-r-2 border-black p-8 md:p-12 hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              <ArrowLeft size={14} /> Previous
            </div>
            <div className="text-xl md:text-2xl font-black uppercase group-hover:text-neo-blue transition-colors">
              {prevStudy.brand}
            </div>
          </Link>
          <Link
            to={`/case-studies/${nextStudy.slug}`}
            className="p-8 md:p-12 hover:bg-gray-50 transition-colors text-right group"
          >
            <div className="flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Next <ArrowRight size={14} />
            </div>
            <div className="text-xl md:text-2xl font-black uppercase group-hover:text-neo-blue transition-colors">
              {nextStudy.brand}
            </div>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-neo-blue text-white border-b-2 border-black py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            Want Results Like {study.brand}?
          </h2>
          <p className="text-xl font-mono mb-8 max-w-2xl mx-auto text-white/80">
            Stop leaving money on the table. Let's find the leaks in your funnel.
          </p>
          <Link to="/contact">
            <NeoButton variant="primary" className="text-lg px-10 py-4 shadow-[6px_6px_0px_0px_#000]">
              Start Your Transformation
            </NeoButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
