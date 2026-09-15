"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { UIEvent } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  LuArrowUpRight,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

import GridLines from "@/ui/GridLines";
import Typography from "@/ui/Typography";

type Development = {
  id: number;
  company: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

const developments: Development[] = [
  {
    id: 1,
    company: "Prospero",
    title:
      "Prospero Investment Group Enters Malayalam Cinema With Khalifa",
    image:
      "/images/blogs/prospero/prospero-02.jpg",
    imageAlt:
      "Prospero Investment Group Khalifa project",
    href:
      "/blog/prospero-investment-group-khalifa-malayalam-cinema",
  },
  {
    id: 2,
    company: "PSFX Pro",
    title:
      "PSFX Pro at Money Expo India 2026: Connecting With the Trading Community",
    image:
      "/images/blogs/psfx-pro/psfx-pro.jpg",
    imageAlt:
      "PSFX Pro at Money Expo India 2026",
    href:
      "/blog/psfx-pro-money-expo-india-2026",
  },
  {
    id: 3,
    company: "Matrix Finbiz",
    title:
      "Matrix Finbiz Expands Its Financial Services Footprint With a Microfinance Focus",
    image:
      "/images/blogs/matrix-finbiz/matrix-finbiz.jpg",
    imageAlt:
      "Matrix Finbiz financial services and microfinance",
    href:
      "/blog/matrix-finbiz-microfinance-expansion",
  },
  {
    id: 4,
    company: "NueGrid",
    title:
      "NueGrid Expands Its Technology Portfolio With NueBits CRM",
    image:
      "/images/blogs/nuegrid/nuebits-01.jpg",
    imageAlt:
      "NueGrid NueBits CRM technology platform",
    href:
      "/blog/nuegrid-nuebits-broker-sales-crm",
  },
  {
    id: 5,
    company: "Desert Castle",
    title:
      "Dubai Real Estate: Exploring the Opportunities Taking Shape",
    image:
      "/images/blogs/desert-castle/desert-castle.jpg",
    imageAlt:
      "Dubai real estate opportunities by Desert Castle",
    href:
      "/blog/dubai-real-estate-future-opportunities",
  },
  {
    id: 6,
    company: "PS Gold",
    title:
      "Understanding Gold Trading: Markets, Opportunities and Risk",
    image:
      "/images/blogs/ps-gold/ps-gold.jpg",
    imageAlt:
      "PS Gold trading markets and opportunities",
    href:
      "/blog/understanding-gold-trading-market-dynamics",
  },
  {
    id: 7,
    company: "PSFX International",
    title:
      "Beyond Borders: Turning Business Opportunities Into Market Presence",
    image:
      "/images/blogs/psfx-international/psfx-international.jpg",
    imageAlt:
      "PSFX International business facilitation services",
    href:
      "/blog/business-facilitation-services-uae",
  },
];

type DevelopmentCardProps = {
  development: Development;
};

function DevelopmentCard({
  development,
}: DevelopmentCardProps) {
  return (
    <Link
      href={development.href}
      prefetch={false}
      aria-label={`Read ${development.title}`}
      className="
        group box-border block
        h-auto w-full
        min-w-full max-w-full
        flex-[0_0_100%]
        shrink-0
        snap-start snap-always
        text-inherit no-underline

        md:min-w-[calc((100%_-_16px)/2)]
        md:max-w-[calc((100%_-_16px)/2)]
        md:flex-[0_0_calc((100%_-_16px)/2)]

        lg:h-full
        lg:min-w-[calc((100%_-_40px)/3)]
        lg:max-w-[calc((100%_-_40px)/3)]
        lg:flex-[0_0_calc((100%_-_40px)/3)]
        lg:snap-none

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#E0BE3D]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-white
      "
    >
      <article
        className="
          flex h-full w-full
          flex-col overflow-hidden
          border border-[#D7D7D7]
          bg-[#F9F9F9]
          transition-[transform,border-color]
          duration-200 ease-out

          lg:transform-gpu
          lg:group-hover:-translate-y-[2px]
          lg:group-hover:border-[#BDBDBD]

          motion-reduce:transform-none
          motion-reduce:transition-none
        "
      >
        {/* Card image */}
        <div
          className="
            relative aspect-[16/10]
            w-full shrink-0
            overflow-hidden
            bg-[#929292]

            sm:aspect-[16/9]

            md:aspect-[4/3]

            lg:aspect-auto
            lg:min-h-0
            lg:flex-1
          "
        >
          <Image
            src={development.image}
            alt={development.imageAlt}
            fill
            loading="lazy"
            quality={75}
            draggable={false}
            sizes="
              (max-width: 767px) calc(100vw - 80px),
              (max-width: 1023px) 42vw,
              (max-width: 1728px) 27vw,
              460px
            "
            className="
              select-none
              object-cover object-center
              transition-transform
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]

              lg:transform-gpu
              lg:group-hover:scale-[1.015]

              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          />

          {/* Image overlay */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0 z-10
              bg-gradient-to-b
              from-black/20
              via-transparent
              to-black/5
            "
          />

          {/* Company label */}
          <div
            className="
              absolute
              left-[14px] top-[14px]
              z-20
              bg-black/80
              px-[12px] py-[8px]

              md:left-[16px]
              md:top-[16px]

              lg:left-[clamp(14px,1.157407vw,20px)]
              lg:top-[clamp(14px,1.157407vw,20px)]
              lg:px-[clamp(12px,0.925926vw,16px)]
              lg:py-[clamp(7px,0.578704vw,10px)]
            "
          >
            <Typography
              as="span"
              variant="statLabel"
              className="
                !m-0 block
                whitespace-nowrap
                !text-[12px]
                !font-normal
                !leading-none
                !tracking-[-0.02em]
                !text-white

                md:!text-[13px]

                lg:!text-[clamp(12px,0.925926vw,16px)]
              "
            >
              {development.company}
            </Typography>
          </div>
        </div>

        {/* Card content */}
        <div
          className="
            flex min-h-[120px]
            shrink-0 items-center
            justify-between
            gap-[12px]
            px-[16px] py-[18px]

            sm:min-h-[116px]

            md:min-h-[124px]
            md:gap-[14px]
            md:px-[18px]

            lg:min-h-[112px]
            lg:gap-[clamp(14px,1.157407vw,20px)]
            lg:px-[clamp(18px,1.50463vw,26px)]
            lg:py-[clamp(16px,1.273148vw,22px)]
          "
        >
          <Typography
            as="h3"
            variant="sectionBodyDark"
            className="
              line-clamp-3
              min-w-0 flex-1
              !m-0
              !whitespace-normal
              !break-words
              !text-[14px]
              !font-normal
              !leading-[1.4]
              !tracking-[-0.018em]
              !text-black

              sm:!text-[15px]

              md:line-clamp-3
              md:!text-[16px]

              lg:line-clamp-2
              lg:!text-[clamp(15px,1.041667vw,18px)]
              lg:!leading-[1.45]
            "
          >
            {development.title}
          </Typography>

          {/* Arrow button visual */}
          <span
            aria-hidden="true"
            className="
              flex h-[40px] w-[40px]
              shrink-0 items-center
              justify-center
              rounded-full bg-black
              transition-colors
              duration-200

              md:h-[44px]
              md:w-[44px]

              lg:h-[clamp(42px,2.893519vw,50px)]
              lg:w-[clamp(42px,2.893519vw,50px)]
              lg:group-hover:bg-[#E0BE3D]
            "
          >
            <LuArrowUpRight
              aria-hidden="true"
              strokeWidth={2}
              className="
                h-[18px] w-[18px]
                shrink-0 text-white
                transition-[color,transform]
                duration-200

                lg:transform-gpu
                lg:group-hover:rotate-45
                lg:group-hover:text-black

                motion-reduce:transform-none
                motion-reduce:transition-none
              "
            />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function LatestDevelopmentsSection() {
  const sliderRef =
    useRef<HTMLDivElement | null>(null);

  const frameRef =
    useRef<number | null>(null);

  const [activePage, setActivePage] =
    useState<0 | 1>(0);

  const updateActivePage = useCallback(
    (slider: HTMLDivElement) => {
      const maximumScroll = Math.max(
        slider.scrollWidth -
          slider.clientWidth,
        0,
      );

      const scrollProgress =
        maximumScroll > 0
          ? slider.scrollLeft /
            maximumScroll
          : 0;

      const nextPage: 0 | 1 =
        scrollProgress >= 0.5
          ? 1
          : 0;

      setActivePage((currentPage) =>
        currentPage === nextPage
          ? currentPage
          : nextPage,
      );
    },
    [],
  );

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const resizeObserver =
      new ResizeObserver(() => {
        updateActivePage(slider);
      });

    resizeObserver.observe(slider);

    updateActivePage(slider);

    return () => {
      resizeObserver.disconnect();

      if (frameRef.current !== null) {
        cancelAnimationFrame(
          frameRef.current,
        );

        frameRef.current = null;
      }
    };
  }, [updateActivePage]);

  const handleSliderScroll = (
    event: UIEvent<HTMLDivElement>,
  ) => {
    if (frameRef.current !== null) {
      return;
    }

    const slider = event.currentTarget;

    frameRef.current =
      requestAnimationFrame(() => {
        updateActivePage(slider);
        frameRef.current = null;
      });
  };

  const scrollToPage = (page: 0 | 1) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const maximumScroll = Math.max(
      slider.scrollWidth -
        slider.clientWidth,
      0,
    );

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    setActivePage(page);

    slider.scrollTo({
      left:
        page === 0
          ? 0
          : maximumScroll,
      top: 0,
      behavior: reduceMotion
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section
      id="news"
      className="
        relative w-full
        overflow-x-clip
        bg-white text-black
      "
    >
      <div
        className="
          relative mx-auto
          w-full max-w-[1728px]
          overflow-hidden
          bg-white
          pb-[54px]

          [--news-grid-gutter:20px]
          [--news-content-gutter:40px]

          md:pb-[70px]
          md:[--news-grid-gutter:5%]
          md:[--news-content-gutter:calc(5%+24px)]

          lg:h-svh
          lg:min-h-[700px]
          lg:max-h-[900px]
          lg:pb-0
          lg:[--news-grid-gutter:7.465278%]
          lg:[--news-content-gutter:9.31713%]
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
                "var(--news-grid-gutter)",
            },
            {
              right:
                "var(--news-grid-gutter)",
            },
          ]}
          horizontalLines={[
            {
              top: 0,
              left:
                "var(--news-grid-gutter)",
              right:
                "var(--news-grid-gutter)",
            },
          ]}
        />

        {/* Header */}
        <div
          className="
            relative z-10
            mx-[var(--news-content-gutter)]
            min-w-0
            pb-[36px] pt-[50px]

            md:pb-[44px]
            md:pt-[68px]

            lg:absolute
            lg:left-[var(--news-content-gutter)]
            lg:right-[var(--news-content-gutter)]
            lg:top-[clamp(70px,5.208333vw,90px)]
            lg:mx-0
            lg:p-0
          "
        >
          {/* Label */}
          <div
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
              Latest Developments
            </Typography>
          </div>

          {/* Heading */}
          <div
            className="
              mt-[clamp(24px,2.083333vw,36px)]
              min-w-0
              max-w-[1000px]
            "
          >
            <Typography
              as="h2"
              variant="sectionHeadingDark"
              className="
                !m-0
                !whitespace-normal
                !break-words
                !text-[clamp(30px,8vw,40px)]
                !leading-[1.14]
                !tracking-[-0.045em]

                md:!text-[clamp(36px,5vw,48px)]

                lg:!text-[clamp(32px,2.777778vw,48px)]
              "
            >
              What&apos;s Moving Prospero Forward.
            </Typography>
          </div>
        </div>

        {/* Cards slider */}
        <div
          ref={sliderRef}
          role="region"
          aria-label="Latest developments"
          tabIndex={0}
          onScroll={handleSliderScroll}
          data-hide-scrollbar
          className="
            relative z-10
            mx-[var(--news-content-gutter)]
            flex items-stretch
            gap-[16px]
            overflow-x-auto
            overflow-y-hidden
            overscroll-x-contain
            snap-x snap-mandatory
            scroll-px-0
            touch-pan-x

            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [-webkit-overflow-scrolling:touch]
            [&::-webkit-scrollbar]:hidden

            focus-visible:outline-none

            md:gap-[16px]
            md:snap-proximity

            lg:absolute
            lg:left-[var(--news-content-gutter)]
            lg:right-[var(--news-content-gutter)]
            lg:top-[31%]
            lg:mx-0
            lg:h-[53%]
            lg:gap-[20px]
            lg:snap-none
          "
        >
          {developments.map(
            (development) => (
              <DevelopmentCard
                key={development.id}
                development={development}
              />
            ),
          )}
        </div>

        {/* Slider navigation */}
        <div
          className="
            relative z-20
            mt-[34px]
            flex items-center
            justify-center
            gap-[8px]

            md:mt-[42px]
            md:gap-[12px]

            lg:absolute
            lg:bottom-[5%]
            lg:left-1/2
            lg:mt-0
            lg:-translate-x-1/2
          "
        >
          {/* Previous button */}
          <button
            type="button"
            onClick={() => {
              scrollToPage(0);
            }}
            disabled={activePage === 0}
            aria-label="Show previous developments"
            className="
              flex h-[36px] w-[36px]
              cursor-pointer items-center
              justify-center
              border-0 bg-transparent
              text-black
              transition-[color,opacity,transform]
              duration-200 ease-out

              hover:-translate-x-[2px]
              hover:text-[#C9A51E]

              disabled:cursor-default
              disabled:opacity-30
              disabled:hover:translate-x-0
              disabled:hover:text-black

              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-[#E0BE3D]

              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          >
            <LuChevronLeft
              aria-hidden="true"
              strokeWidth={1.7}
              className="
                h-[19px] w-[19px]

                md:h-[20px]
                md:w-[20px]
              "
            />
          </button>

          {/* Page 01 */}
          <button
            type="button"
            onClick={() => {
              scrollToPage(0);
            }}
            aria-label="Show first group"
            aria-current={
              activePage === 0
                ? "page"
                : undefined
            }
            className="
              flex h-[36px]
              min-w-[32px]
              cursor-pointer
              items-center justify-center
              border-0 bg-transparent
              px-[4px]

              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-[#E0BE3D]
            "
          >
            <span
              className={`
                text-[12px]
                font-medium
                leading-none
                tracking-[0.08em]
                transition-colors
                duration-200

                ${
                  activePage === 0
                    ? "text-black"
                    : "text-black/30"
                }
              `}
            >
              01
            </span>
          </button>

          {/* Progress line */}
          <div
            aria-hidden="true"
            className="
              relative h-px
              w-[68px]
              overflow-hidden
              bg-black/15

              min-[375px]:w-[80px]
              sm:w-[96px]
              md:w-[104px]
            "
          >
            <span
              className={`
                absolute left-0 top-0
                h-full w-1/2
                bg-[#E0BE3D]
                transition-transform
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${
                  activePage === 1
                    ? "translate-x-full"
                    : "translate-x-0"
                }

                motion-reduce:transition-none
              `}
            />
          </div>

          {/* Page 02 */}
          <button
            type="button"
            onClick={() => {
              scrollToPage(1);
            }}
            aria-label="Show last group"
            aria-current={
              activePage === 1
                ? "page"
                : undefined
            }
            className="
              flex h-[36px]
              min-w-[32px]
              cursor-pointer
              items-center justify-center
              border-0 bg-transparent
              px-[4px]

              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-[#E0BE3D]
            "
          >
            <span
              className={`
                text-[12px]
                font-medium
                leading-none
                tracking-[0.08em]
                transition-colors
                duration-200

                ${
                  activePage === 1
                    ? "text-black"
                    : "text-black/30"
                }
              `}
            >
              02
            </span>
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={() => {
              scrollToPage(1);
            }}
            disabled={activePage === 1}
            aria-label="Show next developments"
            className="
              flex h-[36px] w-[36px]
              cursor-pointer items-center
              justify-center
              border-0 bg-transparent
              text-black
              transition-[color,opacity,transform]
              duration-200 ease-out

              hover:translate-x-[2px]
              hover:text-[#C9A51E]

              disabled:cursor-default
              disabled:opacity-30
              disabled:hover:translate-x-0
              disabled:hover:text-black

              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-[#E0BE3D]

              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          >
            <LuChevronRight
              aria-hidden="true"
              strokeWidth={1.7}
              className="
                h-[19px] w-[19px]

                md:h-[20px]
                md:w-[20px]
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}