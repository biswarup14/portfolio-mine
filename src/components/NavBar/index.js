import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiCode, FiFolder, FiMail } from "react-icons/fi";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import "./style.css";

const NAV_LINKS = [
  { to: "/", label: "Home", icon: FiHome },
  { to: "/about", label: "About", icon: FiUser },
  { to: "/skills", label: "Skills", icon: FiCode },
  { to: "/works", label: "Works", icon: FiFolder },
  { to: "/contact", label: "Contact", icon: FiMail },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container" aria-label="Primary">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">&lt;/&gt;</span>
          <span className="logo-text">Biswarup</span>
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV_LINKS.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? "active" : ""}
                aria-current={location.pathname === to ? "page" : undefined}
              >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
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
          onClick={() => setOpen(false)}
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
