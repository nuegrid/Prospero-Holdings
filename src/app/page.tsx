import AboutSection from "@/components/AboutSection";
import CompaniesSection from "@/components/CompaniesSection";
import ContactSection from "@/components/ContactSection";
import EcosystemSection from "@/components/EcosystemSection";
import Footer from "@/components/Footer";
import FootprintSection from "@/components/FootprintSection";
import Hero from "@/components/Hero";
import LatestDevelopmentsSection from "@/components/LatestDevelopmentsSection";
import LeadershipSection from "@/components/LeadershipSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        className="
          w-full min-w-0
          overflow-x-clip
          bg-black
        "
      >
        <Hero />
        <AboutSection />
        <FootprintSection />
        <EcosystemSection />
        <CompaniesSection />
        <LeadershipSection />
        <LatestDevelopmentsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}