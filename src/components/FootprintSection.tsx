"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type Statistic = {
  value: number;
  suffix: string;
  label: string;
  left: string;
  duration: number;
};

const statistics: Statistic[] = [
  {
    value: 7,
    suffix: "+",
    label: "Industries",
    left: "9.31713%",
    duration: 1000,
  },
  {
    value: 200,
    suffix: "+",
    label: "Professionals",
    left: "31.59604%",
    duration: 1400,
  },
  {
    value: 35,
    suffix: "+",
    label: "Offices",
    left: "56.53641%",
    duration: 1200,
  },
  {
    value: 5000,
    suffix: "+",
    label: "Employees",
    left: "79.4011%",
    duration: 1800,
  },
];

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
};

function CountUp({
  end,
  suffix = "",
  duration = 1400,
  delay = 0,
}: CountUpProps) {
  const counterRef =
    useRef<HTMLSpanElement | null>(null);

  const animationFrameRef =
    useRef<number | null>(null);

  const timeoutRef =
    useRef<number | null>(null);

  const hasAnimatedRef =
    useRef(false);

  const [count, setCount] =
    useState(0);

  useEffect(() => {
    const counter =
      counterRef.current;

    if (!counter) {
      return;
    }

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    const startAnimation = () => {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;

      if (prefersReducedMotion) {
        setCount(end);
        return;
      }

      timeoutRef.current =
        window.setTimeout(() => {
          const startTime =
            performance.now();

          const updateCount = (
            currentTime: number,
          ) => {
            const elapsed =
              currentTime - startTime;

            const progress =
              Math.min(
                elapsed / duration,
                1,
              );

            const easedProgress =
              1 -
              Math.pow(
                1 - progress,
                4,
              );

            setCount(
              Math.round(
                end * easedProgress,
              ),
            );

            if (progress < 1) {
              animationFrameRef.current =
                requestAnimationFrame(
                  updateCount,
                );
            } else {
              setCount(end);

              animationFrameRef.current =
                null;
            }
          };

          animationFrameRef.current =
            requestAnimationFrame(
              updateCount,
            );
        }, delay);
    };

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry &&
            entry.isIntersecting
          ) {
            startAnimation();
            observer.disconnect();
          }
        },
        {
          threshold: 0.25,
          rootMargin:
            "0px 0px -5% 0px",
        },
      );

    observer.observe(counter);

    return () => {
      observer.disconnect();

      if (
        timeoutRef.current !== null
      ) {
        window.clearTimeout(
          timeoutRef.current,
        );

        timeoutRef.current = null;
      }

      if (
        animationFrameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );

        animationFrameRef.current =
          null;
      }
    };
  }, [delay, duration, end]);

  return (
    <span
      ref={counterRef}
      className="tabular-nums"
      aria-label={`${end}${suffix}`}
    >
      <span aria-hidden="true">
        {count}
        {suffix}
      </span>
    </span>
  );
}

export default function FootprintSection() {
  return (
    <section
      id="footprint"
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
          max-md:pb-[60px]
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

        {/* Top horizontal grid line */}
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

        {/* Bottom horizontal grid line */}
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

        {/* Label */}
        <div
          className="
            relative z-10
            mx-5 px-5
            pt-[50px]

            md:absolute
            md:left-[9.31713%]
            md:top-[14%]
            md:mx-0
            md:px-0
            md:pt-0
          "
        >
          <ScrollReveal
            delay={100}
            distance={12}
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
              Our Footprint
            </Typography>
          </ScrollReveal>
        </div>

        {/* Heading */}
        <div
          className="
            relative z-10
            mx-5 mt-[24px]
            min-w-0 px-5

            md:absolute
            md:left-[9.31713%]
            md:top-[24%]
            md:mx-0
            md:mt-0
            md:w-[48%]
            md:px-0

            lg:w-[40%]
          "
        >
          <ScrollReveal
            delay={170}
            distance={18}
            className="min-w-0"
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

                md:!text-[clamp(32px,2.777778vw,48px)]
              "
            >
              <span
                className="
                  block whitespace-normal

                  xl:whitespace-nowrap
                "
              >
                Built Across Markets.
              </span>

              <span
                className="
                  block whitespace-normal

                  xl:whitespace-nowrap
                "
              >
                Connected by Purpose.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Desktop and tablet statistics */}
        <div
          className="
            absolute inset-0
            z-10 hidden

            md:block
          "
        >
          {statistics.map(
            (item, index) => (
              <div
                key={item.label}
                className="
                  absolute
                  top-[56%]
                  h-[100px]
                "
                style={{
                  left: item.left,
                }}
              >
                <ScrollReveal
                  delay={
                    250 + index * 90
                  }
                  distance={16}
                  className="
                    relative h-full
                  "
                >
                  {/* Desktop yellow line */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-0 top-0
                      h-[100px]
                      w-[2px]
                      bg-[#E0BE3D]
                    "
                  />

                  <Typography
                    as="p"
                    variant="statValue"
                    className="
                      absolute
                      left-[28px]
                      top-[5px]
                      !m-0
                      whitespace-nowrap
                      !leading-none
                      tabular-nums
                    "
                  >
                    <CountUp
                      end={item.value}
                      suffix={item.suffix}
                      duration={
                        item.duration
                      }
                      delay={
                        index * 100
                      }
                    />
                  </Typography>

                  <Typography
                    as="p"
                    variant="statLabel"
                    className="
                      absolute
                      left-[28px]
                      top-[64px]
                      !m-0
                      whitespace-nowrap
                      !leading-none
                    "
                  >
                    {item.label}
                  </Typography>
                </ScrollReveal>
              </div>
            ),
          )}
        </div>

        {/* Mobile statistics */}
        <div
          className="
            relative z-10
            mx-5 mt-[42px]
            grid min-w-0
            grid-cols-2
            gap-x-[20px]
            gap-y-[36px]
            px-5

            md:hidden
          "
        >
          {statistics.map(
            (item, index) => (
              <ScrollReveal
                key={item.label}
                delay={
                  250 + index * 90
                }
                distance={16}
                className="min-w-0"
              >
                <div
                  className="
                    relative
                    h-[104px]
                    min-w-0
                    overflow-hidden
                    border-l-[1px]
                    border-[#E0BE3D]
                    pl-[16px]
                  "
                >
                  <Typography
                    as="p"
                    variant="statValue"
                    className="
                      !m-0
                      whitespace-nowrap
                      !text-[clamp(30px,8.5vw,38px)]
                      !leading-none
                      !tracking-[-0.04em]
                      tabular-nums
                    "
                  >
                    <CountUp
                      end={item.value}
                      suffix={item.suffix}
                      duration={
                        item.duration
                      }
                      delay={
                        index * 100
                      }
                    />
                  </Typography>

                  <Typography
                    as="p"
                    variant="statLabel"
                    className="
                      absolute
                      bottom-[12px]
                      left-[16px]
                      right-[4px]
                      !m-0
                      overflow-hidden
                      text-ellipsis
                      whitespace-nowrap
                      !text-[13px]
                      !leading-none
                      !text-[#777777]
                    "
                  >
                    {item.label}
                  </Typography>
                </div>
              </ScrollReveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}