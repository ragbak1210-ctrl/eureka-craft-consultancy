import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', company: '', website: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact — Eureka Craft™</title>
        <meta name="description" content="Get in touch with Eureka Craft." />
      </Head>

      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Start With Clarity</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            If your brand feels busy but unclear, let's talk about The Clarity X-Ray™.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Website (optional)</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-accent resize-none"
                placeholder="Tell us about your brand and what you're looking to clarify..."
              />
            </div>

            <button type="submit" className="cta-accent w-full">
              Book Your Clarity X-Ray™
            </button>
          </form>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="section-spacing bg-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-8">Prefer To Connect Directly?</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Email: <a href="mailto:hello@eurekacraft.com" className="font-semibold text-accent hover:underline">hello@eurekacraft.com</a>
            </p>
            <p className="text-lg text-gray-600">
              LinkedIn: <a href="#" className="font-semibold text-accent hover:underline">@eurekacraft</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
