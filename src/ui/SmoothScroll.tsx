"use client";

import {
  type ReactNode,
  useEffect,
} from "react";

import {
  ReactLenis,
  useLenis,
} from "lenis/react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ScrollToTop from "@/ui/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: ReactNode;
};

function ScrollTriggerSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (
      "scrollRestoration" in
      window.history
    ) {
      window.history.scrollRestoration =
        "manual";
    }

    if (!lenis) {
      return;
    }

    /*
     * Update ScrollTrigger only when an
     * actual scroll event occurs.
     */
    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleScroll);

    const refreshFrame =
      window.requestAnimationFrame(
        () => {
          lenis.resize();
          ScrollTrigger.refresh();
        },
      );

    return () => {
      window.cancelAnimationFrame(
        refreshFrame,
      );

      lenis.off(
        "scroll",
        handleScroll,
      );
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        /*
         * Lenis controls its own RAF.
         * This avoids GSAP forcing updates
         * on every frame during mobile touch.
         */
        autoRaf: true,

        lerp: 0.14,
        smoothWheel: true,
        wheelMultiplier: 1,

        /*
         * Native touch scrolling on mobile.
         */
        syncTouch: false,
        touchMultiplier: 1,

        orientation: "vertical",
        gestureOrientation: "vertical",

        /*
         * Prevent extra nested-scroll checks
         * and mobile overscroll bounce.
         */
        allowNestedScroll: false,
        overscroll: false,

        anchors: false,
        stopInertiaOnNavigate: true,

        autoResize: true,
        respectReducedMotion: true,
      }}
    >
      <ScrollTriggerSync />
      <ScrollToTop />

      {children}
    </ReactLenis>
  );
}