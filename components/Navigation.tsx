import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Eureka Craft™
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-sm font-medium hover:text-accent transition">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-accent transition">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-accent transition">
            Services
          </Link>
          <Link href="/clarity-xray" className="text-sm font-medium hover:text-accent transition">
            Clarity X-Ray™
          </Link>
          <Link href="/industries" className="text-sm font-medium hover:text-accent transition">
            Industries
          </Link>
          <Link href="/case-studies" className="text-sm font-medium hover:text-accent transition">
            Case Studies
          </Link>
          <Link href="/insights" className="text-sm font-medium hover:text-accent transition">
            Insights
          </Link>
          <Link href="/contact" className="cta-primary text-xs">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="flex flex-col p-8 gap-4">
              <Link href="/" className="text-sm font-medium">Home</Link>
              <Link href="/about" className="text-sm font-medium">About</Link>
              <Link href="/services" className="text-sm font-medium">Services</Link>
              <Link href="/clarity-xray" className="text-sm font-medium">Clarity X-Ray™</Link>
              <Link href="/industries" className="text-sm font-medium">Industries</Link>
              <Link href="/case-studies" className="text-sm font-medium">Case Studies</Link>
              <Link href="/insights" className="text-sm font-medium">Insights</Link>
              <Link href="/contact" className="cta-primary text-xs inline-block w-fit">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
