import type {
  CSSProperties,
} from "react";

import Image from "next/image";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type Sector = {
  number: string;
  title: string;
  description: string;
  icon: string;
  iconPosition: CSSProperties;
};

const sectors: Sector[] = [
  {
    number: "01",
    title: "Finance",
    description:
      "Accessible financial solutions.",
    icon:
      "/images/sectors/finance.svg",
    iconPosition: {
      left: "29.33%",
      top: "23.9%",
      width: "37.83%",
      height: "33.51%",
    },
  },
  {
    number: "02",
    title: "Real Estate",
    description:
      "Designing spaces and assets for enduring value.",
    icon:
      "/images/sectors/real-estate.svg",
    iconPosition: {
      left: "27.57%",
      top: "22.37%",
      width: "40.92%",
      height: "31.54%",
    },
  },
  {
    number: "03",
    title: "Investments",
    description:
      "Strategic wealth and growth.",
    icon:
      "/images/sectors/investments.svg",
    iconPosition: {
      left: "34.31%",
      top: "25.22%",
      width: "31.91%",
      height: "28.24%",
    },
  },
  {
    number: "04",
    title: "Precious Metals",
    description:
      "Trusted gold and metal solutions.",
    icon:
      "/images/sectors/precious-metals.svg",
    iconPosition: {
      left: "30.5%",
      top: "25.66%",
      width: "35.07%",
      height: "24.54%",
    },
  },
  {
    number: "05",
    title: "Forex & Trading",
    description:
      "Revolutionizing finance with tech and know-how.",
    icon:
      "/images/sectors/forex-trading.svg",
    iconPosition: {
      left: "28.74%",
      top: "26.75%",
      width: "43.07%",
      height: "28.35%",
    },
  },
  {
    number: "06",
    title: "Insurance",
    description:
      "Offering clear, client-centered risk solutions.",
    icon:
      "/images/sectors/insurance.svg",
    iconPosition: {
      left: "31.09%",
      top: "24.78%",
      width: "33.99%",
      height: "29.76%",
    },
  },
  {
    number: "07",
    title: "Education & Tech",
    description:
      "Knowledge and digital innovation.",
    icon:
      "/images/sectors/education-tech.svg",
    iconPosition: {
      left: "26.69%",
      top: "26.1%",
      width: "46.93%",
      height: "28.74%",
    },
  },
];

type SectorCardProps = {
  sector: Sector;
};

