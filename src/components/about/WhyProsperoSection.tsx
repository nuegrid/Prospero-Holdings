"use client";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type ProsperoReason = {
  number: string;
  title: string;
  description: string;
};

const prosperoReasons: ProsperoReason[] = [
  {
    number: "01",
    title: "Diversified Portfolio",
    description:
      "A presence across resilient and evolving industries.",
  },
  {
    number: "02",
    title: "Financial Strength",
    description:
      "A solid foundation supported by disciplined management and governance.",
  },
  {
    number: "03",
    title: "Leadership Expertise",
    description:
      "Cross-sector experience guiding businesses toward sustainable growth.",
  },
  {
    number: "04",
    title: "Innovation-Driven",
    description:
      "Adapting to evolving markets, technologies, and opportunities.",
  },
  {
    number: "05",
    title: "Sustainability Focus",
    description:
      "Creating long-term value over short-term gains.",
  },
];

export default function WhyProsperoSection() {
  return (
    <section
      id="why-prospero"
      className="
        relative w-full
        scroll-mt-[var(--navbar-height,108px)]
        overflow-hidden
        bg-black text-white
      "
    >
      <div
        className="
          relative mx-auto
          w-full max-w-[1728px]
          overflow-hidden
          bg-black

          [--why-grid-gutter:20px]
          [--why-content-gutter:40px]

          pb-[60px]

          md:[--why-grid-gutter:5%]
          md:[--why-content-gutter:calc(5%+24px)]
          md:pb-[72px]

          lg:h-[clamp(640px,41.666667vw,720px)]
          lg:pb-0
          lg:[--why-grid-gutter:7.465278%]
          lg:[--why-content-gutter:9.31713%]
        "
      >
        {/* Main grid lines */}
        <GridLines
          thickness={0.5}
          color="#2B2B2B"
          zIndex={0}
          verticalLines={[
            {
              left: "var(--why-grid-gutter)",
            },
            {
              left: "50%",
              className: "hidden md:block",
            },
            {
              right: "var(--why-grid-gutter)",
            },
          ]}
          horizontalLines={[
            {
              top: 0,
              left: "var(--why-grid-gutter)",
              right: "var(--why-grid-gutter)",
            },
            {
              top: "38%",
              left: "7.465278%",
              right: "7.465278%",
              className: "hidden lg:block",
            },
            {
              top: "55.333333%",
              left: "7.465278%",
              right: "7.465278%",
              className: "hidden lg:block",
            },
            {
              top: "72.666667%",
              left: "7.465278%",
              right: "7.465278%",
              className: "hidden lg:block",
            },
            {
              top: "90%",
              left: "7.465278%",
              right: "7.465278%",
              className: "hidden lg:block",
            },
          ]}
        />

        {/* Desktop number-column grid lines */}
        <GridLines
          thickness={0.5}
          color="#2B2B2B"
          zIndex={0}
          verticalLines={[
            {
              left: "11.805556%",
              top: "38%",
              bottom: "10%",
              className: "hidden lg:block",
            },
            {
              left: "54.340278%",
              top: "38%",
              bottom: "27.333333%",
              className: "hidden lg:block",
            },
          ]}
        />

        {/* Header */}
        <div
          className="
            relative z-10
            mx-[var(--why-content-gutter)]
            grid grid-cols-1
            gap-[28px]
            pb-[42px] pt-[52px]

            md:grid-cols-2
            md:gap-[48px]
            md:pb-[56px]
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
                variant="sectionLabelLight"
                className="
                  !m-0
                  whitespace-nowrap
                "
              >
                Why Prospero
              </Typography>
            </ScrollReveal>

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
                variant="sectionHeadingLight"
                className="
                  !m-0
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
                  Built for Today.
                </span>

                <span
                  className="
                    block
                    lg:whitespace-nowrap
                  "
                >
                  Positioned for Tomorrow.
                </span>
              </Typography>
            </ScrollReveal>
          </div>

          {/* Introduction */}
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
            <Typography
              as="p"
              variant="sectionBodyLight"
              className="
                !m-0
                !whitespace-normal
                !break-words
                !text-[15px]
                !leading-[1.55]
                !text-[#8E8E8E]

                md:!text-[16px]

                lg:!text-[clamp(16px,1.273148vw,22px)]
                lg:!leading-[1.45]
              "
            >
              Our diversified model allows us to pursue
              opportunities across industries while
              maintaining a unified strategic direction.
            </Typography>
          </ScrollReveal>
        </div>

        {/* Header bottom grid line */}
        <div
          aria-hidden="true"
          className="
            relative z-20
            mx-[var(--why-grid-gutter)]
            h-[0.5px]
            bg-[#2B2B2B]

            lg:hidden
          "
        />

        {/* Reason cards */}
        <div
          className="
            relative z-10
            mx-[var(--why-grid-gutter)]
            grid grid-cols-1
            border-x-[0.5px]
            border-[#2B2B2B]

            md:grid-cols-2

            lg:absolute
            lg:left-[7.465278%]
            lg:right-[7.465278%]
            lg:top-[38%]
            lg:mx-0
            lg:h-[52%]
            lg:grid-cols-2
            lg:grid-rows-3
            lg:border-x-0
          "
        >
          {prosperoReasons.map((reason, index) => (
            <ScrollReveal
              key={reason.number}
              delay={170 + index * 40}
              distance={8}
              className="
                relative min-w-0
                border-b-[0.5px]
                border-[#2B2B2B]

                md:[&:nth-child(odd)]:border-r-[0.5px]
                md:[&:nth-child(odd)]:border-r-[#2B2B2B]

                lg:h-full
                lg:border-0
              "
            >
              <article
                className="
                  relative flex
                  w-full items-start
                  gap-[20px]
                  overflow-hidden
                  bg-black
                  px-[20px] py-[28px]

                  sm:gap-[24px]
                  sm:px-[24px]
                  sm:py-[30px]

                  md:h-full
                  md:min-h-[165px]
                  md:gap-[24px]
                  md:px-[28px]
                  md:py-[32px]

                  lg:block
                  lg:min-h-0
                  lg:border-0
                  lg:bg-transparent
                  lg:p-0
                "
              >
                {/* Number/content vertical grid line */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute bottom-0 top-0
                    left-[54px]
                    z-0 w-[0.5px]
                    bg-[#2B2B2B]

                    sm:left-[58px]
                    md:left-[62px]

                    lg:hidden
                  "
                />

                {/* Number */}
                <Typography
                  as="span"
                  variant="cardNumberLight"
                  className="
                    relative z-10
                    !m-0
                    w-[26px]
                    shrink-0
                    whitespace-nowrap
                    font-[family-name:var(--font-geist-sans)]
                    !text-[clamp(12px,0.925926vw,16px)]
                    !font-medium
                    !leading-none
                    !tracking-[-0.02em]
                    !text-[#8E8E8E]

                    md:w-[30px]

                    lg:absolute
                    lg:left-[3%]
                    lg:top-[19%]
                    lg:z-auto
                    lg:w-auto
                  "
                >
                  {reason.number}
                </Typography>

                {/* Card content */}
                <div
                  className="
                    relative z-10
                    flex min-w-0 flex-1
                    flex-col gap-[12px]

                    md:gap-[14px]

                    lg:contents
                  "
                >
                  <Typography
                    as="h3"
                    variant="cardTitleLight"
                    className="
                      !m-0
                      max-w-full
                      !whitespace-normal
                      !break-words
                      !font-medium
                      !leading-[1.18]
                      !tracking-[-0.025em]
                      !text-white

                      lg:absolute
                      lg:left-[15.2%]
                      lg:top-[18%]
                      lg:w-[76%]
                    "
                  >
                    {reason.title}
                  </Typography>

                  <Typography
                    as="p"
                    variant="statLabel"
                    className="
                      !m-0
                      block w-full
                      max-w-[780px]
                      overflow-visible
                      !whitespace-normal
                      !break-words
                      !text-[13px]
                      !font-normal
                      !leading-[1.45]
                      !tracking-[-0.015em]
                      !text-[#8E8E8E]

                      sm:!text-[14px]

                      lg:absolute
                      lg:left-[15.2%]
                      lg:top-[48%]
                      lg:w-[68%]
                    "
                  >
                    {reason.description}
                  </Typography>
                </div>
              </article>
            </ScrollReveal>
          ))}

          {/* Desktop empty bottom-right grid box */}
          <div
            aria-hidden="true"
            className="
              hidden h-full w-full
              lg:block
            "
          />
        </div>
      </div>
    </section>
  );
}