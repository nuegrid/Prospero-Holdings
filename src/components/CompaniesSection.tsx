"use client";

import {
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type Company = {
  number: string;
  name: string;
  description: string;
  logo: string;
  image: string;
  imageAlt: string;
  website: string;
};

const companies: Company[] = [
  {
    number: "01",
    name: "Prospero Investment Group",
    description:
      "Trusted financial advisory, wealth management, investment planning, and risk solutions for confident long-term growth.",
    logo:
      "/images/company-logos/prospero-investment-logo.svg",
    image: "/images/prospero-group.png",
    imageAlt:
      "Prospero Investment Group investment and wealth management",
    website: "https://prospero.ae/",
  },
  {
    number: "02",
    name: "PSFX Pro",
    description:
      "Transparent trade execution, competitive trading conditions, and reliable access to global financial markets.",
    logo:
      "/images/company-logos/psfx.svg",
    image:
      "/images/blogs/psfx-pro/psfx-pro.jpg",
    imageAlt:
      "PSFX Pro global financial markets",
    website: "https://psfxpro.com/",
  },
  {
    number: "03",
    name: "Matrix Finbiz",
    description:
      "Accessible loan solutions with fast approvals, flexible repayments, transparent terms, and responsible lending practices.",
    logo:
      "/images/company-logos/matrix-finbiz.svg",
    image:
      "/images/blogs/matrix-finbiz/matrix-finbiz.jpg",
    imageAlt:
      "Matrix Finbiz financial services",
    website: "https://matrixfinbiz.com/",
  },
  {
    number: "04",
    name: "Nuegrid Solutions",
    description:
      "Secure, scalable fintech and software solutions that streamline operations and support sustainable business growth.",
    logo:
      "/images/company-logos/nuegrid.svg",
    image:
      "/images/blogs/nuegrid/nuebits-01.jpg",
    imageAlt:
      "Nuegrid Solutions digital and technology solutions",
    website: "https://nuegrid.com/",
  },
  {
    number: "05",
    name: "Desert Castle",
    description:
      "Technology-led real estate solutions with verified listings, trusted brokers, and complete client support.",
    logo:
      "/images/company-logos/dc-holding.svg",
    image:
      "/images/blogs/desert-castle/desert-castle.jpg",
    imageAlt:
      "Desert Castle premium real estate services",
    website: "https://desertcastle.ae/",
  },
  {
    number: "06",
    name: "PS Gold",
    description:
      "Secure procurement, storage, and trading of physical gold for portfolio diversification and long-term value preservation.",
    logo:
      "/images/company-logos/ps-gold.svg",
    image:
      "/images/blogs/ps-gold/ps-gold.jpg",
    imageAlt:
      "PS Gold precious metals and gold services",
    website: "https://psgold.ae/",
  },
  {
    number: "07",
    name: "PSFX International",
    description:
      "Tailored UAE business setup, corporate PRO, and strategic advisory services for sustainable business expansion.",
    logo:
      "/images/company-logos/psfx-international.svg",
    image:
      "/images/blogs/psfx-international/psfx-international.jpg",
    imageAlt:
      "PSFX International business setup and advisory services",
    website: "https://psfxinternational.com/",
  },
];

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
);

