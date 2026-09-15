import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProsperoBlog from "@/components/blogs/ProsperoBlog";

const pageUrl =
  "/blog/prospero-investment-group-khalifa-malayalam-cinema";

const imageUrl =
  "/images/blogs/prospero/prospero-01.jpg";

export const metadata: Metadata = {
  title:
    "Prospero Investment Group Enters Malayalam Cinema",

  description:
    "Prospero Investment Group's reported investment in Malayalam cinema marks a new direction in its broader investment outlook.",

  keywords: [
    "Prospero Investment Group",
    "Prospero Khalifa",
    "Malayalam cinema investment",
    "entertainment investment",
    "Khalifa movie",
    "Prithviraj Sukumaran",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "Prospero Investment Group Enters Malayalam Cinema With Khalifa",

    description:
      "Prospero Investment Group's reported investment in Malayalam cinema marks a new direction in its broader investment outlook.",

    type: "article",
    url: pageUrl,

    images: [
      {
        url: imageUrl,
        alt:
          "Prospero Investment Group Khalifa project",
      },
    ],
  },
};

export default function ProsperoBlogPage() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-w-0 w-full
          overflow-x-clip bg-white
        "
      >
        <ProsperoBlog />
      </main>

      <Footer />
    </>
  );
}