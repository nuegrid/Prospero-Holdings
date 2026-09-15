import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { SmoothCursor } from "@/registry/magicui/smooth-cursor";
import SmoothScroll from "@/ui/SmoothScroll";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prospero Holding",
  description: "Prospero Holding",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          antialiased
        `}
      >
        {/* Whole website smooth scrolling */}
        <SmoothScroll>
          {children}
        </SmoothScroll>

        {/* Custom cursor */}
        <SmoothCursor
          size={8}
          offset={18}
          color="#E0BE3D"
          smoothing={0.2}
          labelWidth={100}
          labelHeight={42}
        />
      </body>
    </html>
  );
}