import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesertCastleBlog from "@/components/blogs/DesertCastleBlog";

const pageUrl =
  "/blog/dubai-real-estate-future-opportunities";

const imageUrl =
  "/images/blogs/desert-castle/desert-castle.jpg";

const pageTitle =
  "Dubai Real Estate: Opportunities in the Next Growth Phase";

const pageDescription =
  "Explore Dubai real estate opportunities, market drivers and the factors buyers and investors should consider when evaluating property prospects.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  keywords: [
    "Dubai real estate",
    "Dubai property market",
    "Dubai property investment",
    "Dubai real estate opportunities",
    "UAE property market",
    "Dubai property trends",
    "Desert Castle",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "Dubai Real Estate: Exploring the Opportunities Taking Shape",

    description: pageDescription,

    type: "article",

    url: pageUrl,

    images: [
      {
        url: imageUrl,
        alt:
          "Dubai real estate opportunities with Desert Castle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: pageTitle,

    description: pageDescription,

    images: [imageUrl],
  },
};

export default function DubaiRealEstateBlogPage() {
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
        <DesertCastleBlog />
      </main>

      <Footer />
    </>
  );
}