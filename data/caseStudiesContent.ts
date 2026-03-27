export interface CaseStudyStat {
  label: string;
  value: string;
}

export interface CaseStudySection {
  title: string;
  body: string;
}

export interface CaseStudyData {
  brand: string;
  slug: string;
  headline: string;
  industry: string;
  service: string;
  stats: CaseStudyStat[];
  heroStat: { value: string; label: string };
  desc: string;
  tags: string[];
  color: "yellow" | "pink" | "blue" | "green" | "white";
  challenge: CaseStudySection;
  approach: CaseStudySection;
  results: CaseStudySection;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  beforeAfter: {
    before: string[];
    after: string[];
  };
  keyChanges: string[];
}

export const caseStudiesData: CaseStudyData[] = [
  {
    brand: "The Oodie",
    slug: "the-oodie",
    headline: "Generated millions in new monthly revenue",
    industry: "Apparel",
    service: "Conversion Report",
    stats: [
      { label: "Increased CVR", value: "3 to 5%" },
      { label: "Payback Time", value: "11 Mins" }
    ],
    heroStat: { value: "+66%", label: "Conversion Rate Lift" },
    desc: "Optimized the bundle builder flow to reduce decision fatigue.",
    tags: ["Apparel", "DTC", "CRO"],
    color: "yellow",
    challenge: {
      title: "Too Many Choices, Not Enough Conversions",
      body: "The Oodie had explosive traffic — millions of sessions per month from paid and organic. But their bundle builder was causing massive drop-off. Customers were overwhelmed by color options, size selectors, and upsell prompts all fighting for attention on one screen. The mobile experience was especially painful: users had to scroll endlessly to configure a simple 2-pack. The result? A 3% conversion rate that was leaving millions on the table every single month."
    },
    approach: {
      title: "Simplify The Flow, Amplify The Revenue",
      body: "We started with a full conversion audit — analyzing heatmaps, session recordings, and GA4 funnel data. The data told a clear story: users were abandoning at the bundle configuration step. We redesigned the bundle builder into a guided, step-by-step flow that reduced cognitive load. Instead of showing everything at once, we broke the process into bite-sized decisions: pick your style, pick your size, add to cart. We also added real-time social proof ('Sarah from Melbourne just bought this!') and urgency triggers tied to actual inventory data."
    },
    results: {
      title: "Millions In New Monthly Revenue",
      body: "Within 11 minutes of going live, the new bundle builder had already generated its first incremental sale. Conversion rate jumped from 3% to 5% across all traffic sources. On their paid traffic alone, this translated to millions in additional monthly revenue — with zero increase in ad spend. The simplified mobile flow saw the biggest gains, with mobile CVR increasing by over 80%."
    },
    testimonial: {
      quote: "Roasted's audit paid for itself in literally 11 minutes. The bundle builder redesign was a game-changer for our business.",
      author: "Davie Fogarty",
      role: "Founder, The Oodie"
    },
    beforeAfter: {
      before: [
        "All options shown on one overwhelming screen",
        "No visual hierarchy in the bundle builder",
        "Generic 'Add to Cart' with no urgency",
        "Mobile required excessive scrolling"
      ],
      after: [
        "Guided step-by-step bundle flow",
        "Clear visual hierarchy with progress indicators",
        "Social proof + inventory-based urgency triggers",
        "Mobile-optimized with minimal scrolling"
      ]
    },
    keyChanges: [
      "Redesigned bundle builder into step-by-step flow",
      "Added real-time social proof notifications",
      "Implemented inventory-based urgency triggers",
      "Optimized mobile layout to reduce scroll depth by 60%",
      "Simplified color/size selection UI",
      "Added progress indicator to reduce abandonment"
    ]
  },
  {
    brand: "Fresh Chile Co",
    slug: "fresh-chile-co",
    headline: "Saw a 190% increase in sales after working with Roasted",
    industry: "Food & Beverage",
    service: "Full Site Redesign",
    stats: [
      { label: "Conversion Lift", value: "78%" },
      { label: "Total Orders", value: "+271%" }
    ],
    heroStat: { value: "+190%", label: "Sales Increase" },
    desc: "Complete overhaul of the PDP to highlight social proof and scarcity.",
    tags: ["Food & Bev", "Redesign"],
    color: "pink",
    challenge: {
      title: "A Premium Product Lost In A Generic Template",
      body: "Fresh Chile Co had an incredible product — authentic Hatch green chile shipped straight from New Mexico. But their website looked like every other Shopify store. The product pages had tiny images, buried reviews, and no sense of the craftsmanship behind the product. Customers who tasted the chile became lifelong fans, but the website wasn't converting first-time visitors into first-time buyers."
    },
    approach: {
      title: "Tell The Story, Then Sell The Product",
      body: "We audited every page and found the PDP was the biggest bottleneck. We redesigned it from scratch — leading with large, mouth-watering imagery and the 'roasted in Hatch, NM' origin story. We pulled review highlights above the fold and added a scarcity bar showing real-time inventory. The collection page got a complete overhaul with better filtering and a 'heat level' visual system that made browsing fun and intuitive."
    },
    results: {
      title: "From Niche To Mainstream In 90 Days",
      body: "Within 90 days of launching the redesign, Fresh Chile Co saw a 190% increase in total sales. Conversion rate jumped 78% and total orders increased by 271%. The new PDP design became a template they rolled out across all product lines, compounding the gains."
    },
    testimonial: {
      quote: "Roasted understood our brand better than agencies that had worked with us for years. The results speak for themselves.",
      author: "Michael Franzoy",
      role: "CEO, Fresh Chile Co"
    },
    beforeAfter: {
      before: [
        "Generic Shopify template with small images",
        "Reviews buried below the fold",
        "No brand story or origin messaging",
        "Confusing collection page layout"
      ],
      after: [
        "Hero-sized product imagery with lifestyle shots",
        "Review highlights and star rating above the fold",
        "Origin story woven into the buying experience",
        "Heat-level visual system for easy browsing"
      ]
    },
    keyChanges: [
      "Redesigned PDP with hero imagery and origin story",
      "Added real-time inventory scarcity indicators",
      "Created heat-level visual browsing system",
      "Pulled social proof above the fold",
      "Optimized collection page filtering",
      "Implemented cross-sell recommendations"
    ]
  },
  {
    brand: "Crossnet",
    slug: "crossnet",
    headline: "Saw a 20% increase in Add to Cart post-audit",
    industry: "Sports & Recreation",
    service: "Conversion Report",
    stats: [
      { label: "Add to Cart", value: "+20%" },
      { label: "Happiness", value: "100%" }
    ],
    heroStat: { value: "+20%", label: "Add to Cart Rate" },
    desc: "Simplified the game rules section to lower barrier to entry.",
    tags: ["Sports", "Audit"],
    color: "blue",
    challenge: {
      title: "A New Sport Nobody Knew How To Play",
      body: "Crossnet invented a brand new sport — four-way volleyball. The product was exciting, but visitors had a fundamental question: 'How do I even play this?' The existing rules section was a wall of text that made the game seem complicated. Potential buyers were bouncing because the barrier to entry felt too high. If you can't visualize yourself playing, you won't buy."
    },
    approach: {
      title: "Make It Look Easy, Make It Look Fun",
      body: "We conducted a conversion audit focused on the gap between interest and purchase. The fix was clear: we needed to make the game feel approachable. We redesigned the rules section into a visual, 3-step 'How to Play' guide with illustrations and a 30-second video loop. We also restructured the PDP to lead with lifestyle video of people laughing and playing, proving the fun before explaining the rules."
    },
    results: {
      title: "Lower Barrier, Higher Conversions",
      body: "The simplified game rules and lifestyle-first approach drove a 20% increase in Add to Cart rate. Bounce rate on the PDP dropped significantly as users spent more time engaging with the visual content. The team reported a noticeable increase in customer confidence at checkout, with fewer abandoned carts."
    },
    beforeAfter: {
      before: [
        "Wall of text explaining game rules",
        "Static product images only",
        "Rules section felt intimidating",
        "No social proof from real players"
      ],
      after: [
        "Visual 3-step 'How to Play' guide",
        "Lifestyle video of real gameplay",
        "Rules feel simple and approachable",
        "UGC and player testimonials integrated"
      ]
    },
    keyChanges: [
      "Redesigned rules into visual 3-step guide",
      "Added 30-second gameplay video loop",
      "Led PDP with lifestyle content over product shots",
      "Integrated user-generated content from players",
      "Simplified the value proposition above the fold",
      "Added FAQ section addressing common objections"
    ]
  },
  {
    brand: "Frontend Simplified",
    slug: "frontend-simplified",
    headline: "Improved their enrolment by 70% with Roasted",
    industry: "Education",
    service: "Landing Page Design",
    stats: [
      { label: "CVR Increase", value: "32-55%" },
      { label: "Enrolment", value: "+70%" }
    ],
    heroStat: { value: "+70%", label: "Enrolment Increase" },
    desc: "Restructured the landing page to focus on student outcomes.",
    tags: ["Education", "SaaS"],
    color: "green",
    challenge: {
      title: "Selling Education Without Showing Outcomes",
      body: "Frontend Simplified was a coding bootcamp with incredible student outcomes — graduates were landing jobs at top tech companies. But their landing page was all about curriculum details and instructor bios. They were selling features (lessons, modules, technologies) instead of outcomes (jobs, salaries, career changes). The page converted, but nowhere near its potential given the quality of the product."
    },
    approach: {
      title: "Lead With Proof, Not Promises",
      body: "We restructured the entire landing page around one question: 'Will this actually get me a job?' We moved student success stories and salary data above the fold. We replaced the curriculum breakdown with a visual 'journey' showing the path from beginner to hired. The CTA was reframed from 'Enroll Now' to 'Start Your Career Change' — matching the emotional driver behind the purchase."
    },
    results: {
      title: "Outcomes Sell Better Than Features",
      body: "Enrolment increased by 70% within the first month. The landing page CVR improved between 32-55% depending on the traffic source. Paid traffic saw the biggest gains because the new page better matched the intent of cold visitors seeing ads for the first time."
    },
    testimonial: {
      quote: "We were so focused on our curriculum that we forgot to show people the result. Roasted flipped the script and our numbers went through the roof.",
      author: "Danny Thompson",
      role: "Founder, Frontend Simplified"
    },
    beforeAfter: {
      before: [
        "Curriculum-focused landing page",
        "Instructor bios as main trust signal",
        "Generic 'Enroll Now' CTA",
        "No visible student outcomes or salary data"
      ],
      after: [
        "Outcome-driven hero with salary data",
        "Student success stories above the fold",
        "Visual journey from beginner to hired",
        "'Start Your Career Change' CTA"
      ]
    },
    keyChanges: [
      "Restructured page around student outcomes",
      "Added salary data and job placement stats above fold",
      "Created visual career journey timeline",
      "Reframed CTA from feature-based to outcome-based",
      "Added video testimonials from hired graduates",
      "Implemented social proof counter showing live enrolments"
    ]
  },
  {
    brand: "Soshe Beauty",
    slug: "soshe-beauty",
    headline: "Nearly 2x'd their conversion rate",
    industry: "Beauty",
    service: "Conversion Report",
    stats: [
      { label: "Conversion", value: "3 to 5%" },
      { label: "Payback Time", value: "2 Weeks" }
    ],
    heroStat: { value: "~2x", label: "Conversion Rate" },
    desc: "Cleaned up the navigation and introduced visual hierarchy to collections.",
    tags: ["Beauty", "Shopify"],
    color: "white",
    challenge: {
      title: "Beautiful Products, Confusing Experience",
      body: "Soshe Beauty had stunning products and strong brand photography, but the website was working against them. The navigation had too many top-level categories, the collection pages lacked filtering, and the PDP buried key information like ingredients and shade matching below the fold. Customers were interested but couldn't find what they needed fast enough."
    },
    approach: {
      title: "Clear The Path To Purchase",
      body: "Our conversion audit revealed that 60% of mobile users never scrolled past the first viewport on collection pages. We simplified the navigation from 12 top-level items to 5, introduced a smart filtering system with 'skin type' and 'concern' filters, and restructured the PDP to surface key buying information — shade matching, ingredients, and reviews — in a tabbed layout above the fold."
    },
    results: {
      title: "Clarity Converts",
      body: "Conversion rate nearly doubled, going from 3% to 5% within two weeks of implementation. The simplified navigation reduced bounce rate on collection pages by 35%, and the new PDP layout increased average time on page — meaning customers were actually engaging with the content instead of bouncing."
    },
    beforeAfter: {
      before: [
        "12 top-level navigation categories",
        "No collection page filtering",
        "Key product info buried below fold",
        "Cluttered mobile experience"
      ],
      after: [
        "5 clear navigation categories",
        "Smart filtering by skin type and concern",
        "Tabbed PDP with key info above fold",
        "Clean, focused mobile experience"
      ]
    },
    keyChanges: [
      "Simplified navigation from 12 to 5 categories",
      "Added skin type and concern-based filters",
      "Created tabbed PDP layout for key info",
      "Implemented shade matching tool",
      "Restructured collection page grid",
      "Optimized mobile viewport for engagement"
    ]
  },
  {
    brand: "Wandering Bear",
    slug: "wandering-bear",
    headline: "Saw a 30% decrease in CPA with our landing page",
    industry: "Coffee",
    service: "Landing Page Design",
    stats: [
      { label: "CVR Increase", value: "34%" },
      { label: "Lower CPA", value: "30%" }
    ],
    heroStat: { value: "-30%", label: "Cost Per Acquisition" },
    desc: "Built a dedicated landing page for their cold traffic campaigns.",
    tags: ["Coffee", "Landing Page"],
    color: "yellow",
    challenge: {
      title: "Sending Cold Traffic To A Warm Page",
      body: "Wandering Bear was scaling their paid acquisition aggressively, but their CPA kept climbing. The problem? They were sending cold Facebook and Instagram traffic straight to their homepage — a page designed for people who already knew the brand. Cold visitors were landing on a page full of jargon ('cold brew on tap') with no context for why they should care or what made Wandering Bear different."
    },
    approach: {
      title: "Build The Bridge Between Ad And Cart",
      body: "We designed a dedicated cold-traffic landing page that matched the messaging and intent of their top-performing ads. The page led with the problem ('tired of weak, watery coffee?'), introduced the product as the solution, and stacked social proof — press logos, review counts, and taste test results — to build instant credibility. The page had one CTA and zero navigation links to prevent leaking."
    },
    results: {
      title: "Same Spend, Way More Customers",
      body: "The dedicated landing page drove a 34% increase in conversion rate and a 30% decrease in CPA — without changing a single ad. By matching the landing experience to the ad intent, we eliminated the disconnect that was causing cold visitors to bounce. The page became their default destination for all cold traffic campaigns."
    },
    beforeAfter: {
      before: [
        "Cold traffic sent to generic homepage",
        "Multiple navigation options causing leaks",
        "No message match with ad creative",
        "Brand jargon without context"
      ],
      after: [
        "Dedicated landing page per campaign",
        "Single focused CTA, no navigation",
        "Message match with top-performing ads",
        "Problem-solution storytelling for cold traffic"
      ]
    },
    keyChanges: [
      "Built dedicated cold-traffic landing page",
      "Matched page messaging to ad creative",
      "Removed all navigation to prevent leaking",
      "Stacked social proof (press, reviews, taste tests)",
      "Simplified to single CTA above and below fold",
      "Added comparison section vs. competitor products"
    ]
  },
  {
    brand: "Braxley Bands",
    slug: "braxley-bands",
    headline: "Increased conversion by 40% with Roasted",
    industry: "Accessories",
    service: "Conversion Report",
    stats: [
      { label: "Site-Wide CVR", value: "+40%" },
      { label: "AOV In-Cart", value: "+8%" }
    ],
    heroStat: { value: "+40%", label: "Site-Wide CVR" },
    desc: "Implemented a sticky add-to-cart and smart upsell drawer.",
    tags: ["Accessories", "Mobile UX"],
    color: "pink",
    challenge: {
      title: "Mobile Shoppers Losing The CTA",
      body: "Braxley Bands — premium Apple Watch bands — had a beautifully designed product page, but the CTA disappeared on scroll. On mobile (which was 75% of their traffic), once a user scrolled past the hero image to read reviews or check details, the 'Add to Cart' button was gone. Users had to scroll all the way back up to buy. Every extra scroll is a chance to lose the sale."
    },
    approach: {
      title: "Keep The CTA In Sight, Boost The Cart",
      body: "Two key changes. First, we added a sticky 'Add to Cart' bar that follows the user on scroll — always visible, never intrusive. Second, we redesigned the cart drawer with smart upsells based on what's already in the cart (bought a sport band? Here's a matching case). We also cleaned up the PDP layout, reducing the distance between key decision points."
    },
    results: {
      title: "Always-On CTA, Always-Up Revenue",
      body: "Site-wide conversion rate increased by 40%. The smart upsell drawer added an 8% lift to average order value. The sticky CTA alone accounted for the majority of the conversion lift, proving that sometimes the biggest wins come from the simplest changes — just keeping the buy button visible."
    },
    beforeAfter: {
      before: [
        "CTA disappears on mobile scroll",
        "Basic cart with no upsells",
        "Long PDP with distant decision points",
        "No urgency or scarcity signals"
      ],
      after: [
        "Sticky add-to-cart bar on all pages",
        "Smart upsell drawer based on cart contents",
        "Condensed PDP with tighter layout",
        "Low stock indicators on popular colors"
      ]
    },
    keyChanges: [
      "Implemented sticky add-to-cart bar for mobile",
      "Built smart upsell engine in cart drawer",
      "Condensed PDP layout to reduce scroll depth",
      "Added low-stock indicators per color variant",
      "Optimized image gallery for faster swiping",
      "Simplified variant selection UI"
    ]
  },
  {
    brand: "Roo & You",
    slug: "roo-and-you",
    headline: "Increased new customers by 25% while doubling ad spend",
    industry: "Home Goods",
    service: "Landing Page Design",
    stats: [
      { label: "Increased CVR", value: "40%" },
      { label: "New Cust.", value: "+25%" }
    ],
    heroStat: { value: "+25%", label: "New Customers" },
    desc: "Streamlined the checkout process for high-traffic drops.",
    tags: ["Home Goods", "Scale"],
    color: "blue",
    challenge: {
      title: "Scaling Spend Without Scaling Conversions",
      body: "Roo & You was ready to scale. They doubled their ad budget, but new customer acquisition wasn't keeping pace. The issue was their checkout flow — it was designed for returning customers who already had accounts, not for the flood of first-time visitors coming from paid ads. New users were hitting friction at every step: account creation prompts, confusing shipping options, and a clunky mobile checkout."
    },
    approach: {
      title: "Build For The First-Timer",
      body: "We redesigned the checkout experience with new customers in mind. Guest checkout became the default path. We simplified shipping to a single clear option per speed tier. On mobile, we reduced the checkout to a single-page flow with auto-fill and express payment options (Apple Pay, Shop Pay) prominently displayed. We also added trust signals — money-back guarantee, shipping timeline, and review count — at every step."
    },
    results: {
      title: "Double The Spend, Triple The Impact",
      body: "New customer acquisition increased by 25% — even as ad spend doubled. Overall conversion rate jumped 40%. The streamlined checkout reduced cart abandonment significantly, and the express payment options accounted for over 40% of all mobile transactions. The improvements allowed Roo & You to scale their ad spend confidently, knowing the funnel could handle the volume."
    },
    beforeAfter: {
      before: [
        "Account creation wall at checkout",
        "Complex multi-page checkout flow",
        "No express payment options visible",
        "Checkout designed for returning customers"
      ],
      after: [
        "Guest checkout as default path",
        "Single-page mobile checkout",
        "Apple Pay and Shop Pay prominently displayed",
        "Trust signals at every checkout step"
      ]
    },
    keyChanges: [
      "Made guest checkout the default experience",
      "Consolidated to single-page mobile checkout",
      "Added Apple Pay and Shop Pay as primary options",
      "Inserted trust signals at every checkout step",
      "Simplified shipping to clear speed tiers",
      "Removed account creation friction for new visitors"
    ]
  }
];
