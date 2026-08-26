import { useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeaturedSectionProps {
  caption: string;
  headline: string;
  body: string;
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
  ctaHref?: string;
  reversed?: boolean;
  bgColor?: string;
  contactPhone?: string;
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.45 14.86L2.05 22l5.27-1.5A9.94 9.94 0 1 0 12.04 2Zm0 17.98a8.05 8.05 0 0 1-4.1-1.12l-.3-.18-3.13.89.84-3.05-.2-.31a7.86 7.86 0 0 1-1.22-4.22 8.1 8.1 0 1 1 8.11 7.99Zm4.44-6.07c-.24-.12-1.44-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21a7.29 7.29 0 0 1-1.35-1.68c-.14-.24-.02-.37.1-.49.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function whatsappHref(phone: string) {
  const digits = phone.replace(/\D/g, '').replace(/^0/, '');
  return `https://wa.me/966${digits}`;
}

export default function FeaturedSection({
  caption,
  headline,
  body,
  ctaText,
  imageSrc,
  imageAlt,
  ctaHref = '#',
  reversed = false,
  bgColor = '#3e3d3a',
  contactPhone,
}: FeaturedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const content = el.querySelectorAll('.featured-animate');
    gsap.set(content, { opacity: 0, y: 50 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power2.out',
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-[7vw]" style={{ backgroundColor: bgColor }}>
      <div className={`max-w-[1200px] mx-auto flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}>
        <div className="featured-animate w-full md:w-[55%]">
          <img src={imageSrc} alt={imageAlt} className="w-full h-auto object-cover" style={{ aspectRatio: '4/3' }} />
        </div>

        <div className="w-full md:w-[45%]">
          <p className="featured-animate caption-text mb-4">{caption}</p>
          <h2 className="featured-animate font-display text-[7vw] md:text-[5vw] uppercase text-[#d1cfb9] leading-[1.1] mb-6">{headline}</h2>
          <p className="featured-animate font-body text-[1rem] md:text-[1.125rem] font-light text-[#a7a37d] leading-[1.7] max-w-[400px] mb-8">{body}</p>

          {contactPhone ? (
            <div className="featured-animate flex flex-wrap items-center gap-3" dir="ltr">
              <span className="h-12 px-5 inline-flex items-center border border-[#a7a37d]/45 text-[#d1cfb9] font-body text-[14px]">{contactPhone}</span>
              <a href={`tel:${contactPhone}`} className="h-12 w-12 inline-flex items-center justify-center bg-[#e4e2c5] text-[#30302d] hover:bg-[#d1cfb9] transition-colors" aria-label={`اتصال ${contactPhone}`}>
                <Phone size={20} />
              </a>
              <a href={whatsappHref(contactPhone)} target="_blank" rel="noreferrer" className="h-12 w-12 inline-flex items-center justify-center border border-[#d1cfb9] text-[#d1cfb9] hover:bg-[#d1cfb9] hover:border-[#d1cfb9] hover:text-[#30302d] transition-colors" aria-label={`واتساب ${contactPhone}`}>
                <WhatsAppIcon size={21} />
              </a>
            </div>
          ) : (
            <a href={ctaHref} className="featured-animate btn-outlined !border-[#d1cfb9] !text-[#d1cfb9]">{ctaText}</a>
          )}
        </div>
      </div>
    </section>
  );
}
