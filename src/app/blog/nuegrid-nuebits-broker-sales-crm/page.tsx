import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NuegridBlog from "@/components/blogs/NuegridBlog";

const pageUrl =
  "/blog/nuegrid-nuebits-broker-sales-crm";

const imageUrl =
  "/images/blogs/nuegrid/nuebits-01.jpg";

const pageTitle =
  "NueGrid Launches NueBits Broker and Sales CRM";

const pageDescription =
  "NueGrid expands its fintech technology portfolio with NueBits CRM solutions designed around the needs of brokerages and sales-driven businesses.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  keywords: [
    "NueBits CRM",
    "NueGrid",
    "NueGrid Solutions",
    "Broker CRM",
    "Sales CRM",
    "fintech CRM",
    "CRM software",
    "brokerage technology",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "NueGrid Expands Its Technology Portfolio With NueBits CRM",

    description: pageDescription,

    type: "article",

    url: pageUrl,

    images: [
      {
        url: imageUrl,
        alt:
          "NueGrid NueBits Broker and Sales CRM",
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

export default function NuegridBlogPage() {
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
        <NuegridBlog />
      </main>

      <Footer />
    </>
  );
}