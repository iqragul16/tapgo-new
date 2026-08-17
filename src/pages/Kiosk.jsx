import Navbar from "../components/Navbar/Navbar";
import KioskPage from "../components/kiosk/KioskPage";
import LogoSlider from "../components/pricing/LogoSlider";
import KioskBenefits from "../components/kiosk/KioskBenefits";
import KioskAdvantages from "../components/kiosk/KioskAdvantages";
import KioskCTA from "../components/kiosk/KioskCTA";
import FooterCTA from "../components/FooterCTA";


export default function Kiosk() {
  return (
    <>
          <Navbar />

      <KioskPage />
            <LogoSlider />
      <KioskBenefits />
      <KioskAdvantages />
      <KioskCTA />
      <FooterCTA />

    </>
  );
}