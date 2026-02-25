import Head from 'next/head';

export default function Industries() {

  const industries = [

    {
      name: 'Consulting & Professional Services',
      blindspots: [
        'Expertise without narrative clarity',
        'Generic service descriptions',
        'Weak differentiation'
      ],
      fixes: [
        'Authority-driven positioning',
        'Narrative-led LinkedIn presence',
        'Structured service messaging'
      ]
    },

    {
      name: 'FMCG & Consumer Brands',
      blindspots: [
        'Strong products, weak storytelling',
        'Campaign-driven visibility without brand depth',
        'Disconnected online narrative'
      ],
      fixes: [
        'Unified brand storytelling',
        'Retail + consumer narrative alignment',
        'Trust-led content systems'
      ]
    },

    {
      name: 'Real Estate & Infrastructure',
      blindspots: [
        'Project marketing without brand identity',
        'Visual-first but narrative-poor communication',
        'Trust signals missing'
      ],
      fixes: [
        'Developer brand positioning',
        'Narrative-led project marketing',
        'Authority-driven visibility'
      ]
    },

    {
      name: 'BFSI & Financial Services',
      blindspots: [
        'Technical messaging that confuses clients',
        'Authority not communicated online',
        'Low trust perception'
      ],
      fixes: [
        'Trust-first communication frameworks',
        'Simplified financial storytelling',
        'Authority positioning'
      ]
    },

    {
      name: 'Technology & SaaS Companies',
      blindspots: [
        'Product-focused messaging',
        'Feature-heavy communication',
        'Weak founder narrative'
      ],
      fixes: [
        'Product-to-narrative translation',
        'Founder-led storytelling',
        'Positioning clarity'
      ]
    },

    {
      name: 'Education & EdTech',
      blindspots: [
        'Emotional messaging without differentiation',
        'Generic positioning',
        'Weak thought leadership'
      ],
      fixes: [
        'Institutional storytelling',
        'Authority positioning',
        'Parent/student trust messaging'
      ]
    },

    {
      name: 'Healthcare & Diagnostics',
      blindspots: [
        'Technical communication',
        'Low emotional resonance',
        'Trust signals missing'
      ],
      fixes: [
        'Trust-first storytelling',
        'Patient-centric messaging',
        'Authority positioning'
      ]
    },

    {
      name: 'Manufacturing & Industrial Brands',
      blindspots: [
        'Capability-rich but invisible brands',
        'No storytelling',
        'Weak digital presence'
      ],
      fixes: [
        'Capability storytelling',
        'B2B narrative clarity',
        'LinkedIn authority building'
      ]
    },

    {
      name: 'D2C & E-commerce Brands',
      blindspots: [
        'Ad-driven growth without brand depth',
        'Short-term campaigns',
        'Weak loyalty'
      ],
      fixes: [
        'Narrative-led branding',
        'Content systems',
        'Trust building'
      ]
    },

    {
      name: 'Renewable Energy & Sustainability',
      blindspots: [
        'Technical communication',
        'Vision not translated into story',
        'Low category authority'
      ],
      fixes: [
        'Innovation storytelling',
        'Founder visibility',
        'Authority positioning'
      ]
    },

    {
      name: 'Architecture & Design Firms',
      blindspots: [
        'Beautiful work, weak narrative',
        'Portfolio without positioning',
        'Low differentiation'
      ],
      fixes: [
        'Design philosophy storytelling',
        'Authority positioning',
        'Brand identity clarity'
      ]
    },

    {
      name: 'Coaching & Knowledge Businesses',
      blindspots: [
        'Personal branding confusion',
        'Message inconsistency',
        'Weak authority signals'
      ],
      fixes: [
        'Authority positioning',
        'Thought leadership',
        'Structured content systems'
      ]
    },

    {
      name: 'Startups & Growth-Stage Companies',
      blindspots: [
        'Constant pivots',
        'Messaging confusion',
        'Positioning gaps'
      ],
      fixes: [
        'Narrative clarity',
        'Market positioning',
        'Growth messaging systems'
      ]
    }

  ];


  return (
    <>
      <Head>
        <title>Industries — Eureka Craft™</title>
        <meta
          name="description"
          content="Explore the industries Eureka Craft works with and the clarity challenges we solve."
        />
      </Head>


      {/* Hero */}

      <section className="section-spacing bg-white">

        <div className="container-wide">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Industries We Serve
          </h1>

          <div className="w-20 h-1 bg-accent mb-8"></div>

          <p className="text-xl text-gray-600 max-w-3xl">
            Eureka Craft partners with founder-led and growth-stage
            organisations across industries — helping them build clarity,
            positioning, and narrative-driven visibility.
          </p>

        </div>

      </section>



      {/* Industries */}

      <section className="section-spacing bg-gray-50">

        <div className="container-wide">


          <div className="grid grid-cols-1 gap-12">

            {industries.map((industry, index) => (

              <div
                key={index}
                className="bg-white p-12 rounded border border-gray-300"
              >

                <h2 className="text-3xl font-bold mb-10">
                  {industry.name}
                </h2>



                <div className="grid md:grid-cols-2 gap-12">


                  {/* Blindspots */}

                  <div>

                    <h3 className="font-semibold text-accent mb-4 text-lg">
                      Typical Blindspots
                    </h3>


                    <ul className="space-y-3">

                      {industry.blindspots.map((item, i) => (

                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >

                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>

                          {item}

                        </li>

                      ))}

                    </ul>

                  </div>



                  {/* Fixes */}

                  <div>

                    <h3 className="font-semibold text-accent mb-4 text-lg">
                      Typical Fixes
                    </h3>


                    <ul className="space-y-3">

                      {industry.fixes.map((item, i) => (

                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >

                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>

                          {item}

                        </li>

                      ))}

                    </ul>

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
