import React, { useEffect, useRef } from 'react';

const RevealLine: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.filter = 'blur(0px)';
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        filter: 'blur(4px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export const Manifesto: React.FC = () => {
  return (
    <div className="bg-neo-black text-neo-white py-32 px-4 border-b-4 border-black">
      <div className="max-w-5xl mx-auto">
        <RevealLine>
          <h2 className="text-neo-yellow font-mono font-bold mb-8 uppercase tracking-widest text-sm">Our Philosophy</h2>
        </RevealLine>

        <div className="space-y-12 font-black text-4xl md:text-7xl leading-tight uppercase tracking-tight">
          <RevealLine delay={0}>
            <p>
              Pretty websites <span className="text-gray-600 line-through decoration-4 decoration-neo-pink">don't sell.</span>
            </p>
          </RevealLine>
          <RevealLine delay={0}>
            <p>
              Clarity <span className="text-neo-green">sells.</span>
            </p>
          </RevealLine>
          <RevealLine delay={0}>
            <p>
              Speed <span className="text-neo-green">sells.</span>
            </p>
          </RevealLine>
          <RevealLine delay={0}>
            <p className="text-neo-white">
              We strip away the vanity metrics and the fluff to reveal the raw conversion engine underneath.
            </p>
          </RevealLine>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t-2 border-white/20 pt-8">
           {[
             { title: "Data > Vibes", desc: "We don't care if you 'like' the color blue. We care if users click the button." },
             { title: "Brutal Honesty", desc: "We will hurt your feelings to save your business. It's tough love." },
             { title: "Speed Kills", desc: "Audits delivered in 48 hours. Implementation guides included." }
           ].map((item, i) => (
             <RevealLine key={i} delay={i * 150}>
               <div>
                 <h3 className="font-bold text-xl mb-2 text-neo-pink">{item.title}</h3>
                 <p className="font-mono text-sm text-gray-400">{item.desc}</p>
               </div>
             </RevealLine>
           ))}
        </div>
      </div>
    </div>
  );
};
