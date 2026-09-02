import { useState, useEffect } from "react";
import { FiHome, FiUser, FiCode, FiFolder, FiMail } from "react-icons/fi";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import "./style.css";

const NAV_LINKS = [
  { href: "#home", label: "Home", icon: FiHome },
  { href: "#about", label: "About", icon: FiUser },
  { href: "#skills", label: "Skills", icon: FiCode },
  { href: "#works", label: "Works", icon: FiFolder },
  { href: "#contact", label: "Contact", icon: FiMail },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => s && observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container" aria-label="Primary">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-mark">&lt;/&gt;</span>
          <span className="logo-text">Biswarup</span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href.slice(1) ? "active" : ""}
                aria-current={active === href.slice(1) ? "true" : undefined}
                onClick={closeMenu}
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            </li>
          ))}

          <div className="nav-links-contact">
            <a
              href="https://github.com/biswarup14"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </div>
        </ul>

        <div
          className={`nav-backdrop ${open ? "show" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>

        <div className="nav-actions">
          <button
            className="menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <RiCloseLine size={24} /> : <RiMenuFill size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
