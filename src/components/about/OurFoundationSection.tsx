"use client";

import {
  LuEye,
  LuTarget,
} from "react-icons/lu";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type FoundationCard = {
  title: string;
  description: string;
  icon: typeof LuEye;
};

const foundationCards: FoundationCard[] = [
  {
    title: "Vision",
    description:
      "To be a leading multi-sector holding company recognized for creating sustainable impact across industries.",
    icon: LuEye,
  },
  {
    title: "Mission",
    description:
      "To strategically invest in, manage, and nurture businesses that redefine industry benchmarks through innovation, trust, and excellence.",
    icon: LuTarget,
  },
];

export default function OurFoundationSection() {
  return (
    <section
      id="foundation"
      className="
        relative w-full
        overflow-hidden
        bg-white text-black
      "
    >
      <div
        className="
          relative mx-auto
          w-full max-w-[1728px]
          overflow-hidden
          bg-white
          pb-[60px]

          [--foundation-grid-gutter:20px]
          [--foundation-content-gutter:40px]

          md:pb-[80px]
          md:[--foundation-grid-gutter:5%]
          md:[--foundation-content-gutter:calc(5%+24px)]

          lg:h-[clamp(545px,35.300926vw,610px)]
          lg:pb-0
          lg:[--foundation-grid-gutter:7.465278%]
          lg:[--foundation-content-gutter:9.31713%]
        "
      >
        {/* Responsive grid lines */}
        <GridLines
          thickness={0.5}
          color="#D7D7D7"
          zIndex={0}
          verticalLines={[
            {
              left:
                "var(--foundation-grid-gutter)",
            },
            {
              right:
                "var(--foundation-grid-gutter)",
            },
          ]}
          horizontalLines={[
            {
              top: 0,
              left:
                "var(--foundation-grid-gutter)",
              right:
                "var(--foundation-grid-gutter)",
            },
          ]}
        />

        {/* Label and heading */}
        <div
          className="
            relative z-10
            mx-[var(--foundation-content-gutter)]
            min-w-0
            pt-[50px]

            md:pt-[70px]

            lg:absolute
            lg:left-[var(--foundation-content-gutter)]
            lg:top-[clamp(70px,5.208333vw,90px)]
            lg:mx-0
            lg:w-[40%]
            lg:pt-0
          "
        >
          {/* Section label */}
          <ScrollReveal
            delay={40}
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
              Our Foundation
            </Typography>
          </ScrollReveal>

          {/* Main heading */}
          <ScrollReveal
            delay={100}
            distance={14}
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
                The Foundation
              </span>

              <span
                className="
                  block whitespace-normal
                  xl:whitespace-nowrap
                "
              >
                of Our Growth.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Vision and Mission cards */}
        <div
          className="
            relative z-10
            mx-[var(--foundation-content-gutter)]
            mt-[42px]
            grid min-w-0
            grid-cols-1
            gap-[20px]

            md:mt-[52px]
            md:grid-cols-2
            md:gap-[22px]

            lg:absolute
            lg:left-[11.574074%]
            lg:right-[11.574074%]
            lg:top-[43%]
            lg:mx-0
            lg:mt-0
            lg:h-[clamp(230px,15.625vw,270px)]
            lg:gap-[clamp(22px,2.314815vw,40px)]
          "
        >
          {foundationCards.map(
            (card, index) => {
              const Icon = card.icon;

              return (
                <ScrollReveal
                  key={card.title}
                  delay={
                    160 + index * 70
                  }
                  distance={12}
                  className="
                    h-full min-w-0
                  "
                >
                  <article
                    className="
                      group relative
                      flex h-full
                      min-h-[280px]
                      w-full min-w-0
                      flex-col
                      overflow-hidden
                      border border-[#E3E3E3]
                      bg-[#FAFAFA]
                      p-[30px]
                      transition-[background-color,border-color,box-shadow]
                      duration-300 ease-out

                      sm:min-h-[290px]
                      sm:p-[32px]

                      md:min-h-[300px]
                      md:p-[32px]

                      lg:block
                      lg:min-h-0
                      lg:p-0

                      hover:border-[#D5D5D5]
                      hover:bg-white
                      hover:shadow-[0_12px_32px_rgba(0,0,0,0.045)]

                      motion-reduce:transition-none
                    "
                  >
                    {/* Hover accent */}
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute left-0 top-0
                        h-[2px] w-full
                        origin-left
                        scale-x-0
                        bg-[#E0BE3D]
                        transition-transform
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        group-hover:scale-x-100

                        motion-reduce:transition-none
                      "
                    />

                    {/* Card icon */}
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.7}
                      className="
                        static
                        h-[26px] w-[26px]
                        shrink-0
                        text-[#7D7D7D]
                        transition-colors
                        duration-300

                        group-hover:text-[#E0BE3D]

                        lg:absolute
                        lg:left-[7.8%]
                        lg:top-[16%]
                        lg:h-[clamp(20px,1.388889vw,24px)]
                        lg:w-[clamp(20px,1.388889vw,24px)]

                        motion-reduce:transition-none
                      "
                    />

                    {/* Mobile/tablet spacing wrapper */}
                    <div
                      className="
                        mt-[28px]
                        flex min-w-0
                        flex-col gap-[16px]

                        md:mt-[30px]
                        md:gap-[18px]

                        lg:contents
                      "
                    >
                      {/* Card title */}
                      <Typography
                        as="h3"
                        variant="sectionBodyDark"
                        className="
                          !m-0
                          !whitespace-normal
                          !break-words
                          !text-[19px]
                          !font-medium
                          !leading-[1.2]
                          !tracking-[-0.03em]
                          !text-black

                          md:!text-[20px]

                          lg:absolute
                          lg:left-[7.8%]
                          lg:top-[44%]
                          lg:!text-[clamp(16px,1.157407vw,20px)]
                          lg:!leading-none
                        "
                      >
                        {card.title}
                      </Typography>

                      {/* Card description */}
                      <Typography
                        as="p"
                        variant="statLabel"
                        className="
                          !m-0
                          w-full
                          !whitespace-normal
                          !break-words
                          !text-[14px]
                          !font-normal
                          !leading-[1.55]
                          !tracking-[-0.015em]
                          !text-[#777777]

                          md:!text-[15px]
                          md:!leading-[1.55]

                          lg:absolute
                          lg:left-[7.8%]
                          lg:top-[58%]
                          lg:w-[82%]
                          lg:!text-[clamp(13px,0.925926vw,16px)]
                          lg:!leading-[1.35]
                        "
                      >
                        {card.description}
                      </Typography>
                    </div>
                  </article>
                </ScrollReveal>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}