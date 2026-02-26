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

<section className="hero-premium bg-animated-gradient">      
<section className="hero-premium bg-hero-premium relative">

<div className="yellow-glow top-[-120px] left-[-120px]"></div>
<div className="yellow-glow bottom-[-120px] right-[-120px]"></div>
<div className="soft-light top-[250px] right-[20%]"></div>
<div className="circle-outline top-[180px] right-[12%]"></div>
<div className="consulting-dots bottom-[60px] left-[8%]"></div>

<div className="container-premium">      

<div className="grid lg:grid-cols-2 gap-24 items-center">


{/* LEFT */}

<div className="content-narrow reveal-left">

<p className="text-accent font-semibold mb-6 tracking-wider">

CLARITY-FIRST BRAND CONSULTING

</p>


<h1 className="text-6xl md:text-7xl font-bold heading-luxury mb-6">

Most Businesses Don't Have a Marketing Problem.

</h1>


<h1 className="text-6xl md:text-7xl font-bold text-accent mb-8 heading-luxury">

They Have a Clarity Problem.

</h1>


<p className="text-premium mb-10">

Eureka Craft helps founders and leadership teams build clarity,
narrative, and structured visibility through consulting-led
brand strategy.

</p>



<div className="flex flex-wrap gap-6 mb-14">

<Link href="/clarity-xray" className="btn-luxury">

Start The Clarity X-Ray™

</Link>


<Link href="/case-studies" className="btn-outline-luxury">

View Case Studies

</Link>

</div>



<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-500">

<div>

<p className="font-semibold text-black mb-1">
Consulting-Led Approach
</p>

<p>
Strategy before execution
</p>

</div>


<div>

<p className="font-semibold text-black mb-1">
Structured Methodology
</p>

<p>
Clarity X-Ray™ Framework
</p>

</div>


<div>

<p className="font-semibold text-black mb-1">
Long-Term Growth
</p>

<p>
Narrative-driven visibility
</p>

</div>

</div>

</div>



{/* RIGHT */}

<div className="hidden lg:block reveal-right">

<div className="card-luxury">

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
className="text-accent font-semibold link-luxury"
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

<section className="section-premium bg-grid relative">

<div className="yellow-glow top-[-200px] right-[15%]"></div>
<div className="soft-light bottom-[-200px] left-[10%]"></div>

<div className="container-premium">

<h2 className="text-5xl md:text-6xl font-bold heading-luxury">

Why Most Marketing Doesn't Work

</h2>

<div className="divider-luxury"></div>


<div className="content-narrow">

<p className="text-soft mb-10">

Despite strong products and capable teams, many businesses
struggle to translate expertise into a clear narrative.

</p>


<ul className="space-y-4 text-soft mb-10">

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

<section className="section-luxury bg-premium reveal">

<div className="container-luxury">

<h2 className="text-5xl md:text-6xl font-bold heading-luxury">

Stop Auditing. Start Aligning.

</h2>

<div className="divider-luxury"></div>


<div className="content-narrow space-y-8">

<p className="text-soft">

Eureka Craft is a clarity-first consulting studio that aligns
brand positioning, messaging, and narrative before execution
begins.

</p>

<p className="text-soft">

Our work begins with <strong>The Clarity X-Ray™</strong> —
a proprietary blindspot audit that identifies where brands
silently lose trust and impact.

</p>

</div>

</div>

</section>



{/* ================= CONSULTING AREAS ================= */}

<section className="section-premium bg-diagonal relative">

<div className="consulting-dots top-[50px] left-[8%]"></div>
<div className="circle-outline bottom-[80px] right-[10%]"></div>

<div className="container-premium">

<h2 className="text-5xl md:text-6xl font-bold heading-luxury">

Consulting Areas

</h2>

<div className="divider-luxury"></div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">


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

className="card-luxury reveal">

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

<section className="section-premium bg-consulting-light relative">

<div className="yellow-glow bottom-[-200px] left-[20%]"></div>
<div className="circle-outline top-[100px] right-[10%]"></div>

<div className="container-premium">

<h2 className="text-5xl md:text-6xl font-bold heading-luxury">

Industries We Serve

</h2>

<div className="divider-luxury"></div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">


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

className="card-luxury reveal">

<p className="font-semibold">

{industry}

</p>

</div>

))}

</div>

</div>

</section>



{/* ================= AUTHORITY ================= */}

<section className="section-premium bg-consulting-yellow text-black relative">

<div className="yellow-glow top-[50px] left-[20%]"></div>
<div className="yellow-glow bottom-[50px] right-[20%]"></div>

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

<section className="section-premium bg-consulting-yellow text-dark relative">

<div className="yellow-glow top-[50px] left-[20%]"></div>
<div className="yellow-glow bottom-[50px] right-[20%]"></div>

<div className="container-premium text-center">

<h2 className="text-4xl font-bold mb-10">

Read How Your Brand Actually Sounds.

</h2>


<Link
href="/clarity-xray"
className="btn-luxury">

Start The Clarity X-Ray™

</Link>

</div>

</section>



    </>
  );
}
