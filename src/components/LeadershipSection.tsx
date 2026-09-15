import Image from "next/image";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="
        relative w-full
        overflow-hidden
        bg-[#E4E4E4]
        text-black
      "
    >
      <div
        className="
          relative mx-auto
          h-[calc(100svh-var(--navbar-height,108px))]
          min-h-[720px]
          max-h-[900px]
          w-full max-w-[1728px]
          overflow-hidden
          bg-[#E4E4E4]

          max-md:!h-auto
          max-md:!min-h-0
          max-md:max-h-none
          max-md:pb-[60px]
        "
      >
        {/* Responsive grid lines */}
        <GridLines
          thickness={0.5}
          color="rgba(0,0,0,0.1)"
          zIndex={0}
          verticalLines={[
            {
              left: "7.465278%",
              className:
                "!left-5 md:!left-[7.465278%]",
            },
            {
              left: "50%",
              top: 0,
              bottom: "62.240664%",
              hideOnMobile: true,
            },
            {
              right: "7.465278%",
              className:
                "!right-5 md:!right-[7.465278%]",
            },
            {
              left: "38.657407%",
              top: "37.759336%",
              bottom: 0,
              hideOnMobile: true,
            },
          ]}
          horizontalLines={[
            {
              top: "37.759336%",
              left: "7.465278%",
              right: "7.465278%",
              className:
                "hidden md:block md:!left-[7.465278%] md:!right-[7.465278%]",
            },
          ]}
        />

        {/* Label and heading */}
        <div
          className="
            relative z-10
            mx-5 px-5
            pt-[50px]

            md:absolute
            md:left-[9.31713%]
            md:top-[clamp(70px,5.208333vw,90px)]
            md:mx-0
            md:w-[40%]
            md:px-0
            md:pt-0
          "
        >
          {/* Label */}
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
              Leadership
            </Typography>
          </ScrollReveal>

          {/* Heading */}
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
                !m-0
                min-w-0
                !break-words
                !text-[clamp(30px,8vw,40px)]
                !leading-[1.14]
                !tracking-[-0.045em]

                md:!text-[clamp(32px,2.777778vw,48px)]
              "
            >
              <span
                className="
                  block whitespace-normal
                  lg:whitespace-nowrap
                "
              >
                The People
              </span>

              <span
                className="
                  block whitespace-normal
                  lg:whitespace-nowrap
                "
              >
                Behind the Vision.
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

            md:absolute
            md:left-[51.388889%]
            md:top-[clamp(70px,5.208333vw,90px)]
            md:mx-0
            md:-mt-[6px]
            md:w-[39.351852%]
            md:px-0
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
              Experienced leadership, strategic
              thinking, and a shared commitment to
              building businesses for long-term
              growth.
            </Typography>
          </ScrollReveal>
        </div>

        {/* Leadership image */}
        <div
          className="
            relative z-10
            mx-5 mt-[36px]
            px-5

            md:absolute
            md:bottom-0
            md:left-[7.465278%]
            md:top-[37.863071%]
            md:mx-0
            md:mt-0
            md:w-[31.19213%]
            md:px-0
          "
        >
          <ScrollReveal
            delay={160}
            distance={12}
            className="
              h-[clamp(320px,92vw,400px)]
              w-full

              md:h-full
            "
          >
            <div
              className="
                group relative
                h-full w-full
                overflow-hidden
                bg-[#D5D5D5]
              "
            >
              <Image
                src="/images/leadership.png"
                alt="Adv. Sreelal Soolapani"
                fill
                draggable={false}
                sizes="
                  (max-width: 767px) calc(100vw - 80px),
                  (max-width: 1728px) 31.2vw,
                  539px
                "
                className="
                  select-none
                  object-cover object-center
                  transition-transform
                  duration-700 ease-out

                  md:group-hover:scale-[1.015]

                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              />

              {/* Image overlay */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/[0.08]
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Leadership message */}
        <div
          className="
            relative z-10
            mx-5 mt-[34px]
            px-5

            md:absolute
            md:left-[42.997685%]
            md:top-[46.887967%]
            md:mx-0
            md:mt-0
            md:w-[46.585648%]
            md:px-0
          "
        >
          <ScrollReveal
            delay={210}
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
              At Prospero, we believe meaningful
              growth begins with clarity –
              understanding where we are, where we
              want to go, and making every decision
              with purpose. Our ambition is to build
              a group that creates lasting value
              through disciplined thinking, trusted
              relationships and a broader view of
              opportunity.
            </Typography>
          </ScrollReveal>
        </div>

        {/* Leader details */}
        <div
          className="
            relative z-10
            mx-5 mt-[30px]
            px-5

            md:absolute
            md:left-[42.997685%]
            md:top-[83.5%]
            md:mx-0
            md:mt-0
            md:px-0
          "
        >
          <ScrollReveal
            delay={260}
            distance={8}
          >
            <div
              className="
                flex flex-col
                gap-[12px]

                md:gap-[14px]
              "
            >
              {/* Leader name */}
             <Typography
  as="p"
  variant="leaderName"
  className="
    !m-0
    !whitespace-normal
    !break-words
    !text-[19px]
    !font-medium
    !leading-[1.2]
    !tracking-[-0.025em]
    !text-black

    sm:!text-[21px]
    md:!text-[23px]
    lg:!text-[clamp(21px,1.446759vw,25px)]
    lg:whitespace-nowrap
  "
>
  Adv. Sreelal Soolapani
</Typography>

              {/* Leader designation */}
             <Typography
  as="p"
  variant="statLabel"
  className="
    !mb-0
    !-mt-[6px]
    block
    !whitespace-normal
    !break-words
    !text-[13px]
    !font-normal
    !leading-[1.45]
    !tracking-[-0.015em]
    !text-[#707070]

    sm:!text-[14px]

    lg:whitespace-nowrap
  "
>
  Founder, Prospero Group
</Typography>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}