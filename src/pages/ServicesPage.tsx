import HeroSection from '@/sections/HeroSection';
import VideoShowcaseSection from '@/sections/VideoShowcaseSection';
import FeaturedSection from '@/sections/FeaturedSection';
import CollectionGridSection from '@/sections/CollectionGridSection';
import BrandStatementSection from '@/sections/BrandStatementSection';
import InstagramCTASection from '@/sections/InstagramCTASection';
import { servicesPage } from '@/data/pages';

export default function ServicesPage() {
  return (
    <>
      <HeroSection {...servicesPage.hero} />
      <VideoShowcaseSection {...servicesPage.showcase} />
      <FeaturedSection {...servicesPage.glassFeatured} />
      <CollectionGridSection {...servicesPage.glassServices} />
      <FeaturedSection {...servicesPage.technicalFeatured} />
      <CollectionGridSection {...servicesPage.technicalServices} />
      <BrandStatementSection {...servicesPage.brand} />
      <InstagramCTASection {...servicesPage.contactCta} />
    </>
  );
}
