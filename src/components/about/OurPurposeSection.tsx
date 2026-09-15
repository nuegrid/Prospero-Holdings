import Image from "next/image";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

export default function OurPurposeSection() {
  return (
    <section
      id="our-purpose"
      className="
        relative w-full
        overflow-hidden
        bg-white text-black
      "
    >
      <div
        className="
          relative mx-auto
          min-h-[950px]
          w-full max-w-[1728px]
          overflow-hidden
          bg-white

          [--purpose-grid-gutter:20px]
          [--purpose-content-padding:20px]

          max-lg:!h-auto
          max-lg:!min-h-0
          max-lg:pb-[60px]

          md:[--purpose-grid-gutter:5%]
          md:[--purpose-content-padding:24px]
          md:pb-[80px]

          lg:[--purpose-grid-gutter:7.465278%]
          lg:[--purpose-content-padding:clamp(28px,2.083333vw,36px)]
          lg:pb-0
        "
        style={{
          height: `
            calc(
              100svh -
              var(--navbar-height, 108px) +
              clamp(
                180px,
                12.731481vw,
                220px
              )
            )
          `,
        }}
      >
        {/* Main grid lines */}
        <GridLines
          thickness={0.5}
          color="#D7D7D7"
          zIndex={1}
          verticalLines={[
            {
              left:
                "var(--purpose-grid-gutter)",
            },
            {
              left: "50%",
              className: "hidden lg:block",
            },
            {
              right:
                "var(--purpose-grid-gutter)",
            },
          ]}
          horizontalLines={[
            {
              top: "5%",
              left: "7.465278%",
              right: "7.465278%",
              className: "hidden lg:block",
            },
            {
              top: "54.5%",
              left: "7.465278%",
              right: "7.465278%",
              className: "hidden lg:block",
            },
            {
              top: "60%",
              left: "7.465278%",
              right: "7.465278%",
              className: "hidden lg:block",
            },
          ]}
        />

        {/* Building image */}
        <div
          className="
            relative z-10
            mx-[var(--purpose-grid-gutter)]
            mt-[30px]
            aspect-[16/10]
            overflow-hidden
            bg-[#E7EBEF]

            md:mt-[40px]
            md:aspect-[16/8]

            lg:absolute
            lg:left-[7.465278%]
            lg:right-[7.465278%]
            lg:top-[5%]
            lg:mx-0
            lg:mt-0
            lg:h-[49.5%]
            lg:aspect-auto
          "
        >
          <Image
            src="/about/our-purpose.jpg"
            alt="Modern business buildings"
            fill
            loading="eager"
            fetchPriority="high"
            quality={85}
            draggable={false}
            sizes="
              (max-width: 767px) calc(100vw - 40px),
              (max-width: 1023px) 90vw,
              (max-width: 1728px) 85.069444vw,
              1470px
            "
            className="
              select-none
              object-cover object-center
            "
          />

          {/* Subtle image overlay */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              bg-black/[0.02]
            "
          />
        </div>

        {/* Desktop image/content spacing */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[7.465278%]
            right-[7.465278%]
            top-[54.5%]
            hidden h-[5.5%]
            bg-white

            lg:block
          "
        />

        {/* Content area */}
        <div
          className="
            relative z-20
            mx-[var(--purpose-grid-gutter)]
            mt-[40px]
            grid grid-cols-1

            md:mt-[48px]
            md:grid-cols-2

            lg:absolute
            lg:bottom-0
            lg:left-[7.465278%]
            lg:right-[7.465278%]
            lg:top-[60%]
            lg:mx-0
            lg:mt-0
          "
        >
          {/* Left content column */}
          <div
            className="
              relative min-w-0
              px-[var(--purpose-content-padding)]
              pb-[10px]
              pt-[10px]

              md:pb-[30px]
              md:pt-[40px]

              lg:px-[clamp(28px,2.083333vw,36px)]
              lg:pb-[clamp(42px,3.472222vw,60px)]
              lg:pt-[clamp(70px,5.208333vw,90px)]
            "
          >
            {/* Our Purpose label */}
            <ScrollReveal
              delay={50}
              distance={10}
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
                Our Purpose
              </Typography>
            </ScrollReveal>

            {/* Purpose heading */}
            <ScrollReveal
              delay={120}
              distance={16}
              className="
                mt-[clamp(24px,2.083333vw,36px)]
                min-w-0 w-full
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
                  !text-[clamp(30px,8vw,40px)]
                  !leading-[1.14]
                  !tracking-[-0.045em]

                  md:!text-[clamp(32px,4.5vw,44px)]

                  lg:!text-[clamp(32px,2.777778vw,48px)]
                "
              >
                <span
                  className="
                    block whitespace-normal
                    xl:whitespace-nowrap
                  "
                >
                  One Vision.
                </span>

                <span
                  className="
                    block whitespace-normal
                    xl:whitespace-nowrap
                  "
                >
                  Many Opportunities.
                </span>
              </Typography>
            </ScrollReveal>
          </div>

          {/* Right description column */}
          <div
            className="
              relative min-w-0
              px-[var(--purpose-content-padding)]
              pb-[34px]
              pt-[34px]

              md:pb-[30px]
              md:pt-[40px]

              lg:px-[clamp(28px,2.083333vw,36px)]
              lg:pb-[clamp(42px,3.472222vw,60px)]
              lg:pt-[clamp(70px,5.208333vw,90px)]
            "
          >
            <ScrollReveal
              delay={190}
              distance={16}
              className="
                relative top-0
                w-full

                lg:-top-[6px]
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
                  We bring together businesses across
                  diverse industries to create a
                  balanced and future-ready ecosystem.
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
                  By combining specialized expertise
                  with strategic oversight, Prospero
                  Holding aims to strengthen every
                  business within the group while
                  creating sustainable value for
                  clients, partners, stakeholders, and
                  the communities we serve.
                </Typography>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}