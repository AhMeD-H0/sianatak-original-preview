import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { navLinks, contact } from '@/data/site';
import gsap from 'gsap';

export default function Navigation() {
  const { menuOpen, setMenuOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, setMenuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      tl.to('.menu-overlay', { x: 0, duration: 0.6, ease: 'power3.inOut' })
        .fromTo('.menu-link', { x: 60, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out' }, '-=0.3')
        .fromTo('.menu-close', { opacity: 0 }, { opacity: 1, duration: 0.3 }, '-=0.2');
    } else {
      document.body.style.overflow = '';
      gsap.to('.menu-link', { x: 40, opacity: 0, stagger: 0.05, duration: 0.3 });
      gsap.to('.menu-overlay', { x: '100%', duration: 0.5, ease: 'power3.inOut', delay: 0.2 });
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#30302d]/95 border-b border-[#d1cfb9]/10' : 'bg-transparent'
        }`}
        style={{ height: 60 }}
      >
        <div className="flex items-center justify-between h-full px-[7vw] max-w-[1600px] mx-auto" dir="ltr">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-[#d1cfb9] hover:text-[#e4e2c5] transition-colors"
            aria-label="فتح القائمة"
          >
            <Menu size={20} />
          </button>

          <Link to="/" className="flex items-center justify-center" aria-label="صيانتك - الرئيسية">
            <img
              src="/images/brand/sianatak-logo-light.png"
              alt="صيانتك"
              className="h-[30px] md:h-[32px] w-auto object-contain"
            />
          </Link>

          <a
            href={`tel:${contact.coolingPhone}`}
            className="text-[#d1cfb9] hover:text-[#e4e2c5] transition-colors"
            aria-label="اتصل بنا"
          >
            <Phone size={20} />
          </a>
        </div>
      </nav>

      <div
        className="menu-overlay fixed inset-0 z-[60] bg-[#30302d]"
        style={{ transform: 'translateX(100%)' }}
        dir="rtl"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <button
            onClick={() => setMenuOpen(false)}
            className="menu-close absolute top-5 right-[7vw] text-[#d1cfb9] hover:text-[#e4e2c5] transition-colors opacity-0"
            aria-label="إغلاق القائمة"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`menu-link font-display text-[5vw] md:text-[4vw] text-[#d1cfb9] hover:text-[#e4e2c5] transition-colors opacity-0 ${
                  location.pathname === link.href ? 'text-[#e4e2c5]' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
