import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PsGoldBlog from "@/components/blogs/PsGoldBlog";

const pageUrl =
  "/blog/understanding-gold-trading-market-dynamics";

const imageUrl =
  "/images/blogs/ps-gold/ps-gold.jpg";

export const metadata: Metadata = {
  title:
    "Gold Trading: Market Dynamics and Key Considerations",

  description:
    "Understand gold trading, the forces influencing prices and why research, discipline and risk management matter when navigating the gold market.",

  keywords: [
    "gold trading",
    "gold price factors",
    "gold market",
    "gold bullion",
    "gold investment",
    "gold trading UAE",
    "PS Gold",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "Understanding Gold Trading: Markets, Opportunities and Risk",

    description:
      "Understand gold trading, the forces influencing prices and why research, discipline and risk management matter when navigating the gold market.",

    type: "article",
    url: pageUrl,

    images: [
      {
        url: imageUrl,
        alt:
          "PS Gold gold trading and bullion services",
      },
    ],
  },
};

export default function GoldTradingArticlePage() {
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
        <PsGoldBlog />
      </main>

      <Footer />
    </>
  );
}