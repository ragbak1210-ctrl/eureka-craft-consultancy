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

{
title:"D2C Skincare Brand Clarity Reset",

problem:`The skincare brand had strong product formulations but struggled to differentiate itself in a crowded D2C market.
Their messaging focused heavily on ingredients without connecting to real consumer concerns.
Customer acquisition costs were steadily increasing across digital channels.
Social media posts were visually appealing but lacked strategic direction.
Repeat purchases were lower than expected despite good product reviews.`,

blindspot:`The brand communicated product features but failed to communicate a clear philosophy.
Customer problems were assumed rather than deeply understood.
Brand tone varied across Instagram, website, and ads.
Content emphasized trends instead of trust-building narratives.
The brand lacked a clear emotional anchor.`,

solution:`Eureka Craft conducted a Clarity X-Ray™ to identify messaging inconsistencies.
A unified skincare philosophy narrative was developed.
Customer journey-based content themes were introduced.
Website messaging was rewritten around outcomes and trust.
A structured storytelling framework was implemented.`,

outcome:`Customer trust indicators improved within the first quarter.
Repeat purchase rates increased steadily.
Ad performance improved due to clearer messaging.
Brand recall strengthened among target audiences.
The brand established a stronger identity in its category.`
},



{
title:"Logistics Company Messaging Alignment",

problem:`The logistics company had strong operational capabilities but struggled to explain its value proposition online.
Their website listed services without clarifying differentiators.
Sales teams relied heavily on personal relationships for conversions.
Digital leads were inconsistent and low-quality.
Prospects often compared them purely on price.`,

blindspot:`Messaging emphasized operational details instead of business impact.
Customer success stories were not documented.
Industry specialization was not highlighted.
Digital communication lacked authority signals.
Positioning sounded interchangeable with competitors.`,

solution:`The Clarity X-Ray™ identified positioning gaps and trust leaks.
Industry-focused messaging frameworks were developed.
Service pages were rewritten around outcomes.
Case-based storytelling was introduced.
Sales messaging was aligned with digital content.`,

outcome:`Higher-quality inbound leads began to emerge.
Sales conversations became more focused on value.
Website engagement improved significantly.
Brand differentiation became clearer.
Client acquisition became more predictable.`
},

{
title:"Coaching Brand Authority Building",

problem:`The coaching business relied heavily on personal referrals.
Online presence did not reflect the founder’s experience.
Social media posts lacked depth and consistency.
Prospects needed multiple calls before committing.
Brand credibility was unclear to new audiences.`,

blindspot:`The founder's expertise was not translated into authority content.
Messaging focused on inspiration instead of transformation.
Audience targeting remained broad and undefined.
Narrative lacked structure and progression.
Trust-building signals were minimal.`,

solution:`Clarity X-Ray™ diagnosed authority perception gaps.
A structured thought-leadership framework was created.
Founder storytelling sequences were introduced.
Client transformation stories were documented.
Messaging architecture was implemented.`,

outcome:`Inbound inquiries increased gradually.
Client trust improved before consultations.
Authority perception strengthened significantly.
Conversion cycles shortened.
The brand became easier to understand and trust.`
},

{
title:"Architecture Firm Narrative Clarity",

problem:`The architecture firm had strong design capabilities but struggled to communicate its design philosophy.
Project presentations lacked narrative structure.
Digital presence focused on images without storytelling.
Prospects appreciated designs but hesitated to commit.
Brand positioning remained unclear.`,

blindspot:`Portfolio content lacked context and intent.
Design philosophy was not articulated clearly.
Client journeys were not documented.
Website messaging was minimal.
Brand voice lacked consistency.`,

solution:`Clarity X-Ray™ identified narrative gaps.
Project storytelling frameworks were created.
Design philosophy messaging was clarified.
Website content expanded strategically.
Portfolio structure reorganized.`,

outcome:`Prospects understood projects more clearly.
Trust increased during early conversations.
Brand perception improved significantly.
Client acquisition improved.
Authority strengthened.`
},



