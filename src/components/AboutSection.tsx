import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type AboutSectionProps = {
  showDiscoverButton?: boolean;
};

export default function AboutSection({
  showDiscoverButton = true,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className="
        relative w-full
        overflow-hidden
        bg-white text-black
      "
    >
      <div
        className="
          relative mx-auto
          min-h-[500px]
          max-h-[600px]
          w-full max-w-[1728px]
          overflow-hidden
          bg-white

          max-md:!h-auto
          max-md:!min-h-0
          max-md:max-h-none
          max-md:pb-[40px]
        "
        style={{
          height: `
            calc(
              (
                100svh -
                var(--navbar-height, 108px)
              ) / 2 + clamp(
                100px,
                6.944444vw,
                120px
              )
            )
          `,
        }}
      >
        {/* Vertical grid lines */}
        <GridLines
          thickness={0.5}
          color="#D7D7D7"
          zIndex={1}
          verticalLines={[
            {
              left: "7.465278%",
              className:
                "!left-5 md:!left-[7.465278%]",
            },
            {
              left: "50%",
              hideOnMobile: true,
            },
            {
              right: "7.465278%",
              className:
                "!right-5 md:!right-[7.465278%]",
            },
          ]}
        />

        {/* Single Hero–About boundary line */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute left-5 right-5
            top-0 z-[5]
            bg-[#D7D7D7]

            md:left-[7.465278%]
            md:right-[7.465278%]
          "
          style={{
            height: "0.5px",
          }}
        />

        {/* Inner line — tablet and desktop only */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[7.465278%]
            right-[7.465278%]
            top-[18%]
            z-[5]
            hidden
            bg-[#D7D7D7]

            md:block
          "
          style={{
            height: "0.5px",
          }}
        />

        {/* Bottom grid line */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute bottom-0
            left-5 right-5
            z-[5]
            bg-[#D7D7D7]

            md:left-[7.465278%]
            md:right-[7.465278%]
          "
          style={{
            height: "0.5px",
          }}
        />

        {/* Content */}
        <div
          className="
            relative z-10
            mx-5 mt-[40px]
            flex flex-col

            md:absolute
            md:bottom-0
            md:left-[7.465278%]
            md:right-[7.465278%]
            md:top-[18%]
            md:mx-0
            md:mt-0
            md:grid
            md:grid-cols-2
          "
        >
          {/* Left column */}
          <div
            className="
              relative min-w-0
              px-[20px]
              pb-[10px]
              pt-[10px]

              md:px-[clamp(28px,2.083333vw,36px)]
              md:pb-[clamp(42px,3.472222vw,60px)]
              md:pt-[clamp(70px,5.208333vw,90px)]
            "
          >
            {/* Label */}
            <ScrollReveal
              delay={50}
              distance={12}
              className="
                flex items-center
                gap-[10px]
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-[15px] w-[15px]
                  shrink-0
                  bg-[#E0BE3D]
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
                Who We Are
              </Typography>
            </ScrollReveal>

            {/* Heading */}
            <ScrollReveal
              delay={120}
              distance={18}
              className="
                mt-[clamp(24px,2.083333vw,36px)]
              "
            >
              <Typography
                as="h2"
                variant="sectionHeadingDark"
                className="
                  !m-0
                  !leading-[1.15]
                  !tracking-[-0.045em]
                "
              >
                <span
                  className="
                    block whitespace-normal
                    lg:whitespace-nowrap
                  "
                >
                  The Power Behind
                </span>

                <span
                  className="
                    block whitespace-normal
                    lg:whitespace-nowrap
                  "
                >
                  Diversified Excellence.
                </span>
              </Typography>
            </ScrollReveal>

            {/* Discover button */}
            {showDiscoverButton && (
              <ScrollReveal
                delay={280}
                distance={14}
                className="
                  mt-[clamp(40px,3.125vw,54px)]
                "
              >
                <Link
                  href="/about"
                  aria-label="Discover Prospero"
                  className="
                    group relative isolate
                    inline-flex min-h-[42px]
                    items-center justify-center
                    gap-[10px]
                    overflow-hidden
                    border border-black
                    bg-white
                    px-[16px] py-[10px]
                    text-black no-underline
                    transition-[transform,box-shadow]
                    duration-300 ease-out

                    hover:-translate-y-px
                    hover:shadow-[0_8px_22px_rgba(0,0,0,0.14)]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#E0BE3D]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-white

                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-0 z-0
                      origin-left scale-x-0
                      bg-black
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      group-hover:scale-x-100
                      group-focus-visible:scale-x-100

                      motion-reduce:transition-none
                    "
                  />

                  <Typography
                    as="span"
                    variant="buttonDark"
                    className="
                      relative z-10
                      !m-0 whitespace-nowrap
                      transition-colors
                      duration-500 ease-out

                      group-hover:!text-white
                      group-focus-visible:!text-white

                      motion-reduce:transition-none
                    "
                  >
                    Discover Prospero
                  </Typography>

                  <GoArrowRight
                    aria-hidden="true"
                    strokeWidth={0.8}
                    className="
                      relative z-10
                      h-[20px] w-[20px]
                      shrink-0 text-black
                      transition-[color,transform]
                      duration-500 ease-out

                      group-hover:translate-x-[3px]
                      group-hover:text-white
                      group-focus-visible:translate-x-[3px]
                      group-focus-visible:text-white

                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  />
                </Link>
              </ScrollReveal>
            )}
          </div>

          {/* Right description column */}
          <div
            className="
              relative min-w-0
              px-[20px]
              pb-[34px]
              pt-[34px]

              md:px-[clamp(28px,2.083333vw,36px)]
              md:pb-[clamp(42px,3.472222vw,60px)]
              md:pt-[clamp(70px,5.208333vw,90px)]
            "
          >
            <ScrollReveal
              delay={200}
              distance={18}
              className="
                relative top-0
                w-full
                md:-top-[6px]
              "
            >
              <div
                className="
                  flex flex-col
                  gap-[clamp(24px,2.083333vw,36px)]
                "
              >
                <Typography
                  as="p"
                  variant="sectionBodyDark"
                  className="
                    !m-0
                    !whitespace-normal
                    !break-words
                  "
                >
                  Prospero Holding is a multi-sector
                  investment and management company
                  driving innovation, value creation,
                  and long-term growth.
                </Typography>

                <Typography
                  as="p"
                  variant="sectionBodyDark"
                  className="
                    !m-0
                    !whitespace-normal
                    !break-words
                  "
                >
                  As the strategic parent organization
                  to a diverse portfolio of businesses,
                  we provide direction, financial
                  expertise, and operational support –
                  enabling each venture to grow with
                  purpose and perform in its market.
                </Typography>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}