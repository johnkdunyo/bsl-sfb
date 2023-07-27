import HappyClients from "@/components/homePage/HappyClients";
import TrustedBy from "@/components/homePage/TrustedBy";
import OurCultureSection from "@/components/homePage/OurCultureSection";
import CertifiedSection from "@/components/homePage/CertifiedSection";
import HeroSection from "@/components/homePage/HeroSection";
import SiteLayout from "@/components/Layout/SiteLayout";
import MissionVission from "@/components/homePage/MissionVission2";
import YouCanCountOnUs from "@/components/homePage/YouCanCountOnUs";
import MissionVissionMobile from "@/components/homePage/MissionVissionMobile";

export default function Home() {
  return (
    <SiteLayout pageName={"BSL Home"}>
      <>
        <HeroSection />
        <YouCanCountOnUs />
        <MissionVission />
        <MissionVissionMobile />
        <CertifiedSection />
        <OurCultureSection />
        <TrustedBy />
        <HappyClients />
      </>
    </SiteLayout>
  );
}