{
title:"Legal Advisory Trust Positioning",

problem:`The legal advisory firm had experienced professionals but low online visibility.
Clients relied on word-of-mouth referrals.
Website traffic remained low.
Prospects hesitated before initial consultations.
Trust-building required multiple interactions.`,

blindspot:`Legal expertise was not communicated clearly online.
Messaging sounded generic and technical.
Authority signals were missing.
Content lacked practical insights.
Founder presence was minimal.`,

solution:`Clarity X-Ray™ identified trust perception issues.
Authority-focused content developed.
Founder visibility improved.
Website trust elements added.
Messaging simplified.`,

outcome:`Consultation requests increased.
Trust improved before meetings.
Brand authority strengthened.
Client acquisition improved.
Decision cycles shortened.`
},



{
title:"AI Startup Messaging Simplification",

problem:`The AI startup struggled to explain its product to non-technical buyers.
Sales cycles were long.
Prospects needed multiple demonstrations.
Website messaging was complex.
Marketing materials were overly technical.`,

blindspot:`Messaging targeted engineers instead of decision-makers.
Benefits were unclear.
Use cases were poorly explained.
Narrative lacked simplicity.
Audience alignment weak.`,

solution:`Clarity X-Ray™ identified complexity barriers.
Messaging simplified.
Use cases clarified.
Decision-maker-focused content developed.
Narrative structured.`,

outcome:`Sales conversations improved.
Prospects understood faster.
Conversion rates increased.
Trust improved.
Adoption accelerated.`
},



{
title:"Franchise Brand Systemization",

problem:`Franchise brand struggled with inconsistent messaging across locations.
Each franchise communicated differently.
Brand identity diluted.
Customer experience varied.
Growth slowed.`,

blindspot:`No central narrative framework.
Brand guidelines incomplete.
Local messaging inconsistent.
Training lacking.
Voice unclear.`,

solution:`Clarity X-Ray™ conducted.
Brand narrative system developed.
Guidelines created.
Templates implemented.
Training conducted.`,

outcome:`Consistency improved.
Brand perception strengthened.
Franchise growth improved.
Customer trust increased.
Operations aligned.`
},



{
title:"Renewable Energy Brand Authority",

problem:`Renewable energy company struggled to build credibility.
Technology complex.
Trust slow.
Sales long.
Visibility weak.`,

blindspot:`Messaging technical.
Benefits unclear.
Trust signals missing.
Narrative weak.
Authority low.`,

solution:`Clarity X-Ray™ conducted.
Narrative developed.
Authority content created.
Messaging simplified.
Trust elements added.`,

outcome:`Trust improved.
Sales improved.
Authority increased.
Visibility increased.
Conversions improved.`
},



{
title:"Boutique Hotel Storytelling Strategy",

problem:`Hotel relied on OTAs.
Brand identity weak.
Website conversions low.
Guest loyalty low.
Story unclear.`,

blindspot:`Experience not communicated.
Emotion missing.
Visual storytelling incomplete.
Narrative weak.
Brand voice inconsistent.`,

solution:`Clarity X-Ray™ conducted.
Experience storytelling developed.
Website messaging rewritten.
Visual narrative aligned.
Content framework built.`,

outcome:`Direct bookings increased.
Guest engagement improved.
Brand recall increased.
Trust improved.
Revenue improved.`
},



{
title:"Diagnostics Brand Positioning",

problem:`Diagnostics brand faced heavy competition.
Pricing pressure high.
Trust inconsistent.
Visibility weak.
Growth slow.`,

blindspot:`Brand differentiation unclear.
Trust signals weak.
Doctor relationships invisible.
Messaging generic.
Authority unclear.`,

solution:`Clarity X-Ray™ conducted.
Trust narrative built.
Differentiation defined.
Content strategy aligned.
Messaging clarified.`,

outcome:`Trust improved.
Brand recall increased.
Patient inquiries increased.
Authority improved.
Growth stabilized.`
},



{
title:"HR Consulting Narrative Alignment",

problem:`HR consulting firm struggled to differentiate.
Messaging generic.
Clients confused.
Sales slow.
Visibility weak.`,

blindspot:`Services unclear.
Narrative weak.
Positioning broad.
Content inconsistent.
Authority missing.`,

solution:`Clarity X-Ray™ conducted.
Positioning refined.
Messaging structured.
Content themes built.
Narrative aligned.`,

outcome:`Lead quality improved.
Trust improved.
Sales improved.
Authority increased.
Visibility improved.`
},



