/* eslint-disable @next/next/no-img-element */
// Plain <img> is intentional here: a lightweight CSS marquee of many logos,
// static-export friendly (next/image adds no optimization in `output: export`).

const LOGOS = [
  { file: "Boeing.svg", name: "Boeing" },
  { file: "Rosen_Hotels.png", name: "Rosen Hotels & Resorts" },
  { file: "Harley-Davidson.svg", name: "Harley-Davidson" },
  { file: "Langdale_Industries.png", name: "Langdale Industries" },
  { file: "Blackstone.svg", name: "Blackstone" },
  { file: "DeSoto_Memorial_Hospital.png", name: "DeSoto Memorial Hospital" },
  { file: "Health_Transformation_Alliance.svg", name: "Health Transformation Alliance" },
  { file: "Matheny_Motors.png", name: "Matheny Motors" },
  { file: "PBGH.svg", name: "Purchaser Business Group on Health" },
  { file: "Pacific_Steel_and_Recycling.png", name: "Pacific Steel & Recycling" },
  { file: "Gasparilla_Inn.svg", name: "Gasparilla Inn & Club" },
  { file: "L_and_F_Distributors.png", name: "L&F Distributors" },
  { file: "Enovation_Controls.svg", name: "Enovation Controls" },
  { file: "Wada_Farms.png", name: "Wada Farms" },
  { file: "Keystone_Technologies.svg", name: "Keystone Technologies" },
  { file: "RE_West_Transportation.png", name: "R.E. West Transportation" },
  { file: "Horizon_Goodwill.svg", name: "Horizon Goodwill Industries" },
  { file: "Copper_State_Bolt_and_Nut.png", name: "Copper State Bolt & Nut" },
  { file: "Palmer_Johnson_Power_Systems.svg", name: "Palmer Johnson Power Systems" },
  { file: "Pipe_Trades_Services_MN.png", name: "Pipe Trades Services MN" },
  { file: "Woodard_Cleaning_and_Restoration.svg", name: "Woodard Cleaning & Restoration" },
  { file: "Kenny_Pipe_and_Supply.png", name: "Kenny Pipe & Supply" },
  { file: "Paul_B_Zimmerman.png", name: "Paul B. Zimmerman" },
  { file: "Ashtabula_Area_City_Schools.png", name: "Ashtabula Area City Schools" },
] as const;

export default function LogoMarquee() {
  return (
    <div className="logo-marquee group relative overflow-hidden">
      <div
        className="from-white pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent"
        aria-hidden="true"
      />
      <div
        className="from-white pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent"
        aria-hidden="true"
      />
      <div className="gh-marquee-track flex w-max items-center gap-14">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <img
            key={`${logo.file}-${i}`}
            src={`/logos/employers/${logo.file}`}
            alt={i < LOGOS.length ? logo.name : ""}
            aria-hidden={i >= LOGOS.length}
            className="h-8 w-auto max-w-[150px] object-contain opacity-60 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
