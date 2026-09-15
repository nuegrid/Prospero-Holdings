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
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!lenis) {
      return;
    }

    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };

    const updateLenis = (
      time: number,
    ) => {
      lenis.raf(time * 1000);
    };

    lenis.on(
      "scroll",
      handleLenisScroll,
    );

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const refreshFrame =
      requestAnimationFrame(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      });

    return () => {
      cancelAnimationFrame(
        refreshFrame,
      );

      lenis.off(
        "scroll",
        handleLenisScroll,
      );

      gsap.ticker.remove(updateLenis);
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
        autoRaf: false,
        lerp: 0.14,
        smoothWheel: true,
        wheelMultiplier: 1,

        /*
         * Allows vertical page scrolling when
         * cursor is over cards and sliders.
         */
        allowNestedScroll: true,

        gestureOrientation: "vertical",
        orientation: "vertical",

        syncTouch: false,
        touchMultiplier: 1,

        anchors: false,
        stopInertiaOnNavigate: true,

        overscroll: true,
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