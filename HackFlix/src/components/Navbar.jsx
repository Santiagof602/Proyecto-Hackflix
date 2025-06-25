import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed-top px-5 py-3 ${
        scrolled ? "navbar-dark bg-black" : "navbar-transparent"
      }`}
    >
      <span className="navbar-brand text-white fs-4">Hackflix</span>
      <a href="#" className="nav-link text-white ms-auto">
        Home
      </a>
    </nav>
  );
}
