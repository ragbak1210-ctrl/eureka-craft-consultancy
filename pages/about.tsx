import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Eureka Craft™ — Clarity-First Brand Consulting</title>
        <meta
          name="description"
          content="Eureka Craft is a consulting studio built around clarity, narrative alignment, and structured brand growth."
        />
      </Head>


{/* HERO */}

<section className="hero-premium bg-hero-premium relative">

<div className="yellow-glow top-[-100px] left-[-100px]"></div>
<div className="soft-light top-[200px] right-[20%]"></div>
<div className="circle-outline top-[150px] right-[10%]"></div>

<div className="container-premium">

<h1 className="text-6xl md:text-7xl font-bold heading-luxury mb-10">

A Consulting Studio Built Around Clarity

</h1>

<p className="text-soft text-xl">

Growth doesn't begin with better marketing.

It begins with better clarity.

</p>

</div>

</section>



{/* OPENING NARRATIVE */}

<section className="section-luxury bg-white reveal">

<div className="container-luxury">

<div className="content-narrow">

<h2 className="text-5xl font-bold heading-luxury">

Why Eureka Craft Exists

</h2>

<div className="divider-luxury"></div>


<p className="text-soft mb-8">
Most businesses don’t struggle because they lack effort.
They struggle because their message doesn’t reflect their depth.
</p>

<p className="text-soft mb-8">
Behind every capable team, strong product, or meaningful
service lies a story that deserves to be understood.
Yet somewhere between strategy meetings, campaigns,
and content calendars, that story becomes fragmented.
</p>

<p className="text-soft mb-8">
Marketing begins to look busy — but not meaningful.
Content becomes consistent — but not memorable.
Visibility increases — but trust remains unchanged.
</p>

<p className="text-soft mb-8">
We built Eureka Craft around a simple realization:
</p>

<p className="text-xl font-semibold mb-8">
Growth doesn’t begin with better marketing.
It begins with better clarity.
</p>

<p className="text-soft">
Eureka Craft exists to help businesses rediscover that clarity
and turn it into structured narrative systems that build
long-term trust and authority.
</p>

</div>

</div>

</section>



{/* REALITY SECTION */}

<section className="section-premium bg-grid relative">

<div className="yellow-glow bottom-[-200px] left-[10%]"></div>

<div className="container-premium">

<h2 className="text-5xl font-bold heading-luxury">

Why Brands Feel Active But Not Effective

</h2>

<div className="divider-luxury"></div>


<p className="text-soft mb-8">
Many businesses today are doing everything they were told to do.
</p>


<ul className="space-y-4 text-soft mb-10">
<li>• They post regularly</li>
<li>• They run campaigns</li>
<li>• They experiment with platforms</li>
<li>• They hire agencies</li>
<li>• They track metrics</li>
</ul>


<p className="text-soft mb-8">
And yet something still feels incomplete.
</p>


<ul className="space-y-4 text-soft mb-10">
<li>• Leads come — but not consistently</li>
<li>• Engagement happens — but not meaningfully</li>
<li>• Visitors arrive — but don't stay</li>
</ul>


<p className="text-soft mb-8">
The real issue is rarely effort.
</p>


<p className="text-xl font-semibold mb-8">
The real issue is misalignment.
</p>


<p className="text-soft">
Customers don't reject the business.
They simply fail to understand it fully.
</p>

</div>

</section>



{/* CORE BELIEF */}

<section className="section-luxury bg-white reveal">

<div className="container-luxury">

<div className="content-narrow">

<h2 className="text-5xl font-bold heading-luxury">

Clarity Before Creativity

</h2>

<div className="divider-luxury"></div>


<p className="text-soft mb-8">
Most marketing starts with activity.
</p>


<ul className="space-y-4 text-soft mb-10">
<li>• Campaign ideas</li>
<li>• Design styles</li>
<li>• Content calendars</li>
<li>• Ad budgets</li>
</ul>


<p className="text-soft mb-8">
But clarity cannot be designed after the fact.
</p>


<p className="text-soft mb-8">
At Eureka Craft, we believe clarity must exist before
visibility begins.
</p>


<ul className="space-y-4 text-soft mb-10">
<li>• Before campaigns, we align narrative</li>
<li>• Before content, we refine positioning</li>
<li>• Before growth, we diagnose blindspots</li>
</ul>


<p className="text-xl font-semibold">
Creativity without clarity produces noise.
</p>

<p className="text-xl font-semibold">
Clarity with creativity produces momentum.
</p>

</div>

</div>

</section>



{/* METHOD */}

<section className="section-premium bg-diagonal relative">

<div className="consulting-dots top-[80px] right-[10%]"></div>

<div className="container-premium">

<h2 className="text-5xl font-bold heading-luxury text-center">

The Eureka Craft Method

</h2>

<div className="divider-luxury mx-auto"></div>


<div className="grid md:grid-cols-2 gap-12 mt-16">

<div className="card-luxury">
<h3 className="text-2xl font-bold mb-6">
Step 1 — The Clarity X-Ray™
</h3>
<p className="text-soft">
Everything begins with diagnosis.
We analyze positioning, messaging, and digital presence
to uncover hidden blindspots.
</p>
</div>


<div className="card-luxury">
<h3 className="text-2xl font-bold mb-6">
Step 2 — Narrative Alignment
</h3>
<p className="text-soft">
We align positioning, messaging, and narrative so every
piece of communication moves in the same direction.
</p>
</div>


<div className="card-luxury">
<h3 className="text-2xl font-bold mb-6">
Step 3 — Execution Systems
</h3>
<p className="text-soft">
Instead of isolated campaigns, we build structured
systems that sustain long-term growth.
</p>
</div>


<div className="card-luxury">
<h3 className="text-2xl font-bold mb-6">
Step 4 — Trust-Based Visibility
</h3>
<p className="text-soft">
Visibility becomes more effective when it is built
on alignment and narrative continuity.
</p>
</div>

</div>

</div>

</section>



{/* FINAL CTA */}

<section className="section-luxury bg-premium-dark text-white">

<div className="container-luxury text-center">

<h2 className="text-5xl font-bold mb-10">
Start With Clarity
</h2>


<p className="text-xl text-gray-300 mb-10">
If your brand feels active but unclear,
the first step is understanding why.
</p>


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
