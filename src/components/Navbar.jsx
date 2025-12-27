import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    setActiveNav(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section?.getBoundingClientRect().top <= 120) {
          setActiveNav(item.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl border border-neutral-900 px-4 py-3 bg-white transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-32"}`}>
      <div className="flex items-center justify-between">
        <div className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`btn ${activeNav === item.id ? "bg-neutral-100" : ""}`}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2 ml-auto">
          <a href="https://github.com/savioshaju" target="_blank" rel="noreferrer" className="hidden sm:block btn">
            GitHub
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden btn">
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`btn text-left ${activeNav === item.id ? "bg-neutral-100" : ""}`}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;