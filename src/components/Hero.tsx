"use client";

import {
  useEffect,
  useRef,
} from "react";

import GridLines from "@/ui/GridLines";
import Typography from "@/ui/Typography";

export default function Hero() {
  const videoRef =
    useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;

    const playVideo = () => {
      void video.play().catch(() => {
        /*
         * Autoplay may be temporarily blocked.
         * The poster remains visible as fallback.
         */
      });
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener(
        "loadeddata",
        playVideo,
        {
          once: true,
        },
      );
    }

    const handleVisibilityChange = () => {
      if (
        document.visibilityState ===
        "visible"
      ) {
        playVideo();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      video.removeEventListener(
        "loadeddata",
        playVideo,
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );

      video.pause();
    };
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        h-[calc(100svh-var(--navbar-height,64px))]
        min-h-[560px] w-full
        shrink-0 overflow-hidden
        bg-black

        [--hero-grid-gutter:20px]

        md:min-h-[650px]
        md:[--hero-grid-gutter:5%]

        lg:h-[calc(100svh-var(--navbar-height,122px))]
        lg:min-h-[680px]
        lg:[--hero-grid-gutter:7.465278%]
      "
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero.png"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        aria-hidden="true"
        tabIndex={-1}
        className="
          pointer-events-none
          absolute inset-0
          h-full w-full
          select-none
          object-cover object-center
        "
      >
        <source
          src="/video/prospero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="
          hero-overlay-animation
          pointer-events-none
          absolute inset-0 z-[1]
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 22.83%, rgba(0,0,0,0.32) 58%, #000 100%)",
        }}
      />

      {/* Responsive grid lines */}
      <div
        aria-hidden="true"
        className="
          hero-grid-animation
          pointer-events-none
          absolute inset-0 z-10
        "
      >
        <GridLines
          thickness={0.5}
          color="rgba(255,255,255,0.4)"
          zIndex={10}
          verticalLines={[
            {
              left:
                "var(--hero-grid-gutter)",
            },
            {
              right:
                "var(--hero-grid-gutter)",
            },
          ]}
        />
      </div>

      {/* Mobile and tablet content */}
      <div
        className="
          absolute
          bottom-[clamp(42px,8svh,76px)]
          left-[calc(var(--hero-grid-gutter)+16px)]
          right-[calc(var(--hero-grid-gutter)+16px)]
          z-20 flex min-w-0
          flex-col gap-[20px]

          md:left-[calc(var(--hero-grid-gutter)+24px)]
          md:right-[calc(var(--hero-grid-gutter)+24px)]
          md:max-w-[680px]
          md:gap-[24px]

          lg:hidden
        "
      >
        <Typography
          as="h1"
          variant="heroHeading"
          className="
            hero-heading-animation
            min-w-0
            !m-0
            !break-words
            !text-[clamp(30px,8vw,44px)]
            !leading-[1.06]
            !tracking-[-0.045em]
          "
        >
          <span className="block">
            Building Businesses.
          </span>

          <span className="block">
            Creating Lasting Value.
          </span>
        </Typography>

        <Typography
          as="p"
          variant="heroDescription"
          className="
            hero-description-animation
            min-w-0
            !m-0
            max-w-[520px]
            !break-words
            !text-[clamp(14px,2.2vw,17px)]
            !leading-[1.45]
          "
        >
          A diversified holding group investing in
          ideas, building businesses, and creating
          sustainable value across industries.
        </Typography>
      </div>

      {/* Desktop heading */}
      <Typography
        as="h1"
        variant="heroHeading"
        className="
          hero-heading-animation
          absolute left-[9.31713%]
          top-[70.854271%]
          z-20 hidden
          w-[45.196759%]

          lg:block
        "
      >
        <span className="block whitespace-nowrap">
          Building Businesses.
        </span>

        <span className="block whitespace-nowrap">
          Creating Lasting Value.
        </span>
      </Typography>

      {/* Desktop description */}
      <Typography
        as="p"
        variant="heroDescription"
        className="
          hero-description-animation
          absolute left-[58.912037%]
          top-[75.477387%]
          z-20 hidden
          w-[33.622685%]

          lg:block
        "
      >
        <span className="block whitespace-nowrap">
          A diversified holding group investing in
        </span>

        <span className="block whitespace-nowrap">
          ideas, building businesses, and creating
        </span>

        <span className="block whitespace-nowrap">
          sustainable value across industries.
        </span>
      </Typography>
    </section>
  );
}