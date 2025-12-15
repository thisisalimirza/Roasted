import { Layout, FileText, Layers, Code, Search, PenTool, Monitor, Rocket, MessageSquare, Zap, ShieldCheck, ShoppingCart, Smartphone } from 'lucide-react';

export const servicesData = {
  "landing-pages": {
    title: "Landing Page Design",
    headline: "High-Performance Landing Pages For High-Growth Brands.",
    description: "Stop sending paid traffic to your homepage. We build dedicated, conversion-focused landing pages that weave your brand story into a hardcore sales argument.",
    price: "Starting at $2,500",
    color: "pink",
    icon: Layout,
    painPoints: [
      { title: "Low Conversion", desc: "Your current pages look nice but don't sell. Visitors bounce before they understand the value." },
      { title: "Generic Templates", desc: "You're using a 'one-size-fits-all' template that makes you look like a dropshipper." },
      { title: "Ad Spend Waste", desc: "You're burning cash on ads that click through to a leaking bucket." }
    ],
    features: [
      "Deep-Dive Strategy Session",
      "Conversion Copywriting",
      "Mobile-First UX Design",
      "High-Fidelity Figma Files",
      "Custom Iconography",
      "2 Rounds of Revisions"
    ],
    process: [
      { title: "Discovery & Audit", desc: "We analyze your current performance and competitors." },
      { title: "Wireframe & Copy", desc: "We build the skeleton and the sales argument." },
      { title: "High-Fi Design", desc: "We apply your brand layer and polish the visuals." },
      { title: "Handoff", desc: "You get developer-ready assets and documentation." }
    ]
  },
  "conversion-reports": {
    title: "Conversion Reports",
    headline: "The Blueprint To Fix Your Funnel.",
    description: "A comprehensive, no-mercy audit of your entire website. We analyze every URL (Home, Collections, Product, Cart, Checkout) to find exactly where you're bleeding revenue. You get a massive multi-page Figma file with high-fidelity redesigns for every friction point found.",
    price: "$2,250 One-Time",
    color: "yellow",
    icon: FileText,
    painPoints: [
      { title: "Blind Spots", desc: "You're too close to your product. You can't see the friction anymore." },
      { title: "Data Without Action", desc: "You have Google Analytics, but you don't know *why* the numbers are down." },
      { title: "Dev Gridlock", desc: "You don't know what to build next to move the needle." }
    ],
    features: [
      "Every URL Audited (Home to Checkout)",
      "High-Fidelity Figma Redesigns",
      "Heuristic & Heatmap Analysis",
      "Competitor Benchmarking",
      "Prioritized Dev Action Plan",
      "48-Hour Turnaround"
    ],
    process: [
      { title: "Data Access", desc: "We plug into your GA4 and Heatmaps (if available) to see real user behavior." },
      { title: "The Roast", desc: "We analyze every page type on Mobile and Desktop, documenting every friction point." },
      { title: "The Fix", desc: "We design the solutions in Figma. Not just notes—actual UI you can build." },
      { title: "Handoff", desc: "You get the master file and a video walkthrough explaining exactly what to change." }
    ]
  },
  "new-site-design": {
    title: "New Site Design",
    headline: "E-Commerce Experiences That Actually Sell.",
    description: "Time for a refresh? We design complete e-commerce experiences that balance brand storytelling with hardcore conversion tactics. Don't just look good, sell good.",
    price: "Starting at $8,000",
    color: "blue",
    icon: Layers,
    painPoints: [
      { title: "Outdated Aesthetics", desc: "Your brand has evolved, but your site is stuck in 2019." },
      { title: "Clunky Navigation", desc: "Users get lost trying to find products. Simplicity sells." },
      { title: "Mobile Failure", desc: "Your desktop site is okay, but your mobile experience is a disaster." }
    ],
    features: [
      "Full Site Strategy",
      "Homepage, PLP, PDP, About, Blog",
      "Cart & Checkout Optimization",
      "Design System Creation",
      "Interactive Prototypes",
      "Style Guide"
    ],
    process: [
      { title: "Immersion", desc: "We become experts in your brand and customer." },
      { title: "Architecture", desc: "We map out the perfect user flow." },
      { title: "Design", desc: "We craft every pixel for impact and clarity." },
      { title: "Prototype", desc: "We test the flow before a single line of code is written." }
    ]
  },
  "shopify-development": {
    title: "Shopify Development",
    headline: "Pixel-Perfect Code. Zero Bloat.",
    description: "Pixel-perfect implementation of our designs. We build lightning-fast, accessible, and easy-to-manage Shopify themes. No bloatware, just clean Liquid code.",
    price: "Starting at $5,000",
    color: "green",
    icon: Code,
    painPoints: [
      { title: "Slow Load Times", desc: "Your theme is bogged down by apps and bad code." },
      { title: "Broken Layouts", desc: "Your current dev breaks things every time they fix something." },
      { title: "Hard to Edit", desc: "You can't change a simple image without calling a developer." }
    ],
    features: [
      "Custom Theme Development",
      "Speed Optimization",
      "App Integrations",
      "Pixel-Perfect Implementation",
      "QA & Testing",
      "Post-Launch Support"
    ],
    process: [
      { title: "Tech Stack Review", desc: "We audit your apps and requirements." },
      { title: "Development", desc: "We build on a clean, modern 2.0 theme." },
      { title: "Migration", desc: "We handle your data and content safely." },
      { title: "Launch", desc: "We flip the switch and monitor performance." }
    ]
  },
  "mobile-apps": {
    title: "Mobile App Build",
    headline: "Stop Renting Reach. Own The Home Screen.",
    description: "Turn your best customers into obsessed loyalists. We build native iOS & Android apps that bypass the spam folder with high-converting push notifications.",
    price: "Starting at $10,000",
    color: "purple",
    icon: Smartphone,
    painPoints: [
      { title: "Email Is Dead", desc: "Open rates are tanking. SMS is expensive. Push notifications have a 90% view rate. Do the math." },
      { title: "Retention Leak", desc: "Mobile web visitors are distracted. App users convert 3x higher because they are locked in." },
      { title: "Rent vs Own", desc: "Stop renting your audience from Zuckerberg. Own the real estate on their device." }
    ],
    features: [
      "Native iOS & Android App",
      "Unlimited Push Notifications",
      "One-Tap Checkout",
      "Wishlist & Loyalty Integration",
      "App Store Optimization",
      "Klaviyo Sync"
    ],
    process: [
      { title: "Strategy", desc: "We define the exclusive value prop. Why should they download?" },
      { title: "Design", desc: "We adapt your store for a native, gesture-based experience." },
      { title: "Build", desc: "We build for iOS and Android simultaneously." },
      { title: "Launch", desc: "We handle the strict Apple review process so you don't have to." }
    ]
  }
};