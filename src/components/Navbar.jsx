import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 shadow-lg backdrop-blur border-b border-blush/60' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-blush flex items-center justify-center text-white font-semibold shadow-glow">
            GA
          </div>
          <div>
            <p className="font-display text-xl text-deep">Glow Atelier</p>
            <p className="text-xs text-deep/70 tracking-wide">Facials & Lashes</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-gold ${isActive ? 'text-gold' : 'text-deep/80'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/booking"
            className="px-4 py-2 rounded-full bg-gold text-white shadow-glow hover:-translate-y-0.5 transition"
          >
            Book Now
          </Link>
        </nav>
        <button
          className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-blush text-deep"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-deep"></span>
            <span className="block h-0.5 w-6 bg-deep"></span>
            <span className="block h-0.5 w-6 bg-deep"></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-blush/60 bg-white shadow-lg">
          <nav className="px-4 py-4 space-y-3 text-sm">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-gold font-semibold' : 'text-deep/80'}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/booking"
              className="block text-center px-4 py-3 rounded-full bg-gold text-white shadow-glow"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
