import Image from "next/image";
import Link from "next/link";

const SCORECARD_URL = "https://scorecard.getgroundedhealth.com";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/grounded-mark-64.png"
              alt=""
              width={28}
              height={28}
              className="invert"
            />
            <span className="font-bold tracking-tight uppercase">Grounded Health</span>
          </div>
          <p className="text-mist max-w-xs text-sm">
            Grounded Health is the commercial technology layer for reformed employer healthcare —
            AI-native benefit design, real-world clinical data, and a direct payment rail built on
            the Health Rosetta methodology.
          </p>
        </div>
        <div>
          <p className="eyebrow text-sage mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/employers/" className="hover:text-sage">
                For employers
              </Link>
            </li>
            <li>
              <Link href="/advisors/" className="hover:text-sage">
                For advisors
              </Link>
            </li>
            <li>
              <Link href="/proof/" className="hover:text-sage">
                Proof
              </Link>
            </li>
            <li>
              <Link href="/about/" className="hover:text-sage">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-sage mb-4">Start</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={SCORECARD_URL} className="hover:text-sage">
                Get your free scorecard
              </a>
            </li>
            <li>
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL ?? "https://demo.getgroundedhealth.com"}/login`}
                className="hover:text-sage"
              >
                Log in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-spruce border-t">
        <p className="text-chart-sage mx-auto max-w-6xl px-6 py-6 text-xs">
          © {new Date().getFullYear()} Grounded Health · A public benefit corporation. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
