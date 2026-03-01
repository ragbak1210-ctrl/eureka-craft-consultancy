import Link from 'next/link';

export default function Footer() {
  return (
    <footer>

      {/* TRUST STRIP */}

      <section className="bg-gray-50 border-t border-gray-200">

        <div className="max-w-3xl mx-auto text-center py-16 px-8">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Consulting Begins With Understanding
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Eureka Craft works with founders and leadership teams who want their
            brand to reflect the strength of their business.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Our work is not built on templates or assumptions.
            Every engagement begins with diagnosis, and grows through alignment.
          </p>

          <p className="font-semibold text-black">
            Because clarity is not created by chance.
            It is built intentionally.
          </p>

        </div>

      </section>



      {/* MAIN FOOTER */}

      <section className="bg-white border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 py-16">


          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">



            {/* BRAND */}

            <div>

              <h3 className="text-xl font-bold mb-4">
                Eureka Craft™
              </h3>

              <p className="text-gray-600 mb-6">
                Clarity-led brand strategy and narrative consulting
                for founder-driven businesses.
              </p>

              <p className="text-sm text-gray-400">
                © 2024 Eureka Craft™
              </p>

            </div>



            {/* NAVIGATION */}

            <div>

              <h4 className="font-semibold mb-4">
                Navigation
              </h4>

              <div className="space-y-2 text-gray-600 text-sm">

                <Link href="/" className="hover:text-black transition block">
                  Home
                </Link>

                <Link href="/about" className="hover:text-black transition block">
                  About
                </Link>

                <Link href="/services" className="hover:text-black transition block">
                  Services
                </Link>

                <Link href="/industries" className="hover:text-black transition block">
                  Industries
                </Link>

                <Link href="/case-studies" className="hover:text-black transition block">
                  Case Studies
                </Link>

                <Link href="/insights" className="hover:text-black transition block">
                  Insights
                </Link>

              </div>

            </div>



            {/* CONSULTING */}

            <div>

              <h4 className="font-semibold mb-4">
                Consulting
              </h4>

              <div className="space-y-2 text-gray-600 text-sm">

                <p>Brand Positioning</p>

                <p>Messaging Strategy</p>

                <p>Clarity X-Ray™</p>

                <p>LinkedIn Strategy</p>

                <p>Content Systems</p>

              </div>

            </div>



            {/* CONTACT */}

            <div>

              <h4 className="font-semibold mb-4">
                Contact
              </h4>

              <div className="space-y-2 text-gray-600 text-sm mb-6">

                <p>consult@eurekacraft.in</p>

                <p>+91 9548512493</p>

                <p>Eureka Craft</p>

              </div>


              <Link
                href="/clarity-xray"
                className="cta-accent inline-block"
              >
                Start The Clarity X-Ray™
              </Link>


            </div>


          </div>



          {/* Bottom Bar */}

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

            <p>
              © 2024 Eureka Craft™. All rights reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">

              <Link href="#" className="hover:text-black transition">
                Privacy
              </Link>

              <Link href="#" className="hover:text-black transition">
                Terms
              </Link>

            </div>

          </div>


        </div>

      </section>


    </footer>
  );
}
