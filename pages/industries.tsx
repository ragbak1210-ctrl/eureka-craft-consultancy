import Head from 'next/head';
import Link from 'next/link';

export default function Industries() {

const industries = [

{
name: 'Consulting & Professional Services',
blindspots: [
'Expertise without narrative clarity',
'Generic service descriptions',
'Weak differentiation'
],
fixes: [
'Authority-driven positioning',
'Narrative-led LinkedIn presence',
'Structured service messaging'
]
},

{
name: 'FMCG & Consumer Brands',
blindspots: [
'Strong products, weak storytelling',
'Campaign-driven visibility without brand depth',
'Disconnected online narrative'
],
fixes: [
'Unified brand storytelling',
'Retail + consumer narrative alignment',
'Trust-led content systems'
]
},

{
name: 'Real Estate & Infrastructure',
blindspots: [
'Project marketing without brand identity',
'Visual-first but narrative-poor communication',
'Trust signals missing'
],
fixes: [
'Developer brand positioning',
'Narrative-led project marketing',
'Authority-driven visibility'
]
},

{
name: 'BFSI & Financial Services',
blindspots: [
'Technical messaging that confuses clients',
'Authority not communicated online',
'Low trust perception'
],
fixes: [
'Trust-first communication frameworks',
'Simplified financial storytelling',
'Authority positioning'
]
},

{
name: 'Technology & SaaS Companies',
blindspots: [
'Product-focused messaging',
'Feature-heavy communication',
'Weak founder narrative'
],
fixes: [
'Product-to-narrative translation',
'Founder-led storytelling',
'Positioning clarity'
]
},

{
name: 'Education & EdTech',
blindspots: [
'Emotional messaging without differentiation',
'Generic positioning',
'Weak thought leadership'
],
fixes: [
'Institutional storytelling',
'Authority positioning',
'Parent/student trust messaging'
]
},

{
name: 'Healthcare & Diagnostics',
blindspots: [
'Technical communication',
'Low emotional resonance',
'Trust signals missing'
],
fixes: [
'Trust-first storytelling',
'Patient-centric messaging',
'Authority positioning'
]
},

{
name: 'Manufacturing & Industrial Brands',
blindspots: [
'Capability-rich but invisible brands',
'No storytelling',
'Weak digital presence'
],
fixes: [
'Capability storytelling',
'B2B narrative clarity',
'LinkedIn authority building'
]
},

{
name: 'D2C & E-commerce Brands',
blindspots: [
'Ad-driven growth without brand depth',
'Short-term campaigns',
'Weak loyalty'
],
fixes: [
'Narrative-led branding',
'Content systems',
'Trust building'
]
},

{
name: 'Renewable Energy & Sustainability',
blindspots: [
'Technical communication',
'Vision not translated into story',
'Low category authority'
],
fixes: [
'Innovation storytelling',
'Founder visibility',
'Authority positioning'
]
},

{
name: 'Architecture & Design Firms',
blindspots: [
'Beautiful work, weak narrative',
'Portfolio without positioning',
'Low differentiation'
],
fixes: [
'Design philosophy storytelling',
'Authority positioning',
'Brand identity clarity'
]
},

{
name: 'Coaching & Knowledge Businesses',
blindspots: [
'Personal branding confusion',
'Message inconsistency',
'Weak authority signals'
],
fixes: [
'Authority positioning',
'Thought leadership',
'Structured content systems'
]
},

{
name: 'Startups & Growth-Stage Companies',
blindspots: [
'Constant pivots',
'Messaging confusion',
'Positioning gaps'
],
fixes: [
'Narrative clarity',
'Market positioning',
'Growth messaging systems'
]
}

];

return (

<>

<Head>

<title>Industries — Eureka Craft™</title>

<meta
name="description"
content="Industries Eureka Craft works with and the clarity challenges we solve."
/>

</Head>


{/* HERO */}

<section className="hero-premium bg-premium hero-glow">

<div className="container-premium">

<div className="content-narrow reveal">

<p className="text-accent font-semibold mb-6 tracking-wide">

INDUSTRIES WE SERVE

</p>


<h1 className="text-6xl md:text-7xl font-bold heading-luxury mb-10">

Clarity Across Industries

</h1>


<p className="text-soft text-xl mb-6">

Different industries struggle with different
symptoms — but the root problem is clarity.

</p>


<p className="text-soft">

Eureka Craft helps organisations translate
expertise into structured narratives that
build trust and authority.

</p>

</div>

</div>

</section>



{/* INTRO */}

<section className="section-premium bg-white reveal">

<div className="container-premium">

<div className="content-narrow">

<h2 className="text-5xl font-bold mb-6">

Clarity Is Industry-Agnostic

</h2>

<div className="section-divider mb-10"></div>


<p className="text-premium mb-6">

Across industries, strong businesses often struggle
not because of weak capabilities — but because
their expertise is not communicated clearly.

</p>


<p className="text-premium mb-6">

Positioning gaps.
Messaging confusion.
Narrative fragmentation.

</p>


<p className="text-xl font-semibold">

Clarity transforms how markets understand you.

</p>

</div>

</div>

</section>



{/* INDUSTRIES */}

<section className="section-premium bg-gray-50">

<div className="container-premium">

<div className="space-y-16">


{industries.map((industry,index)=>(

<div
key={index}
className="card-premium border border-gray-200 bg-white reveal"
>


<h2 className="text-3xl md:text-4xl font-bold mb-12">

{industry.name}

</h2>



<div className="grid md:grid-cols-2 gap-12">


{/* Blindspots */}

<div>

<h3 className="text-accent font-semibold mb-5 uppercase text-sm tracking-wide">

Typical Blindspots

</h3>


<ul className="space-y-3">

{industry.blindspots.map((item,i)=>(

<li key={i} className="flex gap-3 text-gray-600">

<span className="w-2 h-2 bg-accent rounded-full mt-2"></span>

{item}

</li>

))}

</ul>

</div>



{/* Fixes */}

<div>

<h3 className="text-accent font-semibold mb-5 uppercase text-sm tracking-wide">

Typical Fixes

</h3>


<ul className="space-y-3">

{industry.fixes.map((item,i)=>(

<li key={i} className="flex gap-3 text-gray-700 font-medium">

<span className="w-2 h-2 bg-accent rounded-full mt-2"></span>

{item}

</li>

))}

</ul>

</div>


</div>

</div>

))}


</div>

</div>

</section>



{/* CTA */}

<section className="section-premium bg-black text-white">

<div className="container-premium text-center">

<h2 className="text-5xl font-bold mb-8">

Start With The Clarity X-Ray™

</h2>


<p className="text-xl text-gray-300 mb-10">

Every engagement begins with diagnosis.

</p>


<Link
href="/clarity-xray"
className="cta-accent inline-block"
>

Start The Clarity X-Ray™

</Link>

</div>

</section>



</>

);

}
