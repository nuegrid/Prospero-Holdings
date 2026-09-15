import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PsfxInternationalBlog from "@/components/blogs/PsfxInternationalBlog";

const pageUrl =
  "/blog/business-facilitation-services-uae";

const imageUrl =
  "/images/blogs/psfx-international/psfx-international.jpg";

export const metadata: Metadata = {
  title:
    "Business Facilitation Services | PSFX International",

  description:
    "Discover how business facilitation can help entrepreneurs and companies navigate opportunities, connections and expansion in the UAE and beyond.",

  keywords: [
    "business facilitation services",
    "business setup UAE",
    "business facilitation UAE",
    "business consultancy",
    "UAE market entry",
    "international business services",
    "PSFX International",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "Beyond Borders: How Business Facilitation Can Turn Opportunities Into Market Presence",

    description:
      "Discover how business facilitation can help entrepreneurs and companies navigate opportunities, connections and expansion in the UAE and beyond.",

    type: "article",
    url: pageUrl,

    images: [
      {
        url: imageUrl,
        alt:
          "PSFX International business facilitation services",
      },
    ],
  },
};

export default function PsfxInternationalArticlePage() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-w-0 w-full
          overflow-x-clip
          bg-white
        "
      >
        <PsfxInternationalBlog />
      </main>

      <Footer />
    </>
  );
}