import HeroSection from '@/sections/HeroSection';
import VideoShowcaseSection from '@/sections/VideoShowcaseSection';
import FeaturedSection from '@/sections/FeaturedSection';
import CollectionGridSection from '@/sections/CollectionGridSection';
import BrandStatementSection from '@/sections/BrandStatementSection';
import InstagramCTASection from '@/sections/InstagramCTASection';
import { aboutPage } from '@/data/pages';

export default function AboutPage() {
  return (
    <>
      <HeroSection {...aboutPage.hero} />
      <VideoShowcaseSection {...aboutPage.showcase} />
      <FeaturedSection {...aboutPage.vision} />
      <FeaturedSection {...aboutPage.mission} />
      <CollectionGridSection {...aboutPage.collection} />
      <BrandStatementSection {...aboutPage.brand} />
      <InstagramCTASection {...aboutPage.contactCta} />
    </>
  );
}
