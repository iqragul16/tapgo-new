import Navbar from "../components/Navbar/Navbar";
import NextSection from "../components/Navbar/NextSection";
import AboutUs from "../components/AboutUs";
import WhyChoose from "../components/WhyChoose";
import AdvantageSection from "../components/AdvantageSection";
import Section from "../components/Section";
import ShowcaseSection from "../components/ShowcaseSection";
import ImgSection from "../components/ImgSection";
import OrbitSection from "../components/OrbitSection";
import TestimonialSection from "../components/TestimonialSection";
import HorizontalCardsSection from "../components/HorizontalCardsSection";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import FooterCTA from "../components/FooterCTA";

function Home() {
  return (
    <>
      <Navbar />
      <NextSection />
      <AboutUs />
      <WhyChoose />
      <AdvantageSection />
      <Section />
      <ShowcaseSection />
      <ImgSection />
      <OrbitSection />
      <TestimonialSection />
      <HorizontalCardsSection />
      <FAQ />

      <ContactSection />
      <FooterCTA />
    </>
  );
}

export default Home;
