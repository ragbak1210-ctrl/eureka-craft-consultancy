import Head from 'next/head';
import Link from 'next/link';

export default function Insights() {
  const articles = [
    {
      title: 'Why Your Positioning Feels Generic',
      excerpt: 'Most businesses position around features. The winners position around transformation.',
      category: 'Brand Clarity',
      date: '2026-02-20',
    },
    {
      title: 'The Founder Narrative Effect',
      excerpt: 'Founders who are visible in their brand narrative outpace those who hide behind corporate copy.',
      category: 'Founder Positioning',
      date: '2026-02-18',
    },
    {
      title: 'Messaging Inconsistency Is Bleeding Your Leads',
      excerpt: 'Your website says one thing, LinkedIn says another, sales pitch says a third. Here\'s how to align.',
      category: 'Messaging Systems',
      date: '2026-02-15',
    },
    {
      title: 'How To Build LinkedIn Authority Without Being Cringe',
      excerpt: 'Authentic thought leadership comes from clarity, not frequency.',
      category: 'LinkedIn Strategy',
      date: '2026-02-12',
    },
    {
      title: 'The Content Strategy No One Talks About',
      excerpt: 'Content that doesn\'t serve your narrative is just noise.',
      category: 'Content Systems',
      date: '2026-02-10',
    },
    {
      title: 'Trust Leaks: Where Your Brand Loses Credibility',
      excerpt: 'Small inconsistencies compound into massive trust losses.',
      category: 'Brand Strategy',
      date: '2026-02-08',
    },
  ];

  return (
    <>
      <Head>
        <title>Insights — Eureka Craft™</title>
        <meta name="description" content="Thoughts on brand clarity, narrative strategy, and founder positioning." />
      </Head>

      {/* Hero */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Clarity Insights</h1>
          <p className="text-xl text-gray-600">
            Thoughts on brand clarity, narrative strategy, and founder positioning.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-spacing bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article, index) => (
              <article key={index} className="bg-white p-8 rounded border border-gray-300 hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase text-accent">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-accent transition">
                  <Link href="#">{article.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link href="#" className="text-accent font-semibold hover:underline">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
