import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoBackground from '@/components/VideoBackground';

gsap.registerPlugin(ScrollTrigger);

interface VideoShowcaseSectionProps {
  caption: string;
  headline: string;
  subhead: string;
  ctaText: string;
  videoSrc?: string;
  ctaHref?: string;
}

export default function VideoShowcaseSection({
  caption,
  headline,
  subhead,
  ctaText,
  videoSrc,
  ctaHref = '#',
}: VideoShowcaseSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const children = el.children;
    gsap.set(children, { opacity: 0, y: 40 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className={`relative w-full min-h-[80vh] overflow-hidden ${videoSrc ? '' : 'bg-[#30302d]'}`}>
      {videoSrc ? (
        <VideoBackground
          src={videoSrc}
          parallax
          overlay
          overlayColor="linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
        />
      ) : null}

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col justify-end h-full min-h-[80vh] px-[7vw] pb-20"
      >
        <p className="caption-text mb-4">{caption}</p>
        <h2 className="font-display text-[8vw] md:text-[5vw] uppercase text-[#d1cfb9] leading-[1.1] mb-4 max-w-[70%]">
          {headline}
        </h2>
        <p className="font-body text-[1rem] md:text-[1.125rem] font-light text-[#a7a37d] mb-8 max-w-[720px] leading-[1.7]">
          {subhead}
        </p>
        <div>
          <a href={ctaHref} className="btn-outlined">{ctaText}</a>
        </div>
      </div>
    </section>
  );
}
