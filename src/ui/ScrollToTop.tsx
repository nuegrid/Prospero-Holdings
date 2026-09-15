"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const lenis = useLenis();
  const pathname = usePathname();

  useLayoutEffect(() => {
    /*
     * If navigating to a specific section via hash or pending section,
     * let the section navigation logic handle positioning.
     */
    if (typeof window !== "undefined") {
      const pendingSection = sessionStorage.getItem("prospero-pending-section");
      const hash = window.location.hash.trim();
      if (pendingSection || (hash && pathname === "/")) {
        return;
      }
    }

    /*
     * Reset page position immediately.
     * No visible smooth animation is used
     * when opening a new route.
     */
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });

      return;
    }

    /*
     * Fallback before Lenis is ready.
     */
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [lenis, pathname]);

  return null;
}