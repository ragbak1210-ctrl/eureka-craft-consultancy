import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eureka Craft™ — Clarity-Led Brand Strategy & Narrative Studio</title>
        <meta
          name="description"
          content="Eureka Craft helps founders build clarity, narrative, and growth through strategic brand consulting and digital storytelling."
        />
      </Head>


      {/* Hero Section */}

      <section className="section-spacing bg-white">

        <div className="container-wide">

          <div className="max-w-4xl">

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Most Businesses Don't Have a Marketing Problem.
            </h1>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-accent">
              They Have a Clarity Problem.
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Eureka Craft helps founders and leadership teams build clarity,
              narrative, and structured visibility through consulting-led
              brand strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link href="/clarity-xray" className="cta-accent inline-block">
                Start With The Clarity X-Ray™
              </Link>

              <Link href="/case-studies" className="cta-secondary inline-block">
                View Case Studies
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* Problem Section */}

      <section className="section-spacing bg-gray-50">

        <div className="container-wide">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why Most Marketing Doesn't Work
          </h2>


          <div className="max-w-3xl">

            <p className="text-lg text-gray-600 mb-6">
              Despite strong products and capable teams, many businesses
              struggle to translate expertise into a clear narrative.
            </p>


            <ul className="space-y-4 mb-8 text-lg text-gray-700">

              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Marketing becomes inconsistent.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Messaging becomes diluted.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Visibility increases but trust does not.</span>
              </li>

            </ul>


            <p className="text-lg font-semibold text-black">
              Most companies fix output. Very few fix origin.
            </p>

          </div>

        </div>

      </section>



      {/* Eureka Craft Approach */}

      <section className="section-spacing bg-white">

        <div className="container-wide">

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Stop Auditing. Start Aligning.
          </h2>


          <div className="max-w-3xl space-y-6">

            <p className="text-lg text-gray-600">
              Eureka Craft is a clarity-first consulting studio that aligns
              brand positioning, messaging, and narrative before execution
              begins.
            </p>

            <p className="text-lg text-gray-600">
              Our work begins with <strong>The Clarity X-Ray™</strong> —
              a proprietary blindspot audit that identifies where brands
              silently lose trust and impact.
            </p>

          </div>

        </div>

      </section>



      {/* Consulting Areas */}

      <section className="section-spacing bg-gray-50">

        <div className="container-wide">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Consulting Areas
          </h2>

          <div className="w-20 h-1 bg-accent mb-12"></div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


            {[
              {
                title: "Brand Positioning & Narrative Strategy",
                desc: "We help businesses articulate what they truly stand for — and why it matters to the market. From positioning clarity to brand storytelling, we turn fragmented messaging into a coherent narrative that builds long-term trust."
              },

              {
                title: "The Clarity X-Ray™",
                desc: "Our proprietary blindspot audit diagnoses where your brand silently loses trust. We analyze messaging, positioning, digital presence, and audience perception to uncover the gaps most businesses never see."
              },

              {
                title: "Messaging Architecture & Brand Voice",
                desc: "We design structured messaging systems that make your brand consistent across platforms. This includes tone, vocabulary, positioning language, and narrative flow."
              },

              {
                title: "LinkedIn Thought Leadership Systems",
                desc: "We turn founders and leadership teams into visible authorities. This includes narrative strategy, content planning, and execution frameworks."
              },

              {
                title: "Content Strategy & Narrative Systems",
                desc: "We build content ecosystems designed for long-term brand growth — not random posting. Every piece of content supports a larger narrative."
              },

              {
                title: "Social Media Strategy & Execution",
                desc: "We manage and execute brand-aligned content across LinkedIn, Instagram, Facebook, and other channels with a narrative-first approach."
              },

              {
                title: "SEO & Organic Visibility Systems",
                desc: "We improve discoverability by aligning SEO with brand clarity and content strategy. Search visibility works best when messaging is aligned."
              },

              {
                title: "Website Strategy & Content Development",
                desc: "We transform websites into clarity-driven brand assets. This includes messaging architecture, page structure, and conversion flow."
              },

              {
                title: "Digital Marketing Alignment",
                desc: "We ensure paid campaigns, content, and brand messaging work together instead of operating in silos."
              },

              {
                title: "Lead Generation & Funnel Strategy",
                desc: "We design clarity-driven lead generation funnels that convert attention into qualified conversations."
              },

              {
                title: "Brand Consulting & Growth Advisory",
                desc: "We work directly with founders and leadership teams as strategic brand advisors. This includes ongoing brand decision-making and communication alignment."
              }

            ].map((service, index) => (

              <div
                key={index}
                className="bg-white border border-gray-300 p-8 rounded hover:border-accent transition"
              >

                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Clarity X-Ray Section */}

      <section className="section-spacing bg-white">

        <div className="container-wide">

          <div className="max-w-3xl mb-12">

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Clarity X-Ray™
            </h2>

            <p className="text-xl text-accent font-semibold">
              Because what you can't see is what's holding you back.
            </p>

          </div>


          <div className="max-w-3xl mb-12">

            <p className="text-lg text-gray-600 mb-8">
              The Clarity X-Ray™ is a structured blindspot audit that reveals:
            </p>


            <ul className="space-y-3 mb-8">

              {[
                'Narrative gaps',
                'Positioning weaknesses',
                'Messaging inconsistencies',
                'Funnel misalignment',
                'Trust leaks'
              ].map((item, index) => (

                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >

                  <span className="w-2 h-2 bg-accent rounded-full"></span>

                  {item}

                </li>

              ))}

            </ul>


            <Link href="/clarity-xray" className="cta-accent inline-block">
              Book A Clarity X-Ray™
            </Link>

          </div>

        </div>

      </section>



      {/* Industries */}

      <section className="section-spacing bg-gray-50">

        <div className="container-wide">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We Serve
          </h2>

          <div className="w-20 h-1 bg-accent mb-10"></div>


          <p className="text-lg text-gray-600 max-w-3xl mb-12">
            Eureka Craft works with ambitious founders and organisations
            across diverse industries — helping them build clarity,
            positioning, and narrative-driven visibility.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Consulting & Professional Services",
              "Founder-Led Businesses",
              "FMCG & Consumer Brands",
              "Real Estate & Infrastructure",
              "BFSI & Financial Services",
              "Technology & SaaS Companies",
              "Education & EdTech",
              "Healthcare & Diagnostics",
              "Manufacturing & Industrial Brands",
              "D2C & E-commerce Brands",
              "Renewable Energy & Sustainability",
              "Architecture & Design Firms",
              "Coaching & Knowledge Businesses",
              "Startups & Growth-Stage Companies"
            ].map((industry, index) => (

              <div
                key={index}
                className="p-6 bg-white border border-gray-300 rounded hover:border-accent transition"
              >

                <p className="font-semibold text-black">
                  {industry}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Authority */}

      <section className="section-spacing bg-black text-white">

        <div className="container-wide text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We Don't Just Improve Marketing.
          </h2>

          <p className="text-2xl text-gray-300">
            We Make Brands Easier To Understand, Trust, And Choose.
          </p>

        </div>

      </section>



      {/* Final CTA */}

      <section className="section-spacing bg-white">

        <div className="container-wide text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Read How Your Brand Actually Sounds.
          </h2>

          <Link href="/clarity-xray" className="cta-accent inline-block">
            Start With The Clarity X-Ray™
          </Link>

        </div>

      </section>

    </>
  );
}
