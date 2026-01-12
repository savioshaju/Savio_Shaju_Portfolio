import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Github } from "lucide-react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = useMemo(() => [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 bg-[#030014]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
      {navItems.map((item) => (
        <DockIcon
          key={item.id}
          mouseX={mouseX}
          item={item}
          isActive={activeTab === item.id}
          onClick={() => setActiveTab(item.id)}
        />
      ))}

      <div className="w-[1px] h-8 bg-white/10 mx-1" />

      <a
        href="https://github.com/savioshaju"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 hover:text-cyan-400 border border-white/10 transition-all duration-300 text-gray-400"
      >
        <Github size={24} />
      </a>
    </div>
  );
};

const DockIcon = ({ mouseX, item, isActive, onClick }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [44, 60, 44]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  const iconScale = useTransform(distance, [-150, 0, 150], [1, 1.2, 1]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClick();
  };

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={`rounded-xl flex items-center justify-center cursor-pointer relative group transition-colors duration-300 ${isActive
          ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-cyan-400"
        } border`}
      onClick={() => scrollToSection(item.id)}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <motion.div style={{ scale: iconScale }} className="relative z-10">
        <Icon size={22} strokeWidth={2} />
      </motion.div>

      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#030014] text-cyan-400 text-xs font-medium rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
        {item.label}
      </div>

      {/* Active Indicator Dot */}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-1 w-1 h-1 bg-cyan-400 rounded-full"
        />
      )}
    </motion.div>
  );
};

export default Navbar;
