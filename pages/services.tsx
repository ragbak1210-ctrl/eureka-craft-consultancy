import Head from 'next/head';
import Link from 'next/link';

export default function Services() {

const services = [

{
title: "THE CLARITY X-RAY™",

problem: `Most businesses invest in marketing without understanding where their brand is misaligned.

They fix content, campaigns, and platforms — but the real issues remain hidden.

This leads to inconsistent messaging, weak positioning, and low-trust visibility.

Without diagnosis, growth becomes trial and error.`,

approach: `The Clarity X-Ray™ is Eureka Craft’s proprietary blindspot audit.

We analyze:

• Brand positioning
• Messaging clarity
• Digital presence
• Website narrative
• LinkedIn positioning
• Audience alignment
• Funnel structure

We identify the gaps between what you intend to communicate and what your audience actually perceives.`,

outcome: `You receive:

• Blindspot Report
• Narrative Diagnosis
• Alignment Map
• Flow Plan
• Priority Action Framework

This becomes the foundation for all future growth decisions.`
},

{
title: "BRAND POSITIONING & NARRATIVE STRATEGY",

problem: `Many businesses struggle to explain what makes them different.

Their messaging sounds similar to competitors, and their story fails to resonate with decision-makers.

Without strong positioning, marketing becomes expensive and ineffective.`,

approach: `We work with leadership teams to define:

• Brand positioning
• Core narrative
• Market differentiation
• Strategic messaging
• Brand story structure

We translate expertise into language that builds trust and clarity.`,

outcome: `• Clear positioning
• Stronger differentiation
• More confident communication
• Higher trust from prospects
• More effective marketing`
},

{
title: "MESSAGING ARCHITECTURE & BRAND VOICE",

problem: `Brands often sound different across platforms.

Websites, LinkedIn posts, ads, and sales conversations lack consistency.

This inconsistency reduces credibility.`,

approach: `We build structured messaging systems including:

• Brand voice guidelines
• Tone frameworks
• Vocabulary systems
• Narrative flow structures
• Content language standards`,

outcome: `• Consistent brand voice
• Higher trust
• Clear communication
• Easier content creation`
},

{
title: "LINKEDIN THOUGHT LEADERSHIP SYSTEMS",

problem: `Most founders post consistently but still struggle to build authority.

Content lacks narrative structure and strategic positioning.`,

approach: `We design LinkedIn narrative systems including:

• Founder positioning
• Authority themes
• Content frameworks
• Narrative sequencing
• Execution systems`,

outcome: `• Stronger authority
• Better engagement
• Higher-quality inbound leads
• Stronger personal brand`
},

{
title: "CONTENT STRATEGY & NARRATIVE SYSTEMS",

problem: `Most content is created randomly without strategic direction.

Posting becomes a routine instead of a growth system.`,

approach: `We build structured content ecosystems including:

• Narrative themes
• Content pillars
• Platform strategy
• Publishing systems
• Repurposing frameworks`,

outcome: `• Consistent growth
• Stronger brand recall
• Better engagement
• Long-term visibility`
},

{
title: "SOCIAL MEDIA STRATEGY & EXECUTION",

problem: `Many brands post frequently but fail to build recognition.

Content looks active but not meaningful.`,

approach: `We manage narrative-aligned content across platforms including:

• LinkedIn
• Instagram
• Facebook`,

outcome: `• Consistent visibility
• Stronger engagement
• Better audience alignment`
},

{
title: "SEO & ORGANIC VISIBILITY",

problem: `Many businesses invest in SEO without aligning messaging and content.

Traffic increases but conversion does not.`,

approach: `We combine SEO strategy with brand clarity including:

• Keyword strategy
• Content optimization
• Technical SEO
• Authority building`,

outcome: `• Better search rankings
• Higher-quality traffic
• Stronger authority
• Better conversions`
},

{
title: "WEBSITE STRATEGY & CONTENT",

problem: `Most websites describe the business but fail to communicate value clearly.

Visitors leave without understanding the brand.`,

approach: `We redesign websites around clarity including:

• Messaging structure
• Page architecture
• Content rewriting
• Conversion flow`,

outcome: `• Clearer websites
• Higher conversion rates
• Stronger brand perception`
},

{
title: "DIGITAL MARKETING ALIGNMENT",

problem: `Paid ads, content, and branding often operate separately.

This creates fragmented marketing.`,

approach: `We align:

• Paid campaigns
• Content strategy
• Messaging
• Funnels`,

outcome: `• Higher ROI
• Consistent messaging
• Stronger campaigns`
},

{
title: "LEAD GENERATION & FUNNEL STRATEGY",

problem: `Many businesses generate leads but fail to convert them.

Funnels lack clarity and structure.`,

approach: `We design structured funnels including:

• Lead capture systems
• Nurture sequences
• Conversion flows
• Funnel messaging`,

outcome: `• Better leads
• Higher conversion rates
• Predictable pipeline`
},

{
title: "BRAND CONSULTING & GROWTH ADVISORY",

problem: `Leadership teams often lack an external strategic perspective.

Brand decisions become reactive instead of strategic.`,

approach: `We work as ongoing brand consultants including:

• Strategic advisory
• Brand decisions
• Messaging reviews
• Campaign direction`,

outcome: `• Better decisions
• Stronger positioning
• Long-term growth clarity`
}

];

return (

<>

<Head>

<title>Services — Eureka Craft™</title>

<meta
name="description"
content="Clarity-driven consulting services including positioning, messaging, SEO, LinkedIn authority, and brand strategy."
/>

</Head>



{/* HERO */}

<section className="hero-premium bg-animated-gradient bg-hero-premium relative">

<div className="yellow-glow top-[-120px] left-[-120px]"></div>
<div className="soft-light top-[200px] right-[20%]"></div>
<div className="consulting-dots bottom-[60px] left-[10%]"></div>

<div className="container-premium">

<p className="text-accent font-semibold mb-6 tracking-wide">

CONSULTING AREAS

</p>


<h1 className="text-6xl md:text-7xl font-bold heading-luxury mb-10">

Clarity Before Growth

</h1>


<p className="text-soft text-xl mb-6">

Eureka Craft aligns positioning, messaging,
and narrative before marketing execution begins.

</p>


<p className="text-soft">

Every service exists to strengthen brand clarity
and long-term trust.

</p>


</div>

</section>



{/* INTRO */}

<section className="section-premium bg-white reveal">

<div className="container-premium">

<div className="content-narrow">

<h2 className="text-5xl font-bold mb-6">

Strategy Before Execution

</h2>

<div className="section-divider mb-10"></div>


<p className="text-premium mb-6">

Many businesses invest in marketing without first
understanding where clarity breaks down.

</p>

<p className="text-premium mb-6">

They redesign websites.
They experiment with platforms.
They increase content output.

</p>


<p className="text-xl font-semibold">

But growth rarely improves without alignment.

</p>

</div>

</div>

</section>



{/* SERVICES */}

<section className="section-premium bg-grid relative">

<div className="yellow-glow bottom-[-200px] right-[10%]"></div>
<div className="circle-outline top-[50px] left-[10%]"></div>

<div className="container-premium">

{services.map((service,index)=>(

<div
key={index}
className="card-premium border border-gray-200 bg-white reveal"
>

<h2 className="text-3xl md:text-4xl font-bold mb-12">

{service.title}

</h2>


<div className="grid md:grid-cols-3 gap-12">


<div>

<h3 className="text-accent font-semibold mb-4 uppercase text-sm tracking-wide">

Problem

</h3>

<p className="text-gray-600 whitespace-pre-line leading-relaxed">

{service.problem}

</p>

</div>



<div>

<h3 className="text-accent font-semibold mb-4 uppercase text-sm tracking-wide">

Approach

</h3>

<p className="text-gray-600 whitespace-pre-line leading-relaxed">

{service.approach}

</p>

</div>



<div>

<h3 className="text-accent font-semibold mb-4 uppercase text-sm tracking-wide">

Outcome

</h3>

<p className="text-gray-700 whitespace-pre-line leading-relaxed font-medium">

{service.outcome}

</p>

</div>


</div>

</div>

))}

</div>

</section>



{/* FINAL CTA */}

<section className="section-premium bg-black text-white">

<div className="container-premium text-center">

<h2 className="text-5xl font-bold mb-8">

Start With The Clarity X-Ray™

</h2>


<p className="text-xl text-gray-300 mb-10">

Clarity transforms how your brand is understood.

</p>


<Link
href="/clarity-xray"
className="cta-accent inline-block">

Start The Clarity X-Ray™

</Link>


</div>

</section>



</>

);

}