export default function CompaniesSection() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const cardRefs =
    useRef<
      Array<HTMLAnchorElement | null>
    >([]);

  const sentinelRefs =
    useRef<
      Array<HTMLSpanElement | null>
    >([]);

  const [
    activeCompanyIndex,
    setActiveCompanyIndex,
  ] = useState(0);

  /*
   * Desktop active-card tracking.
   */
  useGSAP(
    () => {
      const matchMedia =
        gsap.matchMedia();

      matchMedia.add(
        "(min-width: 1024px)",
        () => {
          cardRefs.current.forEach(
            (card, index) => {
              if (!card) {
                return;
              }

              ScrollTrigger.create({
                trigger: card,
                start: "top top+=1",
                invalidateOnRefresh: true,

                onEnter: () => {
                  setActiveCompanyIndex(
                    index,
                  );
                },

                onEnterBack: () => {
                  setActiveCompanyIndex(
                    index,
                  );
                },

                onLeaveBack: () => {
                  setActiveCompanyIndex(
                    Math.max(
                      0,
                      index - 1,
                    ),
                  );
                },
              });
            },
          );
        },
      );

      return () => {
        matchMedia.revert();
      };
    },
    {
      scope: sectionRef,
      dependencies: [],
      revertOnUpdate: true,
    },
  );

  /*
   * Mobile and tablet tracking.
   *
   * The observer watches non-sticky sentinels.
   * It does not measure sticky cards while scrolling,
   * preventing active-state flickering.
   */
  useEffect(() => {
    const mobileQuery =
      window.matchMedia(
        "(max-width: 1023px)",
      );

    let observer:
      | IntersectionObserver
      | null = null;

    const setInitialActiveCard = () => {
      if (!mobileQuery.matches) {
        return;
      }

      const activationPoint =
        window.innerHeight * 0.05;

      let nextActiveIndex = 0;

      sentinelRefs.current.forEach(
        (sentinel, index) => {
          if (!sentinel) {
            return;
          }

          if (
            sentinel.getBoundingClientRect()
              .top <= activationPoint
          ) {
            nextActiveIndex = index;
          }
        },
      );

      setActiveCompanyIndex(
        nextActiveIndex,
      );
    };

    const createObserver = () => {
      observer?.disconnect();
      observer = null;

      if (!mobileQuery.matches) {
        return;
      }

      observer =
        new IntersectionObserver(
          (entries) => {
            const visibleEntries =
              entries
                .filter(
                  (entry) =>
                    entry.isIntersecting,
                )
                .sort(
                  (first, second) =>
                    first.boundingClientRect
                      .top -
                    second.boundingClientRect
                      .top,
                );

            const activeEntry =
              visibleEntries.at(-1);

            if (!activeEntry) {
              return;
            }

            const index = Number(
              (
                activeEntry.target as HTMLElement
              ).dataset.companyIndex,
            );

            if (
              Number.isNaN(index)
            ) {
              return;
            }

            setActiveCompanyIndex(
              (currentIndex) =>
                currentIndex === index
                  ? currentIndex
                  : index,
            );
          },
          {
            threshold: 0,
            rootMargin:
              "0px 0px -95% 0px",
          },
        );

      sentinelRefs.current.forEach(
        (sentinel) => {
          if (sentinel) {
            observer?.observe(sentinel);
          }
        },
      );

      setInitialActiveCard();
    };

    createObserver();

    const handleMediaChange = () => {
      createObserver();
    };

    const handleResize = () => {
      setInitialActiveCard();
    };

    mobileQuery.addEventListener(
      "change",
      handleMediaChange,
    );

    window.addEventListener(
      "resize",
      handleResize,
      {
        passive: true,
      },
    );

    return () => {
      observer?.disconnect();

      mobileQuery.removeEventListener(
        "change",
        handleMediaChange,
      );

      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="companies"
      className="
        relative w-full
        overflow-visible
        bg-black text-white

        [--companies-grid-gutter:20px]
        [--companies-content-gutter:40px]
        [--companies-content-padding:20px]

        md:[--companies-grid-gutter:5%]
        md:[--companies-content-gutter:calc(5%+24px)]
        md:[--companies-content-padding:24px]

        lg:overflow-clip
        lg:[--companies-grid-gutter:7.465278%]
        lg:[--companies-content-padding:clamp(28px,2.083333vw,36px)]
      "
    >
      <div
        className="
          relative mx-auto
          w-full max-w-[1728px]
          overflow-visible
          bg-black

          lg:overflow-clip
        "
      >
        <GridLines
          thickness={0.5}
          color="#2B2B2B"
          zIndex={80}
          verticalLines={[
            {
              left:
                "var(--companies-grid-gutter)",
            },
            {
              right:
                "var(--companies-grid-gutter)",
            },
          ]}
          horizontalLines={[
            {
              top: 0,
              left:
                "var(--companies-grid-gutter)",
              right:
                "var(--companies-grid-gutter)",
            },
          ]}
        />

        {/* Section header */}
        <div
          className="
            relative z-10
            mx-[var(--companies-grid-gutter)]
            grid grid-cols-1
            border-b-[0.5px]
            border-[#2B2B2B]
            bg-black

            md:grid-cols-2

            lg:h-[clamp(280px,17.361111vw,300px)]
          "
        >
          {/* Centre divider */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute bottom-0
              left-1/2 top-0
              z-0 hidden
              w-[0.5px]
              bg-[#2B2B2B]

              md:block
            "
          />

          {/* Heading column */}
          <div
            className="
              relative z-10
              min-w-0
              px-[var(--companies-content-padding)]
              pb-[30px] pt-[58px]

              sm:pt-[64px]

              md:pb-[46px]
              md:pt-[70px]

              lg:pb-[clamp(30px,2.083333vw,36px)]
              lg:pt-[clamp(70px,5.208333vw,90px)]
            "
          >
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
                variant="sectionLabelLight"
                className="
                  !m-0
                  whitespace-nowrap
                "
              >
                The Prospero Group
              </Typography>
            </ScrollReveal>

            <ScrollReveal
              delay={70}
              distance={10}
              className="
                mt-[26px]

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
                  !text-[clamp(30px,8vw,40px)]
                  !leading-[1.15]
                  !tracking-[-0.045em]

                  md:!text-[clamp(34px,4.5vw,44px)]

                  lg:!text-[clamp(32px,2.777778vw,48px)]
                "
              >
                <span className="block">
                  Different Businesses.
                </span>

                <span className="block">
                  Shared Ambition.
                </span>
              </Typography>
            </ScrollReveal>
          </div>

          {/* Description column */}
          <div
            className="
              relative z-10
              min-w-0
              px-[var(--companies-content-padding)]
              pb-[52px] pt-[4px]

              md:pb-[46px]
              md:pt-[70px]

              lg:pb-[clamp(30px,2.083333vw,36px)]
              lg:pt-[clamp(70px,5.208333vw,90px)]
            "
          >
            <ScrollReveal
              delay={110}
              distance={10}
              className="
                relative w-full

                lg:-top-[6px]
              "
            >
              <Typography
                as="p"
                variant="sectionBodyLight"
                className="
                  !m-0
                  max-w-[650px]
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
                Each company within the Prospero
                ecosystem brings specialized
                expertise to its market. Together,
                they form a diversified platform
                designed to strengthen the group
                and create lasting impact.
              </Typography>
            </ScrollReveal>
          </div>
        </div>

        {/* Sticky company cards */}
        <div
          className="
            relative z-10
            mx-[var(--companies-content-gutter)]
            bg-black

            lg:mx-auto
            lg:w-[76%]

            xl:w-[67.12963%]
          "
        >
          {companies.map(
            (company, index) => {
              const isActive =
                activeCompanyIndex ===
                index;

              return (
                <Fragment
                  key={company.number}
                >
                  {/* Non-sticky mobile tracking point */}
                  <span
                    ref={(element) => {
                      sentinelRefs.current[
                        index
                      ] = element;
                    }}
                    data-company-index={index}
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      block h-px w-full
                      opacity-0

                      lg:hidden
                    "
                  />

                  <a
                    ref={(element) => {
                      cardRefs.current[index] =
                        element;
                    }}
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${company.name} website`}
                    data-cursor-label="Discover"
                    style={{
                      zIndex: index + 10,
                    }}
                    className="
                      group sticky top-0
                      isolate block
                      w-full
                      bg-black text-white
                      no-underline outline-none

                      max-lg:[backface-visibility:hidden]
                      max-lg:[-webkit-backface-visibility:hidden]
                      max-lg:[transform:translateZ(0)]

                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-[#E0BE3D]
                    "
                  >
                    {/* Full card borders */}
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute bottom-0
                        left-0 top-0
                        z-[70] w-px
                        bg-[#343434]
                      "
                    />

                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute bottom-0
                        right-0 top-0
                        z-[70] w-px
                        bg-[#343434]
                      "
                    />

                    {/* Information row */}
                    <div
                      className="
                        relative grid w-full
                        grid-cols-[52px_minmax(0,1fr)]
                        bg-black

                        sm:grid-cols-[56px_minmax(0,1fr)]

                        md:grid-cols-[64px_minmax(0,1fr)]

                        lg:grid-cols-[clamp(54px,4.166667vw,72px)_minmax(0,1fr)]
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute left-0
                          right-0 top-0
                          z-[70] h-px
                          bg-[#343434]
                        "
                      />

                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute bottom-0
                          left-0 right-0
                          z-[70] h-px
                          bg-[#343434]
                        "
                      />

                      {/* Number column */}
                      <div
                        className={`
                          relative flex
                          min-h-[156px]
                          items-center
                          justify-center

                          sm:min-h-[150px]

                          md:min-h-[160px]

                          lg:min-h-[clamp(132px,8.680556vw,150px)]

                          group-focus-visible:bg-[#E0BE3D]

                          ${
                            isActive
                              ? "bg-[#E0BE3D]"
                              : `
                                bg-black
                                lg:group-hover:bg-[#E0BE3D]
                              `
                          }
                        `}
                      >
                        <span
                          aria-hidden="true"
                          className="
                            pointer-events-none
                            absolute bottom-0
                            right-0 top-0
                            z-[30] w-px
                            bg-[#343434]
                          "
                        />

                        <span
                          className={`
                            relative z-10
                            font-[family-name:var(--font-geist-sans)]
                            text-[clamp(12px,0.925926vw,16px)]
                            font-medium
                            leading-none
                            tracking-[-0.02em]

                            group-focus-visible:text-black

                            ${
                              isActive
                                ? "text-black"
                                : `
                                  text-[#8E8E8E]
                                  lg:group-hover:text-black
                                `
                            }
                          `}
                        >
                          {company.number}
                        </span>
                      </div>

                      {/* Company content */}
                      <div
                        className="
                          flex min-w-0
                          flex-col justify-center
                          gap-[12px]
                          bg-black
                          px-[18px]
                          py-[24px]

                          sm:px-[22px]

                          md:gap-[14px]
                          md:px-[26px]
                          md:py-[26px]

                          lg:gap-[clamp(12px,0.925926vw,16px)]
                          lg:px-[clamp(22px,2.083333vw,36px)]
                          lg:py-[clamp(20px,1.50463vw,26px)]
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
                          "
                        >
                          {company.name}
                        </Typography>

                        <Typography
                          as="p"
                          variant="statLabel"
                          className="
                            !m-0
                            block max-w-[780px]
                            overflow-visible
                            !whitespace-normal
                            !break-words
                            !text-[13px]
                            !font-normal
                            !leading-[1.45]
                            !text-[#8E8E8E]

                            sm:!text-[14px]
                          "
                        >
                          {company.description}
                        </Typography>
                      </div>
                    </div>

                    {/* Image area */}
                    <div
                      className="
                        relative isolate
                        aspect-[4/3]
                        w-full overflow-hidden
                        bg-black

                        sm:aspect-[16/10]

                        md:aspect-[16/8]

                        lg:h-[clamp(320px,27.199074vw,470px)]
                        lg:aspect-auto
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute bottom-0
                          left-0 right-0
                          z-[70] h-px
                          bg-[#343434]
                        "
                      />

                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute inset-0
                          bg-black
                        "
                      />

                      <div
                        className="
                          absolute inset-0
                          overflow-hidden
                          bg-black
                        "
                      >
                        <Image
                          src={company.image}
                          alt={company.imageAlt}
                          fill
                          draggable={false}
                          loading={
                            index < 2
                              ? "eager"
                              : "lazy"
                          }
                          fetchPriority={
                            index === 0
                              ? "high"
                              : "auto"
                          }
                          decoding="async"
                          quality={80}
                          sizes="
                            (max-width: 639px) calc(100vw - 80px),
                            (max-width: 767px) calc(100vw - 88px),
                            (max-width: 1023px) calc(90vw - 48px),
                            (max-width: 1728px) 67vw,
                            1160px
                          "
                          className="
                            select-none
                            object-cover
                            object-center
                            grayscale
                          "
                        />
                      </div>

                      {/* Dark overlay */}
                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute inset-0
                          z-10 bg-black/65
                        "
                      />

                      {/* Desktop edge protection */}
                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute inset-0
                          z-[11] hidden

                          lg:block
                          lg:shadow-[inset_0_0_100px_rgba(0,0,0,0.72)]
                        "
                      />

                      {/* Company logo */}
                      <div
                        className="
                          pointer-events-none
                          absolute left-1/2
                          top-1/2 z-20
                          -translate-x-1/2
                          -translate-y-1/2
                        "
                      >
                        <div
                          className="
                            relative
                            h-[clamp(54px,15vw,72px)]
                            w-[clamp(150px,44vw,210px)]

                            md:h-[clamp(70px,9vw,92px)]
                            md:w-[clamp(200px,28vw,270px)]

                            lg:h-[clamp(60px,6.365741vw,110px)]
                            lg:w-[clamp(160px,17.361111vw,300px)]
                          "
                        >
                          <Image
                            src={company.logo}
                            alt={`${company.name} logo`}
                            fill
                            draggable={false}
                            loading="eager"
                            decoding="async"
                            sizes="
                              (max-width: 767px) 210px,
                              (max-width: 1023px) 270px,
                              300px
                            "
                            className="
                              select-none
                              object-contain
                              brightness-0 invert
                            "
                          />
                        </div>
                      </div>
                    </div>

                    {/* Space between cards */}
                    <div
                      aria-hidden="true"
                      className="
                        relative
                        h-[32px]
                        bg-black

                        sm:h-[38px]
                        md:h-[48px]

                        lg:h-[clamp(30px,3.472222vw,60px)]
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute bottom-0
                          left-0 right-0
                          z-[70] h-px
                          bg-[#343434]
                        "
                      />
                    </div>
                  </a>
                </Fragment>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}