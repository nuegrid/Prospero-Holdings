"use client";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

export default function TheFutureSection() {
  return (
    <section
      id="the-future"
      className="
        relative w-full
        scroll-mt-[var(--navbar-height,108px)]
        overflow-hidden
        bg-[#E4E4E4]
        text-black
      "
    >
      <div
        className="
          relative mx-auto
          w-full max-w-[1728px]
          overflow-hidden
          bg-[#E4E4E4]

          [--future-grid-gutter:20px]
          [--future-content-gutter:40px]

          pb-[60px]

          md:[--future-grid-gutter:5%]
          md:[--future-content-gutter:calc(5%+24px)]
          md:pb-[80px]

          lg:h-[clamp(480px,34.722222vw,600px)]
          lg:pb-0
          lg:[--future-grid-gutter:7.465278%]
          lg:[--future-content-gutter:9.31713%]
        "
      >
        {/* Main grid lines */}
        <GridLines
          thickness={0.5}
          color="#C8C8C8"
          zIndex={0}
          verticalLines={[
            {
              left:
                "var(--future-grid-gutter)",
            },
            {
              left: "50%",
              className: "hidden md:block",
            },
            {
              right:
                "var(--future-grid-gutter)",
            },
          ]}
          horizontalLines={[
            {
              top: 0,
              left:
                "var(--future-grid-gutter)",
              right:
                "var(--future-grid-gutter)",
            },
            {
              bottom: 0,
              left:
                "var(--future-grid-gutter)",
              right:
                "var(--future-grid-gutter)",
              className: "lg:hidden",
            },
            {
              top: "83%",
              left: "7.465278%",
              right: "7.465278%",
              className: "hidden lg:block",
            },
          ]}
        />

        {/* Responsive content area */}
        <div
          className="
            relative z-10
            mx-[var(--future-content-gutter)]
            grid grid-cols-1
            gap-[30px]
            pb-[10px] pt-[52px]

            md:grid-cols-2
            md:gap-[48px]
            md:pb-[20px]
            md:pt-[70px]

            lg:absolute
            lg:left-[9.31713%]
            lg:right-[9.259259%]
            lg:top-[clamp(70px,5.208333vw,90px)]
            lg:mx-0
            lg:block
            lg:p-0
          "
        >
          {/* Label and heading */}
          <div
            className="
              min-w-0

              lg:absolute
              lg:left-0
              lg:top-0
              lg:w-[46%]
            "
          >
            {/* Section label */}
            <ScrollReveal
              delay={40}
              distance={8}
              className="
                flex items-center
                gap-[10px]
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-[14px] w-[14px]
                  shrink-0
                  bg-[#E0BE3D]

                  md:h-[15px]
                  md:w-[15px]
                "
              />

              <Typography
                as="span"
                variant="sectionLabelDark"
                className="
                  !m-0
                  whitespace-nowrap
                "
              >
                The Future
              </Typography>
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal
              delay={90}
              distance={12}
              className="
                mt-[26px]
                min-w-0 w-full

                md:mt-[30px]

                lg:mt-[clamp(24px,2.083333vw,36px)]
              "
            >
              <Typography
                as="h2"
                variant="sectionHeadingDark"
                className="
                  !m-0
                  min-w-0
                  !whitespace-normal
                  !break-words
                  !text-[clamp(30px,8vw,38px)]
                  !leading-[1.14]
                  !tracking-[-0.045em]

                  md:!text-[clamp(34px,4.5vw,44px)]

                  lg:!text-[clamp(32px,2.777778vw,48px)]
                "
              >
                <span className="block">
                  Shaping the
                </span>

                <span
                  className="
                    block whitespace-normal

                    lg:whitespace-nowrap
                  "
                >
                  Future Together.
                </span>
              </Typography>
            </ScrollReveal>
          </div>

          {/* Description */}
          <ScrollReveal
            delay={140}
            distance={12}
            className="
              min-w-0

              lg:absolute
              lg:right-0
              lg:top-[-6px]
              lg:w-[46.5%]
            "
          >
            <div
              className="
                flex flex-col
                gap-[26px]

                md:gap-[30px]

                lg:gap-[clamp(24px,2.083333vw,36px)]
              "
            >
              <Typography
                as="p"
                variant="sectionBodyDark"
                className="
                  !m-0
                  !whitespace-normal
                  !break-words
                  !text-[15px]
                  !leading-[1.55]
                  !text-[#707070]

                  md:!text-[16px]

                  lg:!text-[clamp(16px,1.273148vw,22px)]
                  lg:!leading-[1.45]
                "
              >
                Prospero Holding continues to explore
                new markets, digital finance
                innovations, and sustainable investment
                opportunities.
              </Typography>

              <Typography
                as="p"
                variant="sectionBodyDark"
                className="
                  !m-0
                  !whitespace-normal
                  !break-words
                  !text-[15px]
                  !leading-[1.55]
                  !text-[#707070]

                  md:!text-[16px]

                  lg:!text-[clamp(16px,1.273148vw,22px)]
                  lg:!leading-[1.45]
                "
              >
                Our strategic roadmap looks toward
                areas including fintech, smart real
                estate, and international partnerships
                as we work to expand our capabilities
                and strengthen our global presence.
              </Typography>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}