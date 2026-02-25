import Head from 'next/head';

export default function CaseStudies() {
  const caseStudies = [
    {
      client: 'TechStart Consulting',
      problem: 'Founder expertise wasn\'t translating into visibility. Messaging felt generic.',
      blindspot: 'Founder was the differentiator but completely hidden. Messaging focused on features, not outcomes.',
      solution: 'Repositioned founder as the primary narrative. Built thought leadership content system.',
      outcome: '300% increase in LinkedIn engagement. 15 qualified inbound leads in 3 months.',
    },
    {
      client: 'Premium Brand Agency',
      problem: 'Website clarity confusion. Messaging inconsistent across channels.',
      blindspot: 'Positioning unclear. Website copy didn\'t match LinkedIn. Sales messaging different from marketing.',
      solution: 'Unified messaging architecture. Clarity-first positioning framework.',
      outcome: 'Website conversion rate +45%. Sales cycle reduced by 30%.',
    },
    {
      client: 'Real Estate Solutions',
      problem: 'Struggling to differentiate. Transactional tone killing trust.',
      blindspot: 'All copy was about process, not outcomes. Founder story absent.',
      solution: 'Outcome-led positioning. Founder narrative integration.',
      outcome: 'Lead quality improved 60%. Positioning now defensible vs. competition.',
    },
  ];

  return (
    <>
      <Head>
        <title>Case Studies — Eureka Craft™</title>
        <meta name="description" content="See how we\'ve helped companies build clarity and narrative." />
      </Head>

      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Clarity in Action</h1>
          <p className="text-xl text-gray-600">
            How brands have rebuilt narrative and grown impact.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-12 rounded border border-gray-300">
                <h2 className="text-3xl font-bold mb-2">{study.client}</h2>
                <p className="text-accent font-semibold mb-8">Case Study</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Problem</h3>
                    <p className="text-gray-700 mb-6">{study.problem}</p>

                    <h3 className="font-semibold text-lg mb-3">Blindspot</h3>
                    <p className="text-gray-700">{study.blindspot}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Solution</h3>
                    <p className="text-gray-700 mb-6">{study.solution}</p>

                    <h3 className="font-semibold text-lg mb-3">Outcome</h3>
                    <p className="text-gray-700 font-semibold text-accent">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
