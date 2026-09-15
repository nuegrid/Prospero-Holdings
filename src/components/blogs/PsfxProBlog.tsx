"use client";

import type {
  CSSProperties,
  ReactNode,
} from "react";

import GridLines from "@/ui/GridLines";
import Typography from "@/ui/Typography";

type BlogParagraphProps = {
  children: ReactNode;
};

function BlogParagraph({
  children,
}: BlogParagraphProps) {
  return (
    <Typography
      as="p"
      variant="sectionBodyDark"
      className="
        mb-[clamp(14px,1.157407vw,20px)]
        !text-[clamp(14px,1.041667vw,18px)]
        !font-normal
        !leading-[1.55]
        !tracking-[-0.018em]
        !text-[#707070]
      "
    >
      {children}
    </Typography>
  );
}

type BlogContentSectionProps = {
  title: ReactNode;
  children: ReactNode;
};

function BlogContentSection({
  title,
  children,
}: BlogContentSectionProps) {
  return (
    <section
      className="
        mt-[clamp(40px,3.472222vw,60px)]
      "
    >
      <Typography
        as="h2"
        variant="sectionBodyDark"
        className="
          !m-0
          !text-[clamp(20px,1.273148vw,25px)]
          !font-medium
          !leading-[1.2]
          !tracking-[-0.03em]
          !text-black
        "
      >
        {title}
      </Typography>

      <div
        className="
          pt-[clamp(26px,1.851852vw,32px)]
        "
      >
        {children}
      </div>
    </section>
  );
}

type BlogVideoProps = {
  src: string;
  label: string;
  primary?: boolean;
};

function BlogVideo({
  src,
  label,
  primary = false,
}: BlogVideoProps) {
  return (
    <div
      className={`
        relative w-full
        overflow-hidden
        border border-[#D7D7D7]
        bg-black

        ${
          primary
            ? `
              mt-[clamp(28px,2.314815vw,40px)]
              aspect-[1400/660]

              max-md:aspect-[16/10]
            `
            : `
              my-[clamp(40px,4.050926vw,70px)]
              aspect-video

              max-md:aspect-[16/10]
            `
        }
      `}
    >
      <video
        autoPlay={primary}
        muted={primary}
        controls
        playsInline
        preload="metadata"
        poster="/images/blogs/psfx-pro/psfx-pro.jpg"
        aria-label={label}
        className="
          absolute inset-0
          h-full w-full
          object-cover object-center
        "
      >
        <source
          src={src}
          type="video/mp4"
        />

        Your browser does not support HTML video.
      </video>

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-black/[0.03]
        "
      />
    </div>
  );
}

export default function PsfxProBlog() {
  return (
    <article
      style={
        {
          "--blog-top-line":
            "clamp(28px, 2.893519vw, 50px)",
        } as CSSProperties
      }
      className="
        relative mx-auto
        min-h-screen w-full
        max-w-[1728px]
        overflow-x-clip
        bg-white text-black

        [--blog-gutter:20px]

        md:[--blog-gutter:5%]

        lg:[--blog-gutter:14.930556%]

        max-md:[--blog-top-line:24px]
      "
    >
      {/* Outer grid lines */}
      <GridLines
        thickness={0.5}
        color="#D7D7D7"
        zIndex={1}
        verticalLines={[
          {
            left: "var(--blog-gutter)",
          },
          {
            right: "var(--blog-gutter)",
          },
        ]}
        horizontalLines={[
          {
            top: "var(--blog-top-line)",
            left: "var(--blog-gutter)",
            right: "var(--blog-gutter)",
            color: "#D7D7D7",
          },
        ]}
      />

      {/* Content inside grid lines */}
      <div
        className="
          relative z-10
          mx-[var(--blog-gutter)]
          px-[20px]
          pb-[clamp(70px,6.944444vw,120px)]
          pt-[clamp(70px,5.208333vw,90px)]

          md:px-[24px]

          lg:px-[clamp(16px,1.851852vw,32px)]

          max-md:pb-[70px]
          max-md:pt-[56px]
        "
      >
        {/* Company, category and date */}
        <div
          className="
            flex flex-wrap
            items-center
            gap-x-[clamp(8px,0.694444vw,12px)]
            gap-y-[8px]
          "
        >
          {/* Company label */}
          <span
            className="
              inline-flex
              min-h-[28px]
              shrink-0
              items-center justify-center
              bg-[#E0BE3D]
              px-[clamp(11px,0.925926vw,16px)]
              py-[clamp(6px,0.462963vw,8px)]
            "
          >
            <Typography
              as="span"
              variant="sectionLabelDark"
              className="
                !m-0
                whitespace-nowrap
                !text-[clamp(11px,0.810185vw,14px)]
                !font-medium
                !leading-none
                !tracking-[-0.02em]
                !text-black
              "
            >
              PSFX Pro
            </Typography>
          </span>

          {/* Category */}
          <Typography
            as="span"
            variant="sectionLabelDark"
            className="
              !m-0
              whitespace-nowrap
              !text-[clamp(11px,0.752315vw,13px)]
              !font-normal
              !leading-none
              !tracking-[-0.015em]
              !text-[#505050]
            "
          >
            Corporate Update
          </Typography>

          {/* Divider dot */}
          <span
            aria-hidden="true"
            className="
              h-[3px] w-[3px]
              shrink-0 rounded-full
              bg-[#8A8A8A]
            "
          />

          {/* Date */}
          <time
            dateTime="2026-08-29"
            className="
              whitespace-nowrap
              font-[family-name:var(--font-geist-sans)]
              text-[clamp(10px,0.694444vw,12px)]
              font-normal leading-none
              tracking-[-0.015em]
              text-[#777777]
            "
          >
            29–30 August 2026
          </time>
        </div>

        {/* Main headline */}
        <div
          className="
            mt-[clamp(18px,1.388889vw,24px)]
            max-w-[1250px]
          "
        >
          <Typography
            as="h1"
            variant="sectionHeadingDark"
            className="
              !m-0
              !text-[clamp(28px,2.546296vw,44px)]
              !font-medium
              !leading-[1.1]
              !tracking-[-0.045em]
              !text-black
            "
          >
            PSFX Pro at Money Expo India 2026:
            Connecting With the Trading Community
          </Typography>
        </div>

        {/* Main autoplay video */}
        <BlogVideo
          src="/video/blogs/psfx/money-expo-01.mp4"
          label="PSFX Pro team at Money Expo India 2026"
          primary
        />

        {/* Article content */}
        <div
          className="
            mt-[clamp(32px,2.893519vw,50px)]
            w-full
          "
        >
          <BlogParagraph>
            Financial markets may operate through
            digital platforms, but the relationships
            behind the industry remain deeply human.
            Conversations, introductions and
            face-to-face interactions continue to play
            an important role in how businesses
            understand their markets and build lasting
            professional relationships.
          </BlogParagraph>

          <BlogParagraph>
            That was the focus of PSFX Pro&apos;s
            participation at{" "}
            <strong className="font-medium text-black">
              Money Expo India 2026
            </strong>
            , held in Mumbai on August 29–30. The event
            brought together participants from across
            trading, brokerage, fintech and financial
            services, creating an environment for
            professionals to exchange ideas and explore
            new connections.
          </BlogParagraph>

          <BlogParagraph>
            For PSFX Pro, the event offered an
            opportunity to engage directly with
            traders, industry professionals and
            potential clients.
          </BlogParagraph>

          <BlogContentSection title="More Than a Presence">
            <BlogParagraph>
              Industry exhibitions are about more than
              displaying a brand.
            </BlogParagraph>

            <BlogParagraph>
              For a trading business, they create an
              opportunity to hear directly from the
              market. Questions from traders,
              conversations with professionals and
              discussions with potential clients can
              reveal changing expectations around
              platforms, services and the overall
              trading experience.
            </BlogParagraph>

            <BlogParagraph>
              PSFX Pro&apos;s participation provided
              space for these interactions while
              allowing the team to present its
              proposition and understand the
              perspectives of people working across the
              trading ecosystem.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="The Value of Face-to-Face Interaction">
            <BlogParagraph>
              Digital communication has made financial
              markets more connected than ever, but
              physical meetings offer a different kind
              of engagement.
            </BlogParagraph>

            <BlogParagraph>
              A short conversation can establish a
              professional relationship. A discussion
              with a trader can highlight concerns that
              may not appear in market data. An
              interaction with another industry
              participant can provide a new perspective
              on technology, customer expectations or
              market development.
            </BlogParagraph>

            <BlogParagraph>
              These exchanges are particularly valuable
              in financial services, where trust,
              transparency and understanding are
              central to the client relationship.
            </BlogParagraph>
          </BlogContentSection>

          {/* Second video */}
          <BlogVideo
            src="/video/blogs/psfx/money-expo-02.mp4"
            label="PSFX Pro team interacting with visitors"
          />

          <BlogContentSection title="Connecting With a Changing Market">
            <BlogParagraph>
              Money Expo India also reflected the wider
              evolution of the trading industry, with
              the 2026 event bringing together
              businesses and professionals from trading
              platforms, brokerages, fintech and
              related financial services.
            </BlogParagraph>

            <BlogParagraph>
              For PSFX Pro, being part of this
              environment meant staying close to the
              conversations shaping the market.
            </BlogParagraph>

            <BlogParagraph>
              The value of participation does not end
              when the exhibition closes. Contacts
              made at an event can develop into future
              conversations, professional relationships
              and new opportunities.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Looking Ahead">
            <BlogParagraph>
              PSFX Pro&apos;s presence at Money Expo
              India 2026 was ultimately about
              engagement: being present, meeting
              people, listening to the market and
              building relationships.
            </BlogParagraph>

            <BlogParagraph>
              As trading continues to evolve through
              technology and changing participant
              expectations, maintaining direct
              connections with the industry remains
              valuable.
            </BlogParagraph>
          </BlogContentSection>

          {/* CTA */}
          <div
            className="
              mt-[clamp(38px,3.472222vw,60px)]
              border-l-[3px]
              border-[#E0BE3D]
              bg-[#F7F7F7]
              px-[clamp(18px,2.083333vw,36px)]
              py-[clamp(18px,1.736111vw,30px)]
            "
          >
            <Typography
              as="p"
              variant="sectionBodyDark"
              className="
                !m-0
                !text-[clamp(14px,1.041667vw,18px)]
                !font-medium
                !leading-[1.5]
                !text-black
              "
            >
              Explore PSFX Pro and learn more about its
              trading services.
            </Typography>
          </div>
        </div>
      </div>

      {/* Bottom grid line */}
      <div
        aria-hidden="true"
        className="
          absolute bottom-0
          left-[var(--blog-gutter)]
          right-[var(--blog-gutter)]
          bg-[#D7D7D7]
        "
        style={{
          height: "0.5px",
        }}
      />
    </article>
  );
}