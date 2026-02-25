import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Brand Strategy Consulting',
      problem: 'Your positioning feels generic. Messaging doesn\'t stick. Competitors sound like you.',
      approach: 'We diagnose positioning gaps and build a strategic narrative framework.',
      outcome: 'Clear, defensible positioning that resonates with your ideal customer.',
    },
    {
      title: 'Narrative Development',
      problem: 'You have expertise but can\'t translate it into a coherent story.',
      approach: 'We uncover your unique narrative and structure it for maximum impact.',
      outcome: 'A founder-led narrative that builds authority and trust.',
    },
    {
      title: 'Messaging Systems',
      problem: 'Your website, LinkedIn, and pitches tell different stories.',
      approach: 'We create a unified messaging architecture across all channels.',
      outcome: 'Consistency that compounds trust and recognition.',
    },
    {
      title: 'LinkedIn Consulting',
      problem: 'Your LinkedIn feels corporate or invisible. You\'re not building thought leadership.',
      approach: 'We develop a content system that positions you as an authority.',
      outcome: 'Founder visibility and inbound opportunities.',
    },
    {
      title: 'Content Systems',
      problem: 'Content is sporadic, unmeasured, and doesn\'t move the needle.',
      approach: 'We build a strategic content framework aligned to your narrative.',
      outcome: 'Sustainable content that compounds authority.',
    },
    {
      title: 'Digital Alignment',
      problem: 'Your website, copywriting, and campaigns feel disconnected.',
      approach: 'We align all digital touchpoints to a unified brand narrative.',
      outcome: 'Cohesive experience that builds trust.',
    },
  ];

  return (
    <>
      <Head>
        <title>Services — Eureka Craft™</title>
        <meta name="description" content="Brand strategy, narrative development, and consulting services." />
      </Head>

      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Consulting Areas</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Strategic clarity and alignment across every aspect of your brand.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-12 rounded border border-gray-300">
                <h2 className="text-3xl font-bold mb-8">{service.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold text-accent mb-3">Problem</h3>
                    <p className="text-gray-600">{service.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-3">Approach</h3>
                    <p className="text-gray-600">{service.approach}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-3">Outcome</h3>
                    <p className="text-gray-600">{service.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start your clarity journey?
            </p>
            <Link href="/clarity-xray" className="cta-accent inline-block">
              Book A Clarity X-Ray™
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
