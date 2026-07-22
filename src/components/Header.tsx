import Image from "next/image";
import Link from "next/link";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://demo.getgroundedhealth.com";
const SCORECARD_URL = "https://scorecard.getgroundedhealth.com";

export default function Header() {
  return (
    <header className="border-sage/40 bg-bone sticky top-0 z-10 border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image src="/logo/grounded-mark.svg" alt="" width={32} height={32} priority />
          <span className="text-ink text-base font-bold tracking-tight whitespace-nowrap uppercase sm:text-lg">
            Grounded Health
          </span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="/proof/" className="text-ink hover:text-spruce hidden font-medium sm:block">
            Proof
          </Link>
          <Link href="/about/" className="text-ink hover:text-spruce hidden font-medium sm:block">
            About
          </Link>
          <a
            href={`${appUrl}/login`}
            className="text-spruce hover:text-spruce hidden font-semibold sm:inline"
          >
            Log in
          </a>
          <a
            href={SCORECARD_URL}
            className="bg-spruce hover:bg-spruce rounded-md px-3 py-2 text-sm font-semibold whitespace-nowrap text-white sm:px-4 sm:text-base"
          >
            <span className="sm:hidden">Free scorecard</span>
            <span className="hidden sm:inline">Get your free scorecard</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
