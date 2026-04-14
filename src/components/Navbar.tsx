"use client";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { navbar } from "@/utils/styles";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(navbar.base, scrolled ? `${navbar.scrolled} navbar-scrolled` : navbar.top)}>
      <div className={navbar.container}>
        <a href="#" className="navbar-logo">
          <img
            src="/assets/images/logo-rilix.png"
            alt="Rilix"
            className="logo-img"
          />
        </a>

        <nav className={navbar.links}>
          <a href="#beneficios" className={navbar.link}>Benefícios</a>
          <a href="#modelos" className={navbar.link}>Modelos</a>
          <a href="#faq" className={navbar.link}>FAQ</a>
        </nav>

        <button className={navbar.btn}>Falar com Consultor</button>
      </div>
    </header>
  );
}
