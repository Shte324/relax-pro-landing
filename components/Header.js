'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#benefits', label: 'Преимущества' },
  { href: '#services', label: 'Услуги и цены' },
  { href: '#specialists', label: 'Специалисты' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-teal-700 font-montserrat">
          Relax Pro
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 font-medium hover:text-teal-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+71234567890"
          className="hidden md:block text-teal-700 font-semibold hover:text-teal-800"
        >
          +7 (123) 456-78-90
        </a>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium hover:text-teal-700 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+71234567890"
              className="text-teal-700 font-semibold py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              +7 (123) 456-78-90
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}