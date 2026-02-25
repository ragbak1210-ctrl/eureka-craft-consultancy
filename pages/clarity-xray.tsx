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
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch shortly.');
    setFormData({ name: '', email: '', company: '', website: '' });
  };

  return (
    <>
      <Head>
        <title>Clarity X-Ray™ — Eureka Craft</title>
        <meta name="description" content="Book your proprietary blindspot audit with Eureka Craft." />
      </Head>

      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">The Clarity X-Ray™</h1>
          <p className="text-2xl text-accent font-semibold">
            Because what you can't see is what's holding you back.
          </p>
        </div>
      </section>

      {/* What It Is */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">What It Is</h2>
          <p className="text-lg text-gray-700">
            The Clarity X-Ray™ is Eureka Craft's proprietary blindspot audit designed to diagnose narrative and positioning gaps that silently erode trust and impact.
          </p>
        </div>
      </section>

      {/* What We Analyze */}
      <section className="section-spacing bg-white">
        <div className="container-wide max-w-3xl">
          <h2 className="text-4xl font-bold mb-12">What We Analyze</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Brand positioning',
              'Messaging',
              'Website clarity',
              'LinkedIn presence',
              'Content narrative',
              'Audience alignment',
              'Trust signals',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-accent font-bold text-xl mt-1">✓</span>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-4xl font-bold mb-12">What You Get</h2>

          <div className="space-y-6">
            {[
              { title: 'Blindspot Report', desc: 'A detailed analysis of where your brand loses clarity and trust.' },
              { title: 'Narrative Diagnosis', desc: 'Insights into how your story is (or isn\'t) landing with your audience.' },
              { title: 'Alignment Roadmap', desc: 'A strategic framework to close gaps and strengthen positioning.' },
              { title: 'Flow Plan', desc: 'Prioritized actions to implement clarity across channels.' },
              { title: 'Priority Actions', desc: 'Quick wins you can implement immediately.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded border border-gray-300">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-spacing bg-white">
        <div className="container-wide max-w-3xl">
          <div className="bg-gray-50 p-12 rounded border border-gray-300 text-center">
            <h2 className="text-3xl font-bold mb-4">Clarity X-Ray™</h2>
            <p className="text-5xl font-bold text-accent mb-4">₹25,000</p>
            <p className="text-gray-600 text-lg mb-8">One-time diagnostic</p>
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
                placeholder="Email Address"
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
                type="url"
                name="website"
                placeholder="Website (optional)"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              />
              <button type="submit" className="cta-accent w-full">
                Book Your Clarity X-Ray™
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
