import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Eureka Craft™ — Clarity-First Brand Consulting</title>
        <meta name="description" content="Learn about Eureka Craft's approach to brand clarity and narrative consulting." />
      </Head>

      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            A Consulting Studio Built Around Clarity
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide max-w-3xl">
          <div className="space-y-6 text-lg text-gray-700 mb-12">
            <p>
              Eureka Craft was built on a simple observation:
            </p>

            <p className="text-xl font-semibold text-black">
              Most businesses struggle not because they lack marketing, but because they lack clarity.
            </p>

            <p>
              Despite capable teams and strong offerings, their story does not translate into consistent trust online.
            </p>

            <p className="text-lg font-semibold text-accent">
              We exist to fix that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-spacing bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Clarity Before Creativity</h2>

          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Before campaigns, we align narrative.
            </p>
            <p>
              Before content, we refine positioning.
            </p>
            <p>
              Before visibility, we diagnose blindspots.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">The Eureka Craft Method</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Clarity X-Ray™', desc: 'Diagnose blindspots and narrative gaps' },
              { title: 'Narrative Alignment', desc: 'Align story with strategy' },
              { title: 'Execution Systems', desc: 'Build frameworks for consistency' },
              { title: 'Visibility Scaling', desc: 'Scale impact with clarity' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded border border-gray-300">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
