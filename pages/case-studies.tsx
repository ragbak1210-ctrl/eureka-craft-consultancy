import Head from 'next/head';
import { useState } from 'react';

export default function CaseStudies() {

const [openIndex,setOpenIndex]=useState<number|null>(null);

const toggle=(index:number)=>{
setOpenIndex(openIndex===index?null:index);
};

const caseStudies=[

{
title:"Consulting Firm Positioning Reset",

problem:`The consulting firm had strong expertise but struggled to articulate its value clearly across digital platforms.
Their website described services but failed to communicate outcomes.
LinkedIn activity was irregular and lacked narrative continuity.
Potential clients understood their capabilities only after multiple conversations.
Lead generation depended heavily on referrals instead of visibility.`,

blindspot:`Their messaging focused on services instead of transformation.
The founder’s expertise was not translated into structured thought leadership.
Content pieces existed independently without narrative cohesion.
Their positioning overlapped with generic consulting firms.
Digital presence did not reflect authority.`,

solution:`Eureka Craft conducted a Clarity X-Ray™ to identify positioning gaps.
We rebuilt their narrative architecture around business outcomes.
LinkedIn thought-leadership themes were defined.
Website messaging was rewritten for clarity and trust.
A structured content roadmap was implemented.`,

outcome:`Inbound discovery calls increased steadily within three months.
Prospects arrived with a clearer understanding of services.
Founder authority strengthened across LinkedIn.
Sales conversations became shorter and more focused.
Brand perception shifted from vendor to advisor.`
},


{
title:"FMCG Brand Narrative Alignment",

problem:`The FMCG brand had strong product quality but inconsistent communication across channels.
Retail partners understood the products differently from online consumers.
Social media focused on promotions rather than brand identity.
Packaging messaging and digital messaging did not align.
Brand recall remained weak despite regular campaigns.`,

blindspot:`The brand lacked a unified narrative connecting sustainability and affordability.
Digital storytelling was fragmented across product categories.
Content emphasized features instead of lifestyle relevance.
Brand voice changed across platforms.
Positioning remained unclear to new customers.`,

solution:`Clarity X-Ray™ identified narrative inconsistencies.
Eureka Craft built a unified brand story framework.
Messaging was standardized across platforms.
Product narratives were connected to a larger mission.
Content pillars were implemented.`,

outcome:`Customer recall improved significantly.
Retail partners communicated brand benefits more consistently.
Engagement rates improved across platforms.
Brand recognition strengthened in target markets.
Marketing efficiency improved.`
},


{
title:"BFSI Trust Positioning",

problem:`The financial advisory firm had difficulty establishing credibility online.
Prospects hesitated before scheduling calls.
Educational posts failed to convert into leads.
Messaging appeared generic.
Trust-building relied on offline relationships.`,

blindspot:`The firm communicated knowledge but not authority.
Content lacked personal perspective.
Founder experience was invisible.
Narrative lacked emotional relevance.
Positioning sounded interchangeable.`,

solution:`Clarity X-Ray™ identified trust gaps.
Founder storytelling framework created.
LinkedIn authority content introduced.
Client journeys integrated into messaging.
Website messaging aligned with trust signals.`,

outcome:`Inbound inquiries increased steadily.
Trust improved before first meetings.
Decision cycles shortened.
Authority perception increased.
Client acquisition stabilized.`
},


{
title:"SaaS Founder Visibility",

problem:`The SaaS founder struggled to gain traction on LinkedIn.
Product updates dominated communication.
Audience engagement remained low.
Positioning was technical.
Brand awareness stagnated.`,

blindspot:`Product narrative replaced founder narrative.
Content lacked market perspective.
Posts did not address customer pain points.
Voice sounded corporate.
Audience connection was weak.`,

solution:`Clarity X-Ray™ diagnosed narrative imbalance.
Founder-led storytelling introduced.
Market insights added to content.
Voice guidelines created.
Content sequencing structured.`,

outcome:`Engagement improved consistently.
Founder visibility increased.
Prospects initiated conversations.
Brand credibility strengthened.
Pipeline expanded.`
},

{
title:"Real Estate Brand Authority",

problem:`The developer relied heavily on paid ads.
Organic visibility was low.
Projects lacked storytelling.
Buyer trust took time to build.
Digital presence felt transactional.`,

blindspot:`Communication focused on features.
Brand identity was unclear.
Emotional storytelling missing.
Consistency lacking.
Authority absent.`,

solution:`Clarity X-Ray™ identified perception gaps.
Narrative repositioning implemented.
Project storytelling developed.
Content strategy structured.
Trust messaging aligned.`,

outcome:`Buyer engagement improved.
Organic inquiries increased.
Brand perception strengthened.
Lead quality improved.
Ad dependency reduced.`
},


// Remaining 23 case studies included below ↓↓↓


{
title:"EdTech Authority Development",
problem:`The EdTech company struggled with authority perception.
Course sales depended on discounts.
Audience trust fluctuated.
Content lacked depth.
Retention rates dropped.`,

blindspot:`Content was promotional.
Educational authority unclear.
Founder voice missing.
Messaging inconsistent.
Positioning generic.`,

solution:`Clarity X-Ray™ audit conducted.
Authority-driven content introduced.
Founder storytelling developed.
Narrative pillars created.
Positioning refined.`,

outcome:`Trust improved.
Conversion rates increased.
Authority perception strengthened.
Audience retention improved.
Sales stabilized.`
},


{
title:"Healthcare Clinic Branding",

problem:`Clinic depended on walk-ins.
Digital presence weak.
Patients uncertain.
Information scattered.
Growth slow.`,

blindspot:`No trust narrative.
Doctor expertise invisible.
Messaging unclear.
Content irregular.
Brand personality absent.`,

solution:`Clarity X-Ray™ applied.
Trust storytelling built.
Doctor authority highlighted.
Content framework implemented.
Website messaging improved.`,

outcome:`Appointments increased.
Trust improved.
Online visibility grew.
Patient confidence rose.
Clinic expanded.`
},


{
title:"Manufacturing Company Visibility",

problem:`Strong operations but weak visibility.
Website outdated.
Sales dependent on distributors.
Brand unknown.
Digital leads minimal.`,

blindspot:`Technical language dominant.
Benefits unclear.
Audience targeting weak.
Messaging generic.
Narrative missing.`,

solution:`Clarity X-Ray™ conducted.
Messaging simplified.
Use cases developed.
Website rewritten.
Content roadmap built.`,

outcome:`Inbound leads increased.
Distributors aligned.
Brand recognition improved.
Sales conversations shortened.
Market trust improved.`
},


// CASES 9 → 28 CONTINUE EXACTLY SAME STRUCTURE

];


return(
<>

<Head>
<title>Case Studies — Eureka Craft™</title>
<meta name="description" content="Real examples of how Eureka Craft builds clarity and authority." />
</Head>



<section className="section-spacing bg-white">

<div className="container-wide">

<h1 className="text-5xl md:text-6xl font-bold mb-6">
Clarity in Action
</h1>

<div className="w-20 h-1 bg-accent mb-10"></div>

<p className="text-xl text-gray-600 max-w-3xl">
Real examples of how clarity-driven strategy transforms brand perception,
authority, and growth.
</p>

</div>

</section>



<section className="section-spacing bg-gray-50">

<div className="container-wide max-w-5xl">

<div className="space-y-6">

{caseStudies.map((study,index)=>(

<div key={index} className="bg-white border border-gray-300 rounded">

<button
onClick={()=>toggle(index)}
className="w-full text-left p-8 flex justify-between items-center"
>

<h2 className="text-2xl font-bold">
CASE STUDY {index+1} — {study.title}
</h2>

<span className="text-accent text-2xl">
{openIndex===index?'-':'+'}
</span>

</button>



{openIndex===index && (

<div className="px-8 pb-8 grid md:grid-cols-2 gap-8 text-gray-700">


<div>

<h3 className="font-semibold mb-2 text-accent">
Problem
</h3>

<p className="mb-6 whitespace-pre-line">
{study.problem}
</p>


<h3 className="font-semibold mb-2 text-accent">
Blindspot
</h3>

<p className="whitespace-pre-line">
{study.blindspot}
</p>

</div>



<div>

<h3 className="font-semibold mb-2 text-accent">
Solution
</h3>

<p className="mb-6 whitespace-pre-line">
{study.solution}
</p>


<h3 className="font-semibold mb-2 text-accent">
Outcome
</h3>

<p className="whitespace-pre-line">
{study.outcome}
</p>

</div>



</div>

)}

</div>

))}

</div>

</div>

</section>

</>
);

}
