import { SiClaude, SiPerplexity, SiGooglegemini } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FiSlash } from "react-icons/fi";

const NAV_LINKS = [
  "Wealth",
  "Banking",
  "Invest",
  "Insurance",
  "Credit Cards",
  "Loans",
  "Mortgage",
  "Services & Help",
];

const AI_TOOLS = [
  { label: "ChatGPT", Icon: RiOpenaiFill, color: "text-emerald-600" },
  { label: "Claude", Icon: SiClaude, color: "text-orange-500" },
  { label: "Perplexity", Icon: SiPerplexity, color: "text-teal-500" },
  { label: "Gemini", Icon: SiGooglegemini, color: "text-blue-500" },
  { label: "Grok", Icon: FiSlash, color: "text-gray-800" },
];

export default function Header({ logoSrc = "/logo.svg" }) {
  return (
    <header className="w-full bg-white text-black">
      {/* Top bar */}
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-6 lg:px-[76px]">
        <a href="/" className="flex items-end gap-2" aria-label="Wealth home">
          <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
          <span className="pb-1 text-[17px] font-light tracking-wide">
            Wealth
          </span>
        </a>

        <span className="text-[17px] font-light tracking-wide text-gray-700">
          Citigold<sup className="text-[10px]">®</sup> Private Client
        </span>
      </div>

      <div className="border-t border-black" />

      {/* Nav bar */}
      <nav className="mx-auto flex h-[56px] max-w-[1440px] items-center justify-between px-6 lg:px-[76px]">
        <ul className="hidden items-center gap-x-10 lg:flex xl:gap-x-[50px]">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[15px] font-medium tracking-wide text-black transition-colors hover:text-blue-700"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <div className="hidden items-center rounded-sm bg-gray-100 px-3 py-2 md:flex">
            <span className="pr-3 text-[13px] font-medium">Ask AI</span>
            <span className="h-5 w-px bg-gray-300" />
            <div className="flex items-center gap-3 pl-3">
              {AI_TOOLS.map(({ label, Icon, color }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={`Ask ${label}`}
                  title={label}
                  className={`${color} transition-transform hover:scale-110`}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="border border-black bg-white px-10 py-2 text-[14px] font-semibold tracking-wider transition-colors hover:bg-black hover:text-white"
          >
            LOG ON
          </button>
        </div>
      </nav>
    </header>
  );
}