{
title:"Export Business Digital Clarity",

problem:`Export business relied on trade networks.
Website weak.
Digital inquiries low.
Positioning unclear.
Trust limited.`,

blindspot:`Global buyers unclear.
Messaging technical.
Trust signals missing.
Content minimal.
Narrative weak.`,

solution:`Clarity X-Ray™ conducted.
Messaging clarified.
Trust elements added.
Website improved.
Content built.`,

outcome:`Inquiries increased.
Trust improved.
Brand recognition improved.
Sales improved.
Reach expanded.`
},



{
title:"Recruitment Firm Authority Building",

problem:`Recruitment firm struggled with credibility online.
Clients hesitant.
Competition high.
Messaging generic.
Visibility low.`,

blindspot:`Authority missing.
Process unclear.
Trust signals missing.
Narrative weak.
Positioning unclear.`,

solution:`Clarity X-Ray™ conducted.
Authority messaging developed.
Process storytelling created.
Website improved.
Content structured.`,

outcome:`Trust improved.
Client acquisition improved.
Authority increased.
Visibility improved.
Conversions improved.`
},



{
title:"Training Institute Positioning Clarity",

problem:`Training institute struggled with enrollments.
Courses unclear.
Trust weak.
Messaging inconsistent.
Visibility low.`,

blindspot:`Value unclear.
Audience unclear.
Messaging weak.
Authority low.
Narrative missing.`,

solution:`Clarity X-Ray™ conducted.
Positioning refined.
Messaging clarified.
Authority content created.
Narrative aligned.`,

outcome:`Enrollments increased.
Trust improved.
Authority increased.
Visibility improved.
Growth stabilized.`
},



{
title:"B2B Services LinkedIn Strategy",

problem:`B2B service firm struggled with LinkedIn engagement.
Posts inconsistent.
Audience unclear.
Leads low.
Visibility weak.`,

blindspot:`No narrative structure.
Audience targeting unclear.
Voice inconsistent.
Content generic.
Strategy missing.`,

solution:`Clarity X-Ray™ conducted.
Audience defined.
Content framework created.
Voice aligned.
Posting structured.`,

outcome:`Engagement improved.
Leads increased.
Visibility improved.
Trust improved.
Pipeline strengthened.`
},



{
title:"Retail Brand Storytelling Alignment",

problem:`Retail brand struggled with identity.
Campaigns inconsistent.
Messaging unclear.
Customer recall weak.
Growth uneven.`,

blindspot:`Brand story unclear.
Messaging inconsistent.
Emotion missing.
Voice unclear.
Positioning weak.`,

solution:`Clarity X-Ray™ conducted.
Brand story defined.
Messaging aligned.
Campaign structure created.
Content framework implemented.`,

outcome:`Recall improved.
Trust improved.
Sales improved.
Consistency improved.
Brand identity strengthened.`
},



{
title:"Fintech Narrative Simplification",

problem:`Fintech product difficult to explain.
Users confused.
Ad performance low.
Trust slow.
Growth limited.`,

blindspot:`Messaging complex.
Benefits unclear.
Narrative technical.
Trust signals weak.
Audience misaligned.`,

solution:`Clarity X-Ray™ conducted.
Messaging simplified.
Benefits clarified.
Narrative structured.
Trust elements added.`,

outcome:`User understanding improved.
Conversions improved.
Trust improved.
Ad performance improved.
Growth accelerated.`
},

{
title:"Pharma Company Digital Trust Architecture",

problem:`The pharmaceutical company had strong manufacturing and distribution capabilities but struggled to build credibility with new distributors and institutional buyers online.
Their website contained technical information but did not clearly communicate product reliability.
Marketing materials focused on specifications rather than trust.
Sales teams spent time explaining certifications.
Digital visibility did not translate into conversations.`,

blindspot:`Technical credentials assumed to build credibility.
Certifications not positioned as trust signals.
Messaging focused on product not reliability.
Digital storytelling missing.
Capability without confidence.`,

solution:`Clarity X-Ray™ conducted.
Trust architecture developed.
Website reorganized.
Quality narratives built.
Sales messaging aligned.`,

outcome:`Distributor conversations improved.
Prospects understood reliability faster.
Sales cycles shortened.
Digital presence supported growth.
Brand perception improved.`
},



