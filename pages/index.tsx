import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eureka Craft™ — Clarity-Led Brand Strategy & Narrative Studio</title>
        <meta
          name="description"
          content="Eureka Craft helps founders build clarity, narrative, and growth through strategic brand consulting."
        />
      </Head>

{/* ================= HERO ================= */}

<section className="hero-premium bg-white">

<div className="container-premium">

<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="content-narrow">

<p className="text-accent font-semibold mb-6 tracking-wide">

CLARITY-FIRST BRAND CONSULTING

</p>


<h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">

Most Businesses Don't Have a Marketing Problem.

</h1>


<h1 className="text-6xl md:text-7xl font-bold mb-8 text-accent leading-tight">

They Have a Clarity Problem.

</h1>


<p className="text-premium mb-10">

Eureka Craft helps founders and leadership teams build clarity,
narrative, and structured visibility through consulting-led
brand strategy.

</p>


<div className="flex flex-wrap gap-6 mb-12">

<Link href="/clarity-xray" className="cta-accent">

Start With The Clarity X-Ray™

</Link>


<Link href="/case-studies" className="cta-secondary">

View Case Studies

</Link>

</div>



<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500">

<div>

<p className="font-semibold text-black">

Consulting-Led Approach

</p>

<p>

Strategy before execution

</p>

</div>


<div>

<p className="font-semibold text-black">

Structured Methodology

</p>

<p>

Clarity X-Ray™ Framework

</p>

</div>


<div>

<p className="font-semibold text-black">

Long-Term Growth

</p>

<p>

Narrative-driven visibility

</p>

</div>

</div>

</div>



{/* Right Side Premium Block */}

<div className="hidden lg:block">

<div className="card-premium border border-gray-200 bg-white">

<p className="text-accent font-semibold mb-4">

THE CLARITY GAP

</p>


<h3 className="text-2xl font-bold mb-8">

Where Most Brands Struggle

</h3>


<div className="space-y-4 text-gray-700">

<p>• Strong expertise but unclear narrative</p>

<p>• Active marketing but weak positioning</p>

<p>• Visibility without trust</p>

<p>• Messaging inconsistency</p>

<p>• Differentiation gaps</p>

</div>


<div className="mt-10">

<Link
href="/clarity-xray"
className="font-semibold text-accent hover:underline"
>

See The Clarity X-Ray →

</Link>

</div>

</div>

</div>

</div>

</div>

</section>



{/* ================= PROBLEM ================= */}

<section className="section-premium bg-gray-50">

<div className="container-premium">

<h2 className="text-5xl font-bold mb-6">

Why Most Marketing Doesn't Work

</h2>

<div className="section-divider mb-12"></div>


<div className="content-narrow">

<p className="text-premium mb-8">

Despite strong products and capable teams, many businesses
struggle to translate expertise into a clear narrative.

</p>


<ul className="space-y-4 text-premium mb-10">

<li className="flex gap-3">
<span className="text-accent font-bold">•</span>
Marketing becomes inconsistent.
</li>

<li className="flex gap-3">
<span className="text-accent font-bold">•</span>
Messaging becomes diluted.
</li>

<li className="flex gap-3">
<span className="text-accent font-bold">•</span>
Visibility increases but trust does not.
</li>

</ul>


<p className="text-xl font-semibold">

Most companies fix output. Very few fix origin.

</p>

</div>

</div>

</section>



{/* ================= APPROACH ================= */}

<section className="section-premium bg-white">

<div className="container-premium">

<h2 className="text-5xl font-bold mb-6">

Stop Auditing. Start Aligning.

</h2>

<div className="section-divider mb-12"></div>


<div className="content-narrow space-y-8">

<p className="text-premium">

Eureka Craft is a clarity-first consulting studio that aligns
brand positioning, messaging, and narrative before execution
begins.

</p>

<p className="text-premium">

Our work begins with <strong>The Clarity X-Ray™</strong> —
a proprietary blindspot audit that identifies where brands
silently lose trust and impact.

</p>

</div>

</div>

</section>



{/* ================= CONSULTING AREAS ================= */}

<section className="section-premium bg-gray-50">

<div className="container-premium">

<h2 className="text-5xl font-bold mb-6">

Consulting Areas

</h2>

<div className="section-divider mb-16"></div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


{[
{
title:"Brand Positioning & Narrative Strategy",
desc:"We help businesses articulate what they truly stand for and why it matters."
},
{
title:"The Clarity X-Ray™",
desc:"Our proprietary blindspot audit diagnoses where your brand silently loses trust."
},
{
title:"Messaging Architecture",
desc:"Structured messaging systems that make your brand consistent everywhere."
},
{
title:"LinkedIn Authority Systems",
desc:"We turn founders into visible authorities."
},
{
title:"Content Narrative Systems",
desc:"Content ecosystems designed for long-term growth."
},
{
title:"Website Strategy",
desc:"Websites built as clarity-driven brand assets."
}
].map((service,index)=>(

<div key={index}

className="card-premium border border-gray-200 bg-white hover:border-accent transition">

<h3 className="text-xl font-semibold mb-4">

{service.title}

</h3>

<p className="text-gray-600">

{service.desc}

</p>

</div>

))}

</div>

</div>

</section>



{/* ================= INDUSTRIES ================= */}

<section className="section-premium bg-white">

<div className="container-premium">

<h2 className="text-5xl font-bold mb-6">

Industries We Serve

</h2>

<div className="section-divider mb-16"></div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


{[
"Consulting & Professional Services",
"Founder-Led Businesses",
"FMCG & Consumer Brands",
"Real Estate & Infrastructure",
"BFSI & Financial Services",
"Technology & SaaS",
"Education & EdTech",
"Healthcare & Diagnostics",
"Manufacturing & Industrial",
"D2C & E-commerce",
"Renewable Energy",
"Architecture & Design",
"Coaching Businesses",
"Startups"
].map((industry,index)=>(

<div key={index}

className="p-6 border border-gray-200 rounded bg-gray-50 hover:border-accent transition">

<p className="font-semibold">

{industry}

</p>

</div>

))}

</div>

</div>

</section>



{/* ================= AUTHORITY ================= */}

<section className="section-premium bg-black text-white">

<div className="container-premium text-center">

<h2 className="text-5xl font-bold mb-8">

We Don't Just Improve Marketing.

</h2>


<p className="text-2xl text-gray-300">

We Make Brands Easier To Understand, Trust, And Choose.

</p>

</div>

</section>



{/* ================= FINAL CTA ================= */}

<section className="section-premium bg-white">

<div className="container-premium text-center">

<h2 className="text-4xl font-bold mb-8">

Read How Your Brand Actually Sounds.

</h2>


<Link href="/clarity-xray"

className="cta-accent inline-block">

Start With The Clarity X-Ray™

</Link>

</div>

</section>

    </>
  );
}
