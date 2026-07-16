import Image from "next/image";
import Link from "next/link";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://demo.getgroundedhealth.com";

export default function Header() {
  return (
    <header className="border-sage/40 bg-bone sticky top-0 z-10 border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo/grounded-mark-64.png" alt="" width={32} height={32} priority />
          <span className="text-ink text-lg font-bold tracking-tight uppercase">
            Grounded Health
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/employers/"
            className="text-ink hover:text-spruce hidden font-medium sm:block"
          >
            Employers
          </Link>
          <Link
            href="/advisors/"
            className="text-ink hover:text-spruce hidden font-medium sm:block"
          >
            Advisors
          </Link>
          <Link
            href="/insights/"
            className="text-ink hover:text-spruce hidden font-medium sm:block"
          >
            Insights
          </Link>
          <a href={appUrl} className="text-spruce hover:text-spruce font-semibold">
            Log in
          </a>
          <Link
            href="/#scorecard"
            className="bg-spruce hover:bg-spruce rounded-md px-4 py-2 font-semibold text-white"
          >
            Get your free scorecard
          </Link>
        </nav>
      </div>
    </header>
  );
}
