"use client";

import { GoArrowRight } from "react-icons/go";
import {
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type ContactSectionProps = {
  showContactDetails?: boolean;
};

const formFieldTypography = `
  font-[family-name:var(--font-geist-sans)]
  text-[clamp(14px,1.273148vw,22px)]
  font-normal
  leading-[1.3]
  tracking-[-0.02em]
`;

const formFieldAppearance = `
  border border-[#D7D7D7]
  bg-[#F9F9F9]
  text-black
  outline-none
  placeholder:text-[#676767]
  placeholder:opacity-100
  transition-[border-color,background-color,box-shadow]
  duration-300 ease-out
  hover:bg-white
  focus:border-black/40
  focus:bg-white
  focus:shadow-[0_0_0_3px_rgba(224,190,61,0.12)]
`;

export default function ContactSection({
  showContactDetails = false,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
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

          [--contact-grid-gutter:20px]
          [--contact-content-gutter:40px]

          md:pb-[80px]
          md:[--contact-grid-gutter:5%]
          md:[--contact-content-gutter:calc(5%+24px)]

          lg:h-[clamp(680px,43.055556vw,744px)]
          lg:pb-0
          lg:[--contact-grid-gutter:7.465278%]
          lg:[--contact-content-gutter:9.31713%]
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
                "var(--contact-grid-gutter)",
            },
            {
              left: "50%",
              className: "hidden lg:block",
            },
            {
              right:
                "var(--contact-grid-gutter)",
            },
          ]}
          horizontalLines={[
            {
              top: 0,
              left:
                "var(--contact-grid-gutter)",
              right:
                "var(--contact-grid-gutter)",
            },
            {
              bottom: 0,
              left:
                "var(--contact-grid-gutter)",
              right:
                "var(--contact-grid-gutter)",
            },
          ]}
        />

        {/* Label and heading */}
        <div
          className="
            relative z-10
            mx-[var(--contact-content-gutter)]
            min-w-0
            pt-[50px]

            md:pt-[70px]

            lg:absolute
            lg:left-[var(--contact-content-gutter)]
            lg:top-[clamp(70px,5.208333vw,90px)]
            lg:mx-0
            lg:w-[38%]
            lg:pt-0
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
              Contact
            </Typography>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal
            delay={80}
            distance={10}
            className="
              mt-[clamp(24px,2.083333vw,36px)]
              min-w-0
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
              <span className="block">
                Let&apos;s Start
              </span>

              <span className="block">
                a Conversation.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Description */}
        <div
          className="
            relative z-10
            mx-[var(--contact-content-gutter)]
            mt-[28px]
            min-w-0

            md:mt-[34px]
            md:max-w-[650px]

            lg:absolute
            lg:left-[var(--contact-content-gutter)]
            lg:top-[41.397849%]
            lg:mx-0
            lg:mt-0
            lg:w-[31.30787%]
            lg:max-w-none
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
              Have a business opportunity, partnership
              proposal, or investment idea?
              <br />
              Tell us what you&apos;re building. Our
              team will be in touch.
            </Typography>
          </ScrollReveal>
        </div>

        {/* Contact-page-only details */}
        {showContactDetails && (
          <div
            className="
              relative z-10
              mx-[var(--contact-content-gutter)]
              mt-[30px]
              min-w-0

              md:max-w-[650px]

              lg:absolute
              lg:left-[var(--contact-content-gutter)]
              lg:top-[64%]
              lg:mx-0
              lg:mt-0
              lg:w-[36%]
              lg:max-w-none
            "
          >
            <ScrollReveal
              delay={180}
              distance={10}
            >
              <address
                className="
                  flex flex-col
                  gap-[clamp(14px,1.041667vw,18px)]
                  not-italic
                "
              >
                {/* Email */}
                <a
                  href="mailto:info@prospero.ae"
                  aria-label="Email Prospero Holding"
                  className="
                    group flex min-w-0
                    items-start
                    gap-[clamp(10px,0.694444vw,12px)]
                    text-inherit no-underline

                    focus-visible:outline-none
                    focus-visible:ring-1
                    focus-visible:ring-[#E0BE3D]
                  "
                >
                  <LuMail
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="
                      mt-[clamp(3px,0.289352vw,5px)]
                      h-[clamp(17px,1.157407vw,20px)]
                      w-[clamp(17px,1.157407vw,20px)]
                      shrink-0
                      text-[#676767]
                      transition-colors
                      duration-300

                      group-hover:text-[#E0BE3D]
                    "
                  />

                  <Typography
                    as="span"
                    variant="sectionBodyDark"
                    className="
                      !m-0
                      min-w-0
                      !break-all
                      !text-[clamp(15px,1.041667vw,18px)]
                      !leading-[1.35]
                      transition-colors
                      duration-300

                      group-hover:!text-black
                    "
                  >
                    info@prospero.ae
                  </Typography>
                </a>

                {/* Phone */}
                <a
                  href="tel:+97145689506"
                  aria-label="Call Prospero Holding"
                  className="
                    group flex min-w-0
                    items-start
                    gap-[clamp(10px,0.694444vw,12px)]
                    text-inherit no-underline

                    focus-visible:outline-none
                    focus-visible:ring-1
                    focus-visible:ring-[#E0BE3D]
                  "
                >
                  <LuPhone
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="
                      mt-[clamp(3px,0.289352vw,5px)]
                      h-[clamp(17px,1.157407vw,20px)]
                      w-[clamp(17px,1.157407vw,20px)]
                      shrink-0
                      text-[#676767]
                      transition-colors
                      duration-300

                      group-hover:text-[#E0BE3D]
                    "
                  />

                  <Typography
                    as="span"
                    variant="sectionBodyDark"
                    className="
                      !m-0
                      !text-[clamp(15px,1.041667vw,18px)]
                      !leading-[1.35]
                      transition-colors
                      duration-300

                      group-hover:!text-black
                    "
                  >
                    +971 4 568 9506
                  </Typography>
                </a>

                {/* Address */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tower+Plaza+Hotel+and+Office+Tower+Suite+2003+20th+Floor+Sheikh+Zayed+Road+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Prospero Holding address in Google Maps"
                  className="
                    group flex min-w-0
                    items-start
                    gap-[clamp(10px,0.694444vw,12px)]
                    text-inherit no-underline

                    focus-visible:outline-none
                    focus-visible:ring-1
                    focus-visible:ring-[#E0BE3D]
                  "
                >
                  <LuMapPin
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="
                      mt-[clamp(3px,0.289352vw,5px)]
                      h-[clamp(17px,1.157407vw,20px)]
                      w-[clamp(17px,1.157407vw,20px)]
                      shrink-0
                      text-[#676767]
                      transition-colors
                      duration-300

                      group-hover:text-[#E0BE3D]
                    "
                  />

                  <Typography
                    as="span"
                    variant="sectionBodyDark"
                    className="
                      !m-0
                      min-w-0
                      !whitespace-normal
                      !break-words
                      !text-[clamp(15px,1.041667vw,18px)]
                      !leading-[1.35]
                      transition-colors
                      duration-300

                      group-hover:!text-black
                    "
                  >
                    Tower Plaza Hotel &amp; Office
                    Tower, Suite No: 2003, 20th Floor,
                    Sheikh Zayed Road, Dubai.
                  </Typography>
                </a>
              </address>
            </ScrollReveal>
          </div>
        )}

        {/* Contact form */}
        <form
          className="
            relative z-10
            mx-[var(--contact-content-gutter)]
            mt-[40px]
            flex min-w-0
            flex-col gap-[16px]

            md:mt-[48px]
            md:gap-[18px]

            lg:contents
          "
        >
          {/* Full name */}
          <ScrollReveal
            delay={70}
            distance={10}
            className="
              relative h-[64px]
              min-w-0 w-full

              md:h-[68px]

              lg:absolute
              lg:left-[52.777778%]
              lg:top-[9.811828%]
              lg:z-10
              lg:h-[11.693548%]
              lg:w-[36.979167%]
            "
          >
            <input
              type="text"
              name="fullName"
              aria-label="Full name"
              placeholder="Full Name"
              autoComplete="name"
              required
              className={`
                h-full w-full
                px-[clamp(18px,2.083333vw,36px)]
                ${formFieldTypography}
                ${formFieldAppearance}
              `}
            />
          </ScrollReveal>

          {/* Email */}
          <ScrollReveal
            delay={110}
            distance={10}
            className="
              relative h-[64px]
              min-w-0 w-full

              md:h-[68px]

              lg:absolute
              lg:left-[52.777778%]
              lg:top-[23.252688%]
              lg:z-10
              lg:h-[11.693548%]
              lg:w-[36.979167%]
            "
          >
            <input
              type="email"
              name="email"
              aria-label="Email address"
              placeholder="Email Address"
              autoComplete="email"
              required
              className={`
                h-full w-full
                px-[clamp(18px,2.083333vw,36px)]
                ${formFieldTypography}
                ${formFieldAppearance}
              `}
            />
          </ScrollReveal>

          {/* Message */}
          <ScrollReveal
            delay={150}
            distance={10}
            className="
              relative h-[190px]
              min-w-0 w-full

              md:h-[220px]

              lg:absolute
              lg:left-[52.777778%]
              lg:top-[36.693548%]
              lg:z-10
              lg:h-[36.827957%]
              lg:w-[36.979167%]
            "
          >
            <textarea
              name="message"
              aria-label="Enquiry message"
              placeholder="Tell us more about your enquiry..."
              required
              className={`
                h-full w-full
                resize-none
                px-[clamp(18px,2.083333vw,36px)]
                pt-[clamp(16px,1.678241vw,29px)]
                ${formFieldTypography}
                ${formFieldAppearance}
              `}
            />
          </ScrollReveal>

          {/* Submit button */}
          <ScrollReveal
            delay={190}
            distance={8}
            className="
              relative mt-[8px]

              lg:absolute
              lg:left-[52.777778%]
              lg:top-[77.688172%]
              lg:z-10
              lg:mt-0
            "
          >
            <button
              type="submit"
              className="
                group relative isolate
                inline-flex
                h-[46px]
                items-center justify-center
                gap-[10px]
                overflow-hidden
                border border-black
                bg-white
                px-[17px]
                text-black
                transition-[transform,box-shadow]
                duration-300 ease-out

                md:h-[50px]

                hover:-translate-y-px
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E0BE3D]
                focus-visible:ring-offset-2

                motion-reduce:transform-none
                motion-reduce:transition-none
              "
            >
              {/* Animated background */}
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
                "
              >
                Submit Enquiry
              </Typography>

              <GoArrowRight
                aria-hidden="true"
                className="
                  relative z-10
                  h-[clamp(18px,1.388889vw,24px)]
                  w-[clamp(18px,1.388889vw,24px)]
                  shrink-0
                  text-black
                  transition-[color,transform]
                  duration-500 ease-out

                  group-hover:translate-x-[3px]
                  group-hover:text-white
                  group-focus-visible:text-white

                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              />
            </button>
          </ScrollReveal>
        </form>
      </div>
    </section>
  );
}