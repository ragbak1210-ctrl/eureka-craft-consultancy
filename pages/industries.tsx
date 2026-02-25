import Head from 'next/head';

export default function Industries() {
  const industries = [
    {
      name: 'Consulting Firms',
      blindspots: 'Generic positioning. Thought leaders who don\'t seem like leaders. Unclear differentiation.',
      fixes: 'Founder-led narrative. Clear IP positioning. Authority architecture.',
    },
    {
      name: 'FMCG',
      blindspots: 'Product-led messaging without founder story. Inconsistent brand narrative.',
      fixes: 'Founder integration. Consistent brand voice across channels.',
    },
    {
      name: 'Real Estate',
      blindspots: 'Transactional messaging. Trust not built in copy. Unclear value proposition.',
      fixes: 'Trust-focused narrative. Relationship clarity. Value articulation.',
    },
    {
      name: 'Education',
      blindspots: 'Mission-clarity gaps. Unclear student/parent positioning. Inconsistent messaging.',
      fixes: 'Mission alignment. Clear outcome positioning. Unified messaging.',
    },
    {
      name: 'Technology',
      blindspots: 'Jargon-heavy positioning. Feature-led instead of outcome-led. Founder invisible.',
      fixes: 'Outcome clarity. Non-technical translation. Founder narrative.',
    },
    {
      name: 'Professional Services',
      blindspots: 'Corporate voice masking expertise. Unclear specialization. No founder positioning.',
      fixes: 'Human narrative. Specialization clarity. Founder authority.',
    },
  ];

  return (
    <>
      <Head>
        <title>Industries — Eureka Craft™</title>
        <meta name="description" content="Industries we work with and typical challenges we solve." />
      </Head>

      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Industries We Work With</h1>
          <p className="text-xl text-gray-600">
            We partner with founder-led and scale-stage companies across multiple sectors.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-12 rounded border border-gray-300">
                <h2 className="text-3xl font-bold mb-8">{industry.name}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-semibold text-accent mb-3 text-lg">Typical Blindspots</h3>
                    <p className="text-gray-700">{industry.blindspots}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-3 text-lg">Our Approach</h3>
                    <p className="text-gray-700">{industry.fixes}</p>
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
