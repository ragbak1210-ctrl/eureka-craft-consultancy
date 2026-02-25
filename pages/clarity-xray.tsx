import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function ClarityXRay() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch shortly.");
    setFormData({ name: '', email: '', company: '', website: '' });
  };


  return (
    <>
      <Head>
        <title>The Clarity X-Ray™ — Eureka Craft</title>
        <meta
          name="description"
          content="The Clarity X-Ray™ is Eureka Craft’s proprietary blindspot audit designed to diagnose positioning, messaging, and narrative gaps."
        />
      </Head>


      {/* HERO */}

      <section className="section-spacing bg-white">

        <div className="container-wide max-w-4xl">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Most Brands Don't Need More Marketing.
            <br/>
            They Need Better Diagnosis.
          </h1>

          <p className="text-2xl text-accent font-semibold mb-8">
            Because What You Can't See Is What's Holding You Back
          </p>

          <p className="text-lg text-gray-600 mb-6">
            The Clarity X-Ray™ is Eureka Craft’s proprietary blindspot audit designed
            to reveal the hidden gaps between your business strength and your market perception.
          </p>

          <p className="text-lg text-gray-600 mb-10">
            Before strategies. Before campaigns. Before content.
            <br/>
            <strong>We diagnose.</strong>
          </p>


          <div className="flex gap-4 flex-wrap">

            <a href="#pricing" className="cta-accent">
              Discover Your Blindspots
            </a>

            <a href="#analysis" className="cta-secondary">
              See What We Analyze
            </a>

          </div>

        </div>

      </section>



      {/* WHY AUDITS FAIL */}

      <section className="section-spacing bg-gray-50">

        <div className="container-wide max-w-3xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Why Traditional Audits Fall Short
          </h2>


          <div className="space-y-6 text-lg text-gray-700">

            <p>
              Most brand audits focus on what is easy to measure.
            </p>

            <ul className="space-y-2">

              <li>• Engagement rates</li>
              <li>• Post frequency</li>
              <li>• Website traffic</li>
              <li>• Follower growth</li>

            </ul>


            <p>
              These metrics tell you what happened.
            </p>

            <p>
              They rarely explain why it happened.
            </p>


            <p>
              A brand can have:
            </p>


            <ul className="space-y-2">

              <li>• Good content but weak positioning</li>
              <li>• Strong products but unclear messaging</li>
              <li>• Active marketing but low trust</li>

            </ul>


            <p className="font-semibold text-black">
              Traditional audits fix the output.
            </p>

            <p className="font-semibold text-black">
              The Clarity X-Ray™ fixes the origin.
            </p>

          </div>

        </div>

      </section>



      {/* DIAGNOSTIC */}

      <section className="section-spacing bg-white">

        <div className="container-wide max-w-3xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            A True Diagnostic, Not a Checklist
          </h2>


          <div className="space-y-6 text-lg text-gray-700">

            <p>
              The Clarity X-Ray™ is a structured diagnostic process designed
              to understand your brand the way your market experiences it.
            </p>

            <p>
              We examine your business across strategic and perceptual layers
              to uncover where clarity breaks down.
            </p>

            <p>
              Instead of guessing what to improve, you receive a clear map of
              what actually matters.
            </p>

          </div>

        </div>

      </section>



      {/* WHAT WE ANALYZE */}

      <section id="analysis" className="section-spacing bg-gray-50">

        <div className="container-wide max-w-4xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Inside The Clarity X-Ray™
          </h2>



          <div className="space-y-16 text-gray-700 text-lg">


            <div>
              <h3 className="text-2xl font-bold mb-2">
                Brand Positioning
              </h3>

              <p className="text-accent font-semibold mb-4">
                How Clearly Your Market Understands You
              </p>

              <p>
                We analyze whether your brand occupies a clear position in the mind of your audience.
              </p>

              <ul className="mt-4 space-y-2">
                <li>• Differentiation clarity</li>
                <li>• Category positioning</li>
                <li>• Competitive overlap</li>
                <li>• Value articulation</li>
                <li>• Authority signals</li>
              </ul>

            </div>



            <div>
              <h3 className="text-2xl font-bold mb-2">
                Messaging Architecture
              </h3>

              <p className="text-accent font-semibold mb-4">
                Whether Your Words Build Trust or Confusion
              </p>

              <ul className="space-y-2">
                <li>• Brand voice consistency</li>
                <li>• Clarity of communication</li>
                <li>• Founder voice alignment</li>
                <li>• Offer articulation</li>
                <li>• Audience resonance</li>
              </ul>

            </div>



            <div>

              <h3 className="text-2xl font-bold mb-2">
                Website Clarity Analysis
              </h3>

              <p className="text-accent font-semibold mb-4">
                How Your Website Actually Feels To A Prospect
              </p>

              <ul className="space-y-2">
                <li>• First impression clarity</li>
                <li>• Navigation logic</li>
                <li>• Message hierarchy</li>
                <li>• Trust signals</li>
                <li>• Conversion flow</li>
              </ul>

            </div>



            <div>

              <h3 className="text-2xl font-bold mb-2">
                Content Narrative
              </h3>

              <p className="text-accent font-semibold mb-4">
                Whether Your Content Builds Authority Or Noise
              </p>

              <ul className="space-y-2">
                <li>• Content themes</li>
                <li>• Narrative consistency</li>
                <li>• Educational depth</li>
                <li>• Authority signals</li>
              </ul>

            </div>



            <div>

              <h3 className="text-2xl font-bold mb-2">
                LinkedIn Presence
              </h3>

              <p className="text-accent font-semibold mb-4">
                How Your Professional Presence Actually Performs
              </p>

              <ul className="space-y-2">
                <li>• Founder positioning</li>
                <li>• Profile clarity</li>
                <li>• Authority perception</li>
                <li>• Audience alignment</li>
              </ul>

            </div>



            <div>

              <h3 className="text-2xl font-bold mb-2">
                Audience Alignment
              </h3>

              <p className="text-accent font-semibold mb-4">
                Whether You Are Speaking To The Right People
              </p>

              <ul className="space-y-2">
                <li>• Target audience clarity</li>
                <li>• Buyer intent signals</li>
                <li>• Messaging match</li>
              </ul>

            </div>



            <div>

              <h3 className="text-2xl font-bold mb-2">
                Trust Signals
              </h3>

              <p className="text-accent font-semibold mb-4">
                The Invisible Factors That Influence Decisions
              </p>

              <ul className="space-y-2">
                <li>• Authority indicators</li>
                <li>• Proof elements</li>
                <li>• Case studies</li>
                <li>• Social validation</li>
              </ul>

            </div>


          </div>

        </div>

      </section>



      {/* DELIVERABLES */}

      <section className="section-spacing bg-white">

        <div className="container-wide max-w-3xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            What You Receive
          </h2>


          <ul className="space-y-6 text-lg text-gray-700">

            <li>
              <strong>Blindspot Report</strong><br/>
              A structured document explaining where clarity breaks down.
            </li>

            <li>
              <strong>Narrative Diagnosis</strong><br/>
              How your brand actually sounds to your market.
            </li>

            <li>
              <strong>Alignment Roadmap</strong><br/>
              A prioritized action plan.
            </li>

            <li>
              <strong>Flow Plan</strong><br/>
              A step-by-step execution sequence.
            </li>

          </ul>

        </div>

      </section>



      {/* PRICING */}

      <section id="pricing" className="section-spacing bg-gray-50">

        <div className="container-wide max-w-3xl">

          <div className="bg-white p-12 border border-gray-300 rounded text-center">

            <h2 className="text-3xl font-bold mb-4">
              Investment
            </h2>

            <p className="text-5xl font-bold text-accent mb-4">
              ₹25,000
            </p>

            <p className="text-gray-600 mb-8">
              One-Time Diagnostic
            </p>


            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              />

              <input
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              />

              <button className="cta-accent w-full">
                Start With The Clarity X-Ray™
              </button>

            </form>

          </div>

        </div>

      </section>


    </>
  );
}
