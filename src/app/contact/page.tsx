import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import ContactMapSection from "@/components/contact/ContactMapSection";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-w-0 w-full
          overflow-x-clip bg-white
        "
      >
        {/* World map */}
        <ContactMapSection />

        {/* Contact form with contact details */}
        <ContactSection
          showContactDetails
        />
      </main>

      <Footer />
    </>
  );
}