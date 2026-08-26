import HeroSection from '@/sections/HeroSection';
import VideoShowcaseSection from '@/sections/VideoShowcaseSection';
import FeaturedSection from '@/sections/FeaturedSection';
import CollectionGridSection from '@/sections/CollectionGridSection';
import BrandStatementSection from '@/sections/BrandStatementSection';
import InstagramCTASection from '@/sections/InstagramCTASection';
import { worksPage } from '@/data/pages';

export default function WorksPage() {
  return (
    <>
      <HeroSection {...worksPage.hero} />
      <VideoShowcaseSection {...worksPage.showcase} />
      <FeaturedSection {...worksPage.glassFeatured} />
      <div id="works-collection">
        <CollectionGridSection {...worksPage.collection} />
      </div>
      <FeaturedSection {...worksPage.technicalFeatured} />
      <BrandStatementSection {...worksPage.brand} />
      <InstagramCTASection {...worksPage.contactCta} />
    </>
  );
}
