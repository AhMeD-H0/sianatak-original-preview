import HeroSection from '@/sections/HeroSection';
import VideoShowcaseSection from '@/sections/VideoShowcaseSection';
import FeaturedSection from '@/sections/FeaturedSection';
import BrandStatementSection from '@/sections/BrandStatementSection';
import InstagramCTASection from '@/sections/InstagramCTASection';
import { contactPage } from '@/data/pages';

export default function ContactPage() {
  return (
    <>
      <HeroSection {...contactPage.hero} />
      <VideoShowcaseSection {...contactPage.showcase} />
      <FeaturedSection {...contactPage.cooling} />
      <FeaturedSection {...contactPage.glass} />
      <BrandStatementSection {...contactPage.brand} />
      <InstagramCTASection {...contactPage.contactCta} />
    </>
  );
}
