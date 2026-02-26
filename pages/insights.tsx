import Head from 'next/head';
import { useState } from 'react';

export default function Insights() {

const [openIndex,setOpenIndex]=useState<number|null>(null)

const insights=[

{
title:"Why Brand Positioning Fails (Even When the Product Is Strong)",

content:`Most companies assume strong products naturally create strong brands. In reality, product excellence and brand clarity are two completely different disciplines.

Many businesses operate with vague positioning such as:

"We provide quality services."
"Innovative solutions for modern businesses."
"Trusted partner for growth."

These statements sound acceptable internally but create zero differentiation externally.

Clear brand positioning answers three questions:

• Why you exist
• Who you serve best
• Why you are different

Without clear positioning:

Marketing becomes inconsistent
Sales conversations take longer
Trust builds slowly
Competition increases

Positioning is not a tagline exercise. It is a strategic decision framework that shapes:

Messaging
Content
Website structure
Sales communication
Advertising

At Eureka Craft, brand positioning is developed through market context analysis, narrative mapping, and audience clarity.

This ensures your brand becomes recognizable before it becomes visible.`
},

{
title:"Narrative Strategy: The Missing Layer in Most Marketing Plans",

content:`Most marketing plans define channels and budgets.

Few define narrative.

Narrative strategy determines how your brand story unfolds over time.

Without narrative strategy:

Content feels random
Campaigns feel disconnected
Messaging shifts constantly

Narrative alignment ensures:

• Every post reinforces identity
• Every campaign builds authority
• Every interaction builds trust

Narrative strategy transforms:

Posting → Storytelling
Visibility → Perception
Attention → Trust

This is why Eureka Craft builds narrative frameworks before execution begins.

Because consistency is not about frequency.

Consistency is about meaning.`
},

{
title:"Messaging Architecture: Why Good Ideas Still Sound Confusing",

content:`Many businesses have intelligent leaders and strong ideas.

Yet their messaging feels scattered.

Messaging architecture organizes communication into structured layers:

Core Message
Value Proposition
Proof Statements
Supporting Stories

Without messaging architecture:

Teams describe the business differently
Websites feel unclear
Sales conversations vary

Messaging architecture ensures:

• Internal clarity
• External consistency
• Faster understanding

When messaging is structured correctly:

Prospects understand faster.
Trust builds earlier.
Decisions happen sooner.

Messaging clarity is one of the fastest ways to improve conversion rates without increasing marketing spend.`
},

{
title:"Founder Branding: Why Trust Starts With People",

content:`In high-trust industries, brands rarely lead.

People do.

Founder visibility builds credibility faster than corporate marketing alone.

When founders communicate clearly:

• Authority increases
• Trust accelerates
• Opportunities multiply

Founder branding is not personal promotion.

It is strategic trust-building.

Strong founder visibility:

Humanizes companies
Reduces buyer hesitation
Improves inbound opportunities

LinkedIn has become the primary platform for founder-driven trust.

Companies with active founders consistently outperform companies with silent leadership.`
},

{
title:"Content Systems vs Random Posting",

content:`Most businesses treat content as a monthly activity.

Strong brands treat content as infrastructure.

Random posting leads to:

Inconsistent tone
Unclear messaging
Low retention

Content systems create:

• Narrative continuity
• Predictable output
• Strategic sequencing

Content systems answer:

What to say
When to say it
Why it matters

Eureka Craft designs structured content ecosystems that align with positioning and narrative clarity.

Because content works best when it behaves like a system, not a calendar.`
},

{
title:"LinkedIn Strategy: Visibility Without Noise",

content:`LinkedIn has become the primary platform for authority building.

Yet most companies use LinkedIn incorrectly.

Typical mistakes:

Generic posts
Motivational content
Random updates

Effective LinkedIn strategy requires:

• Clear audience definition
• Thought leadership themes
• Structured posting rhythm
• Narrative consistency

LinkedIn success is not frequency.

It is relevance.

When done correctly, LinkedIn becomes a long-term inbound lead engine.`
},

{
title:"Digital Marketing Alignment: Why Channels Don't Work Together",

content:`Many businesses run:

Google Ads
Social Media
SEO
Email Marketing

But these channels operate independently.

Misalignment leads to:

Mixed messaging
Confusing journeys
Low conversion rates

Digital alignment ensures:

• One narrative across channels
• Clear conversion paths
• Consistent messaging

Marketing becomes stronger when channels reinforce each other instead of competing for attention.`
},

{
title:"Brand Communication Frameworks: Consistency Builds Trust",

content:`Brand communication is not just design.

It includes:

Tone
Language
Visual structure
Message hierarchy

Without communication frameworks:

Teams improvise messaging
Designs vary widely
Content feels inconsistent

Consistency builds familiarity.

Familiarity builds trust.

Trust builds conversion.

Brand communication frameworks allow brands to scale without losing identity.`
},

{
title:"Blindspot Analysis: The Hidden Leaks in Brand Strategy",

content:`Many marketing problems originate from unseen causes.

Blindspots include:

Unclear positioning
Weak differentiation
Messaging confusion
Audience mismatch

Blindspots are difficult to detect internally.

This is why Eureka Craft developed the Clarity X-Ray™.

The Clarity X-Ray™ reveals:

• Narrative gaps
• Trust leaks
• Alignment issues
• Opportunity zones

Clarity removes friction.

Friction slows growth.`
},

{
title:"Trust Signals: Why People Hesitate to Buy",

content:`Trust is rarely lost through major mistakes.

It is lost through small uncertainties.

Missing trust signals include:

Case studies
Founder visibility
Clear messaging
Social proof

Trust signals reduce decision anxiety.

When trust increases:

Conversion increases.

Authority is not claimed.

Authority is demonstrated.`
},

{
title:"Clarity as a Growth Strategy",

content:`Clarity is often treated as branding work.

In reality, clarity is growth infrastructure.

Clear brands:

Sell faster
Scale easier
Attract better clients

Clarity reduces friction across:

Marketing
Sales
Hiring
Partnerships

Clarity is not cosmetic.

It is structural.

This is why Eureka Craft builds clarity before growth.

Because growth built on confusion eventually collapses.`
}

]


return(
<>

<Head>
<title>Insights — Eureka Craft™</title>
<meta name="description" content="Clarity-first thinking on brand strategy, narrative alignment and visibility."/>
</Head>



{/* HERO */}

<section className="hero-premium bg-animated-gradient bg-hero-premium relative">

<div className="yellow-glow top-[-100px] left-[-100px]"></div>
<div className="circle-outline top-[150px] right-[10%]"></div>

<div className="container-premium max-w-3xl">

<p className="text-accent font-semibold mb-6 tracking-wide">
WHERE STRATEGY MEETS UNDERSTANDING
</p>

<h1 className="text-6xl md:text-7xl font-bold heading-luxury mb-8">
Clarity Insights
</h1>

<p className="text-premium mb-10">
Most brands publish content.
Few brands build understanding.
</p>

<p className="text-premium mb-6">
The Insights section is where Eureka Craft shares clarity-first thinking
about brand strategy, narrative alignment, and digital visibility.
</p>

<p className="text-premium">
Each insight reflects the same principles applied inside
The Clarity X-Ray™ and our consulting engagements.
</p>

</div>

</section>



{/* ACCORDION */}

<section className="section-premium bg-diagonal relative">

<div className="consulting-dots bottom-[80px] left-[10%]"></div>

<div className="container-premium max-w-4xl">

<div className="space-y-6">

{insights.map((item,index)=>(

<div key={index} className="card-premium reveal cursor-pointer">

<button
onClick={()=>setOpenIndex(openIndex===index?null:index)}
className="w-full text-left p-10 flex justify-between items-center"
>

<h2 className="text-2xl font-semibold">
INSIGHT {index+1} — {item.title}
</h2>

<span className="text-accent text-3xl font-light">
{openIndex===index?"−":"+"}
</span>

</button>



{openIndex===index&&(

<div className="px-10 pb-10 border-t border-gray-200">

<p className="text-gray-700 whitespace-pre-line leading-relaxed">
{item.content}
</p>

</div>

)}

</div>

))}

</div>

</div>

</section>



{/* FINAL CTA */}

<section className="section-premium bg-white">

<div className="container-premium text-center reveal">

<h2 className="text-4xl font-bold mb-8">
Clarity Begins With Diagnosis
</h2>

<p className="text-premium mb-10">
See what your brand looks like from the outside.
</p>

<a
href="/clarity-xray"
className="cta-accent inline-block"
>
Start The Clarity X-Ray™
</a>

</div>

</section>

</>
)

}
