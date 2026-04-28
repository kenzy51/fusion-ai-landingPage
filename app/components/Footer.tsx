import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#09090b] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-white font-bold text-xl tracking-tighter uppercase">
                Fusion AI
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Precision engineering for medical growth. <br />
              Powered by Fusion Web Works LLC.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold">Solutions</h4>
            <ul className="text-zinc-500 space-y-2 text-sm">
              <li>
                {/* <Link href="/services/voice" className="hover:text-[#d4ff33]"> */}
                AI Voice Agents
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href="/services/content" className="hover:text-[#d4ff33]"> */}
                Cinematic Production
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href="/services/seo" className="hover:text-[#d4ff33]"> */}
                Practice SEO
                {/* </Link> */}
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold">Company</h4>
            <ul className="text-zinc-500 space-y-2 text-sm">
              <li>
                {/* <Link href="/terms" className="hover:text-[#d4ff33]">
                  Terms of Service
                </Link> */}
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#d4ff33]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4ff33]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold">NYC Office</h4>
            <p className="text-zinc-500 text-sm">
              11232, New York <br />
              929-769-6545 <br />
              hello@fusionaiagency.com{" "}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © 2026 Fusion Works LLC. All rights reserved. Made in NYC.
          </p>
          <div className="flex gap-6 text-zinc-600 text-xs">
            <span>HIPAA Compliant Infrastructure</span>
            <span>AES-256 Encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