function SectorCard({
  sector,
}: SectorCardProps) {
  return (
    <article
      className="
        group relative isolate
        h-full w-full min-w-0
        overflow-hidden
        border border-[#D7D7D7]
        bg-[#F9F9F9]
        transition-[transform,box-shadow]
        duration-500 ease-out

        hover:-translate-y-[3px]
        hover:shadow-[0_16px_38px_rgba(0,0,0,0.10)]

        motion-reduce:transform-none
        motion-reduce:transition-none
      "
    >
      {/* Yellow hover background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-0
          origin-bottom-left
          scale-0
          bg-[#E0BE3D]
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:scale-100

          motion-reduce:transition-none
        "
      />

      {/* Subtle lighting */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[1]
          bg-gradient-to-tr
          from-black/[0.03]
          via-transparent
          to-white/[0.18]
          opacity-0
          transition-opacity
          duration-500 ease-out

          group-hover:opacity-100

          motion-reduce:transition-none
        "
      />

      {/* Complete four-side hover border */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-20
          border border-transparent
          transition-colors
          duration-300 ease-out

          group-hover:border-[#B99A25]

          motion-reduce:transition-none
        "
      />

      {/* Card number */}
      <Typography
        as="p"
        variant="cardNumberDark"
        className="
          absolute
          left-[9.090909%]
          top-[8.991228%]
          z-10
          !m-0
          whitespace-nowrap
          transition-transform
          duration-500 ease-out

          group-hover:translate-x-[3px]

          motion-reduce:transform-none
          motion-reduce:transition-none
        "
      >
        {sector.number}
      </Typography>

      {/* Sector icon */}
      <div
        aria-hidden="true"
        className="
          absolute z-10
          transition-transform
          duration-700 ease-out

          group-hover:-translate-y-[5px]
          group-hover:scale-[1.04]

          motion-reduce:transform-none
          motion-reduce:transition-none
        "
        style={sector.iconPosition}
      >
        <Image
          src={sector.icon}
          alt=""
          fill
          draggable={false}
          sizes="
            (max-width: 767px) 36vw,
            (max-width: 1023px) 18vw,
            (max-width: 1728px) 9vw,
            150px
          "
          className="
            select-none
            object-contain
            transition-[filter]
            duration-500

            group-hover:[filter:drop-shadow(0_2px_1px_rgba(0,0,0,0.18))]

            motion-reduce:transition-none
          "
        />
      </div>

      {/* Card title */}
      <Typography
        as="h3"
        variant="cardTitleDark"
        className="
          absolute
          left-[9.090909%]
          top-[66%]
          z-10
          w-[81.818182%]
          !m-0
          whitespace-normal
          !leading-[1.15]
          transition-transform
          duration-500 ease-out

          sm:whitespace-nowrap

          lg:top-[69.736842%]

          group-hover:translate-x-[3px]

          motion-reduce:transform-none
          motion-reduce:transition-none
        "
      >
        {sector.title}
      </Typography>

      {/* Card description */}
      <Typography
        as="p"
        variant="statLabel"
        className="
          absolute
          left-[9.090909%]
          top-[77%]
          z-10
          w-[81.818182%]
          !m-0
          !text-[13px]
          !leading-[1.4]
          transition-[color,transform]
          duration-500 ease-out

          sm:!text-[14px]

          lg:top-[79.605263%]

          group-hover:translate-x-[3px]
          group-hover:!text-black/75

          motion-reduce:transform-none
          motion-reduce:transition-none
        "
      >
        {sector.description}
      </Typography>

      {/* Bottom hover accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 left-0
          z-30
          h-[3px] w-0
          bg-black
          transition-[width]
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:w-full

          motion-reduce:transition-none
        "
      />
    </article>
  );
}

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="
        w-full overflow-hidden
        border-b-[0.5px]
        border-[#D7D7D7]
        bg-white
      "
    >
      <div
        className="
          relative mx-auto
          w-full max-w-[1728px]
          overflow-hidden
          bg-white
          pb-[60px]

          md:pb-[80px]

          lg:aspect-[1728/1425]
          lg:pb-0
        "
      >
        {/* Responsive vertical grid lines */}
        <GridLines
          thickness={0.5}
          color="#D7D7D7"
          zIndex={0}
          verticalLines={[
            {
              left: "7.465278%",
              className:
                "!left-5 md:!left-[5%] lg:!left-[7.465278%]",
            },
            {
              left: "50%",
              color: "#EEEEEE",
              className:
                "hidden lg:block",
            },
            {
              right: "7.465278%",
              className:
                "!right-5 md:!right-[5%] lg:!right-[7.465278%]",
            },
          ]}
        />

        {/*
         * Duplicate top horizontal line removed.
         * FootprintSection bottom line is used
         * as the section boundary.
         */}

        {/* Label and heading */}
        <div
          className="
            relative z-10
            mx-5 px-5
            pt-[50px]

            md:mx-[5%]
            md:px-[24px]
            md:pt-[70px]

            lg:absolute
            lg:left-[9.31713%]
            lg:top-[clamp(70px,5.208333vw,90px)]
            lg:mx-0
            lg:w-[40%]
            lg:px-0
            lg:pt-0
          "
        >
          {/* Section label */}
          <ScrollReveal
            delay={30}
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
              Eco System
            </Typography>
          </ScrollReveal>

          {/* Section heading */}
          <ScrollReveal
            delay={80}
            distance={10}
            className="
              mt-[clamp(24px,2.083333vw,36px)]
              min-w-0 w-full
            "
          >
            <Typography
              as="h2"
              variant="sectionHeadingDark"
              className="
                min-w-0
                !m-0
                !break-words
                !text-[clamp(30px,8vw,38px)]
                !leading-[1.14]
                !tracking-[-0.045em]

                md:!text-[clamp(36px,5vw,48px)]

                lg:!text-[clamp(32px,2.777778vw,48px)]
              "
            >
              <span
                className="
                  block whitespace-normal

                  xl:whitespace-nowrap
                "
              >
                Seven Sectors.
              </span>

              <span
                className="
                  block whitespace-normal

                  xl:whitespace-nowrap
                "
              >
                One Strategic Vision.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Introduction */}
        <div
          className="
            relative z-10
            mx-5 mt-[28px]
            px-5

            md:mx-[5%]
            md:mt-[34px]
            md:max-w-[680px]
            md:px-[24px]

            lg:absolute
            lg:left-[51.388889%]
            lg:top-[clamp(70px,5.208333vw,90px)]
            lg:mx-0
            lg:-mt-[6px]
            lg:w-[39.351852%]
            lg:max-w-none
            lg:px-0
          "
        >
          <ScrollReveal
            delay={130}
            distance={10}
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
              Our businesses span various sectors,
              including finance, real estate,
              technology, and education, all united by
              a common goal: to create sustainable
              value.
            </Typography>
          </ScrollReveal>
        </div>

        {/* Cards container */}
        <div
          className="
            relative z-10
            mx-5 mt-[40px]
            px-5

            md:mx-[5%]
            md:mt-[52px]
            md:px-[24px]

            lg:absolute
            lg:left-1/2
            lg:top-[25.5%]
            lg:mx-0
            lg:mt-0
            lg:h-[62.5%]
            lg:w-[78%]
            lg:-translate-x-1/2
            lg:px-0
          "
        >
          {/* First row */}
          <div
            className="
              relative grid
              w-full grid-cols-1
              gap-[18px]

              md:grid-cols-2
              md:gap-[20px]

              lg:absolute
              lg:left-0
              lg:top-0
              lg:h-[49%]
              lg:grid-cols-4
              lg:gap-[0.9%]
            "
          >
            {sectors
              .slice(0, 4)
              .map((sector, index) => (
                <ScrollReveal
                  key={sector.number}
                  delay={
                    160 + index * 40
                  }
                  distance={10}
                  className="
                    h-[265px]
                    min-w-0

                    sm:h-[280px]

                    md:h-[300px]

                    lg:h-full
                  "
                >
                  <SectorCard
                    sector={sector}
                  />
                </ScrollReveal>
              ))}
          </div>

          {/* Second row */}
          <div
            className="
              relative mt-[18px]
              grid w-full
              grid-cols-1
              gap-[18px]

              md:mt-[20px]
              md:grid-cols-2
              md:gap-[20px]

              lg:absolute
              lg:left-1/2
              lg:top-[51%]
              lg:mt-0
              lg:h-[49%]
              lg:w-[74.75%]
              lg:-translate-x-1/2
              lg:grid-cols-3
              lg:gap-[1.2%]
            "
          >
            {sectors
              .slice(4)
              .map((sector, index) => (
                <ScrollReveal
                  key={sector.number}
                  delay={
                    230 + index * 40
                  }
                  distance={10}
                  className="
                    h-[265px]
                    min-w-0

                    sm:h-[280px]

                    md:h-[300px]

                    lg:h-full
                  "
                >
                  <SectorCard
                    sector={sector}
                  />
                </ScrollReveal>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}