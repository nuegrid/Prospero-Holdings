import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PsfxProBlog from "@/components/blogs/PsfxProBlog";

const pageUrl =
  "/blog/psfx-pro-money-expo-india-2026";

const imageUrl =
  "/images/blogs/psfx-pro/psfx-pro.jpg";

export const metadata: Metadata = {
  title:
    "PSFX Pro at Money Expo India 2026 | Mumbai",

  description:
    "PSFX Pro reflects on its participation at Money Expo India 2026 in Mumbai and the value of industry networking, conversations and market engagement.",

  keywords: [
    "PSFX Pro Money Expo India 2026",
    "Money Expo India 2026",
    "PSFX Pro",
    "forex trading",
    "trading industry",
    "Mumbai financial expo",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "PSFX Pro at Money Expo India 2026: Connecting With the Trading Community",

    description:
      "PSFX Pro reflects on its participation at Money Expo India 2026 in Mumbai and the value of industry networking, conversations and market engagement.",

    type: "article",
    url: pageUrl,

    images: [
      {
        url: imageUrl,
        alt:
          "PSFX Pro team at Money Expo India 2026",
      },
    ],
  },
};

export default function PsfxProBlogPage() {
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
        <PsfxProBlog />
      </main>

      <Footer />
    </>
  );
}