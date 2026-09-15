"use client";

import type {
  CSSProperties,
  ReactNode,
} from "react";
import Image from "next/image";

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

export default function PsfxInternationalBlog() {
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
              PSFX International
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
            Brand Article
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
            dateTime="2026-09-10"
            className="
              whitespace-nowrap
              font-[family-name:var(--font-geist-sans)]
              text-[clamp(10px,0.694444vw,12px)]
              font-normal leading-none
              tracking-[-0.015em]
              text-[#777777]
            "
          >
            10 September 2026
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
            Beyond Borders: Turning Business
            Opportunities Into Market Presence
          </Typography>
        </div>

        {/* Main image */}
        <div
          className="
            group relative
            mt-[clamp(28px,2.314815vw,40px)]
            aspect-[1400/660]
            w-full overflow-hidden
            border border-[#D7D7D7]
            bg-[#EEEEEE]

            max-md:aspect-[16/10]
          "
        >
          <Image
            src="/images/blogs/psfx-international/psfx-international.jpg"
            alt="PSFX International business facilitation services"
            fill
            loading="eager"
            quality={85}
            sizes="
              (max-width: 767px) calc(100vw - 80px),
              (max-width: 1023px) calc(90vw - 48px),
              (max-width: 1728px) 67vw,
              1160px
            "
            className="
              object-cover object-center
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover:scale-[1.025]

              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          />
        </div>

        {/* Article content */}
        <div
          className="
            mt-[clamp(32px,2.893519vw,50px)]
            w-full
          "
        >
          <BlogParagraph>
            Starting or expanding a business in a new
            market is rarely just about identifying an
            opportunity. The more difficult questions
            often come afterwards: Who should you speak
            to? How do you navigate the local business
            environment? Which processes need to be
            completed? Where can the right connections
            be found? And how can an international
            business establish itself effectively?
          </BlogParagraph>

          <BlogParagraph>
            This is where{" "}
            <strong className="font-medium text-black">
              business facilitation
            </strong>{" "}
            becomes valuable.
          </BlogParagraph>

          <BlogParagraph>
            For entrepreneurs, investors and companies
            exploring new markets, the right
            facilitation partner can help bridge the
            gap between an idea and its practical
            execution. Rather than navigating every
            process independently, businesses can
            access structured guidance, relevant
            connections and support tailored to their
            objectives.
          </BlogParagraph>

          <BlogParagraph>
            For companies looking toward the UAE and
            international markets, this role becomes
            particularly relevant.
          </BlogParagraph>

          <BlogContentSection title="Making Market Entry More Practical">
            <BlogParagraph>
              The UAE has developed into a major centre
              for international business,
              entrepreneurship, investment and trade.
              Its strategic location and globally
              connected economy continue to attract
              businesses looking to establish or expand
              their presence.
            </BlogParagraph>

            <BlogParagraph>
              But entering a new market requires more
              than choosing a location. Businesses need
              to understand the environment in which
              they intend to operate, identify
              appropriate opportunities and establish
              relationships with the people and
              organisations that can support their
              objectives.
            </BlogParagraph>

            <BlogParagraph>
              Business facilitation helps bring these
              different requirements together.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="From Introductions to Execution">
            <BlogParagraph>
              One of the most valuable aspects of
              facilitation is the ability to connect
              businesses with the right opportunities
              and stakeholders. Depending on the nature
              of a client&apos;s requirement, this can
              involve identifying potential business
              relationships, supporting market-entry
              processes, coordinating with relevant
              service providers or helping entrepreneurs
              navigate the practical stages involved in
              establishing a business presence.
            </BlogParagraph>

            <BlogParagraph>
              The objective is not simply to provide
              information.
            </BlogParagraph>

            <BlogParagraph>
              It is to make the process more structured
              and easier to navigate.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Why Local Understanding Matters">
            <BlogParagraph>
              International expansion can create
              challenges that are difficult to
              anticipate from outside the market.
            </BlogParagraph>

            <BlogParagraph>
              Business practices, documentation,
              regulatory processes, commercial
              expectations and professional networks
              can differ significantly from one market
              to another.
            </BlogParagraph>

            <BlogParagraph>
              Local understanding can therefore become
              an important advantage.
            </BlogParagraph>

            <BlogParagraph>
              A facilitation partner can help businesses
              approach these differences with greater
              clarity while allowing entrepreneurs and
              management teams to focus on their core
              commercial objectives.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Creating Connections That Matter">
            <BlogParagraph>
              Business growth is ultimately driven by
              relationships.
            </BlogParagraph>

            <BlogParagraph>
              A company may have a strong product or
              service, but entering a new market often
              requires distributors, suppliers,
              investors, strategic partners,
              professional advisors and customers.
            </BlogParagraph>

            <BlogParagraph>
              Building those relationships takes time.
            </BlogParagraph>

            <BlogParagraph>
              Business facilitation can help create
              pathways to relevant networks while
              supporting businesses as they evaluate
              opportunities and determine which
              relationships make strategic sense.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Supporting Businesses Beyond Setup">
            <BlogParagraph>
              Successful market entry is not the end of
              the journey.
            </BlogParagraph>

            <BlogParagraph>
              Once a business is established, the next
              challenge is building sustainable
              commercial activity—developing
              relationships, identifying opportunities
              and adapting to the market.
            </BlogParagraph>

            <BlogParagraph>
              This makes business facilitation broader
              than administrative support. At its best,
              it becomes a bridge between{" "}
              <strong className="font-medium text-black">
                business ambition and market execution
              </strong>
              .
            </BlogParagraph>

            <BlogParagraph>
              For entrepreneurs and organisations
              looking beyond their existing markets,
              the right support can reduce unnecessary
              complexity and create a clearer path
              forward.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="A Practical Approach to Business Growth">
            <BlogParagraph>
              PSFX International&apos;s business
              facilitation focus reflects the importance
              of having the right support when
              navigating new commercial environments.
            </BlogParagraph>

            <BlogParagraph>
              Whether the objective is exploring a
              market, establishing a business presence,
              developing connections or identifying new
              opportunities, successful expansion begins
              with understanding the landscape and
              having the right people around the
              process.
            </BlogParagraph>

            <BlogParagraph>
              In an increasingly connected business
              world, borders do not necessarily have to
              be barriers. With the right preparation,
              knowledge and facilitation, they can
              become gateways to new possibilities.
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
              Explore PSFX International&apos;s
              business facilitation services and
              discover how your next business
              opportunity can move from possibility to
              execution.
            </Typography>
          </div>

          {/* Editorial notes */}
          <div
            className="
              mt-[clamp(30px,2.777778vw,48px)]
              border border-[#D7D7D7]
              bg-white
              p-[clamp(18px,2.083333vw,36px)]
            "
          >
            <Typography
              as="h2"
              variant="sectionBodyDark"
              className="
                !m-0
                !text-[clamp(18px,1.273148vw,22px)]
                !font-medium
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-black
              "
            >
              Editorial Notes
            </Typography>

            <Typography
              as="p"
              variant="sectionBodyDark"
              className="
                mt-[clamp(18px,1.388889vw,24px)]
                !mb-0
                !text-[clamp(13px,0.925926vw,16px)]
                !font-normal
                !leading-[1.55]
                !tracking-[-0.018em]
                !text-[#707070]
              "
            >
              The article has deliberately avoided
              making specific claims about licences,
              government approvals, guaranteed
              market-entry outcomes, named partnerships,
              investment facilitation or specific
              services that could not be independently
              verified from accessible public material.
              The company&apos;s exact service categories
              should be aligned with the final website
              content before publication.
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