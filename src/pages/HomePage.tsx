import HeroSection from '@/sections/HeroSection';
import VideoShowcaseSection from '@/sections/VideoShowcaseSection';
import FeaturedSection from '@/sections/FeaturedSection';
import CollectionGridSection from '@/sections/CollectionGridSection';
import BrandStatementSection from '@/sections/BrandStatementSection';
import InstagramCTASection from '@/sections/InstagramCTASection';
import { homePage } from '@/data/pages';

export default function HomePage() {
  return (
    <>
      <HeroSection {...homePage.hero} />
      <VideoShowcaseSection {...homePage.showcase} />
      <FeaturedSection {...homePage.glassFeatured} />
      <FeaturedSection {...homePage.technicalFeatured} />
      <CollectionGridSection {...homePage.collection} />
      <BrandStatementSection {...homePage.brand} />
      <InstagramCTASection {...homePage.contactCta} />
    </>
  );
}
