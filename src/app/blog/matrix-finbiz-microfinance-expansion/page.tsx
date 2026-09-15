import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MatrixFinbizBlog from "@/components/blogs/MatrixFinbizBlog";

const pageUrl =
  "/blog/matrix-finbiz-microfinance-expansion";

const imageUrl =
  "/images/blogs/matrix-finbiz/matrix-finbiz.jpg";

const pageTitle =
  "Matrix Finbiz Expands Its Microfinance Footprint";

const pageDescription =
  "Matrix Finbiz expands its financial-services presence with a focus on microfinance, accessible credit and customer-oriented lending solutions.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  keywords: [
    "Matrix Finbiz",
    "Matrix Finbiz microfinance",
    "microfinance India",
    "NBFC microfinance",
    "financial inclusion",
    "accessible credit",
    "lending services",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "Matrix Finbiz Expands Its Financial Services Footprint With a Microfinance Focus",

    description: pageDescription,

    type: "article",

    url: pageUrl,

    images: [
      {
        url: imageUrl,
        alt:
          "Matrix Finbiz financial services and microfinance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: pageTitle,

    description:
      "Matrix Finbiz expands its financial-services presence with a focus on microfinance and accessible lending.",

    images: [imageUrl],
  },
};

export default function MatrixFinbizBlogPage() {
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
        <MatrixFinbizBlog />
      </main>

      <Footer />
    </>
  );
}