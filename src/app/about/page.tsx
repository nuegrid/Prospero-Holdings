import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FootprintSection from "@/components/FootprintSection";
import Footer from "@/components/Footer";
import OurPurposeSection from "@/components/about/OurPurposeSection";
import OurFoundationSection from "@/components/about/OurFoundationSection";
import WhyProsperoSection from "@/components/about/WhyProsperoSection";
import TheFutureSection from "@/components/about/TheFutureSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main
        id="about-page-top"
        className="
          min-w-0 w-full
          overflow-x-clip
          bg-white
        "
      >
        {/* Who We Are */}
        <AboutSection
          showDiscoverButton={false}
        />

        {/* Our Purpose */}
        <OurPurposeSection />

        {/* Our Foundation */}
        <OurFoundationSection />

        {/* Our Footprint */}
        <FootprintSection />

        {/* Why Prospero */}
        <WhyProsperoSection />

        {/* The Future */}
        <TheFutureSection />
      </main>

      <Footer />
    </>
  );
}