{
title:"Construction Firm Visibility & Positioning Upgrade",

problem:`Construction firm had strong projects but weak visibility.
Projects came from relationships.
Website listed projects only.
Prospects unclear about strengths.
Growth limited.`,

blindspot:`Projects lacked context.
Capabilities unclear.
Reliability not communicated.
Transactional identity.
No differentiation.`,

solution:`Clarity X-Ray™ conducted.
Project narratives built.
Website rewritten.
Positioning refined.
Content frameworks created.`,

outcome:`Partners understood strengths faster.
Discussions improved.
Digital inquiries increased.
Brand perception improved.
Growth expanded.`
},



{
title:"Startup Pre-Funding Positioning Strategy",

problem:`Early-stage startup struggled to communicate value.
Pitch decks unclear.
Investor meetings slow.
Digital presence inconsistent.
Positioning weak.`,

blindspot:`Feature-focused messaging.
Narrative unclear.
Vision not communicated.
Audience assumptions.
Positioning generic.`,

solution:`Clarity X-Ray™ conducted.
Narrative built.
Pitch aligned.
Founder messaging structured.
Positioning refined.`,

outcome:`Investor meetings improved.
Pitch clarity increased.
Early adopters understood faster.
Brand perception improved.
Funding readiness strengthened.`
}  
  
];
  

return(
<>

<Head>
<title>Case Studies — Eureka Craft™</title>

<meta
name="description"
content="Real examples of how Eureka Craft builds clarity and authority."
/>

</Head>


{/* HERO */}

<section className="hero-premium bg-hero-premium relative">

  <div className="yellow-glow top-[-100px] left-[-100px]"></div>
  <div className="circle-outline top-[60px] right-[10%]"></div>

  <div className="container-premium">

    <p className="text-accent font-semibold mb-6 tracking-wide">
      CLARITY IN ACTION
    </p>

    <h1 className="text-6xl md:text-7xl font-bold heading-luxury mb-8">
      Real Clarity Transformations
    </h1>

    <p className="text-premium">
      Real examples of how clarity-driven strategy transforms
      positioning, authority, and growth.
    </p>

  </div>

</section>



{/* INTRO STRIP */}

<section className="section-premium bg-white">

  <div className="container-premium">

    <div className="content-narrow reveal">

      <h2 className="text-4xl font-bold mb-6">
        Strategy Before Execution
      </h2>

      <div className="section-divider mb-10"></div>

      <p className="text-premium mb-6">
        Each case study reflects how clarity transforms businesses
        before marketing begins.
      </p>

      <p className="text-premium">
        These transformations begin with diagnosis,
        not campaigns.
      </p>

    </div>

  </div>

</section>



{/* ACCORDION */}

<section className="section-premium bg-grid relative">

  <div className="yellow-glow bottom-[-200px] left-[20%]"></div>

  <div className="container-premium max-w-5xl">

    <div className="space-y-6">

      {caseStudies.map((study,index)=>(

        <div
          key={index}
          className="card-premium reveal cursor-pointer hover-lift"
        >

          <button
            onClick={()=>toggle(index)}
            className="w-full text-left flex justify-between items-center p-10"
          >

            <div>

              <p className="text-sm text-gray-500 mb-2">
                CASE STUDY {index+1}
              </p>

              <h2 className="text-2xl font-semibold">
                {study.title}
              </h2>

            </div>

            <div className="text-accent text-3xl transition">
              {openIndex===index?"−":"+"}
            </div>

          </button>



          {openIndex===index&&(

            <div className="px-10 pb-10 grid md:grid-cols-2 gap-10 text-gray-700">

              <div className="space-y-8">

                <div>

                  <h3 className="text-accent font-semibold mb-3">
                    Problem
                  </h3>

                  <p className="whitespace-pre-line">
                    {study.problem}
                  </p>

                </div>



                <div>

                  <h3 className="text-accent font-semibold mb-3">
                    Blindspot
                  </h3>

                  <p className="whitespace-pre-line">
                    {study.blindspot}
                  </p>

                </div>

              </div>



              <div className="space-y-8">

                <div>

                  <h3 className="text-accent font-semibold mb-3">
                    Solution
                  </h3>

                  <p className="whitespace-pre-line">
                    {study.solution}
                  </p>

                </div>



                <div>

                  <h3 className="text-accent font-semibold mb-3">
                    Outcome
                  </h3>

                  <p className="whitespace-pre-line font-medium">
                    {study.outcome}
                  </p>

                </div>

              </div>

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
      Start Your Own Clarity Transformation
    </h2>

    <p className="text-premium mb-10">
      Every clarity transformation begins with diagnosis.
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

);

}
