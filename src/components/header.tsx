import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import DownloadPDFButton from "./DownloadPDFButton";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-300 hover:text-emerald-400 transition-all  text-lg"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`z-50 relative text-gray-300 hover:text-emerald-400 transition-colors  `}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div
          className={` fixed inset-0 h-screen backdrop-blur-xl bg-opacity-80 bg-[#0a0118] transition-opacity  duration-300   z-50
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          onClick={() => setIsOpen(false)}
        />

        {/* Aside menu */}
        <aside
          className={` fixed top-0 right-0 h-screen w-[60vw] bg-gray-900
            transform transition-transform pb-8 duration-200 ease-out shadow-[-4px_0_15px_rgba(0,0,0,0.3)] z-50
            border-l border-emerald-400/10
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-full flex flex-col items-stretch justify-between">
            {/* Menu header */}

            <div>
              <div className="h-20 border-b border-emerald-400/10 flex items-center justify-between px-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-emerald-400" />
                  <span className="text-white font-semibold">Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu items */}
              <nav className="flex flex-col space-y-6 px-6 py-8">
                <NavLinks />
              </nav>
            </div>
            {/* Menu footer */}
            <div className="  p-6 border-t border-emerald-400/10">
              <div className="flex justify-center items-center gap-4">
                <button className="flex-1 px-4 py-2 bg-emerald-400 text-gray-900 rounded-md hover:bg-emerald-500 transition-colors">
                  Hire Me
                </button>
                <DownloadPDFButton />
              </div>
            </div>
          </div>
        </aside>
      </>
    );
  }

  return (
    <nav className="hidden md:flex gap-8 items-center">
      <NavLinks />
    </nav>
  );
}
