import Navbar from "../components/Navbar/Navbar";
import PricingHero from "../components/pricing/PricingHero";
import LogoSlider from "../components/pricing/LogoSlider";
import CompareSection from "../components/pricing/CompareSection";
import PricingSetupSection from "../components/pricing/PricingSetupSection";
import FeatureCardsSection from "../components/pricing/FeatureCardsSection";
import FooterCTA from "../components/FooterCTA";

function Pricing() {
  return (
    <>
      <Navbar />
      <PricingHero />
      <LogoSlider />
 <CompareSection />
 <PricingSetupSection />
 <FeatureCardsSection />

      <FooterCTA />
    </>
  );
}

export default Pricing;