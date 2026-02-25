import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Eureka Craft™</h3>
          <p className="text-gray-400 text-sm">
            Brand clarity and narrative consulting for modern businesses.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/clarity-xray" className="hover:text-white transition">Clarity X-Ray™</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/insights" className="hover:text-white transition">Insights</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2026 Eureka Craft™. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">Privacy</Link>
          <Link href="#" className="hover:text-white transition">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
