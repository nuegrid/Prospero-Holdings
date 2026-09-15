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

export default function DesertCastleBlog() {
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
              Desert Castle
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
            Market Insight
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
            Dubai Real Estate: Exploring the
            Opportunities Taking Shape
          </Typography>
        </div>

        {/* Desert Castle image */}
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
            src="/images/blogs/desert-castle/desert-castle.jpg"
            alt="Dubai real estate opportunities with Desert Castle"
            fill
            loading="eager"
            decoding="async"
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
            Dubai&apos;s property market has developed
            into a sophisticated ecosystem shaped by
            more than individual developments.
          </BlogParagraph>

          <BlogParagraph>
            Infrastructure, population growth, tourism,
            business activity and urban expansion all
            influence the city&apos;s real estate
            landscape.
          </BlogParagraph>

          <BlogParagraph>
            Recent figures demonstrate the scale of
            activity. Dubai Land Department reported{" "}
            <strong className="font-medium text-black">
              AED 252 billion in real estate
              transactions during the first quarter of
              2026
            </strong>
            , representing a 31% year-on-year increase
            in transaction value.
          </BlogParagraph>

          <BlogParagraph>
            For buyers and investors, however, a
            growing market does not mean every property
            offers the same opportunity.
          </BlogParagraph>

          <BlogContentSection title="Looking Beyond Market Headlines">
            <BlogParagraph>
              City-wide figures provide valuable
              context, but property decisions are
              ultimately made at project and location
              level.
            </BlogParagraph>

            <BlogParagraph>
              Connectivity, surrounding infrastructure,
              developer reputation, project quality,
              community facilities and intended use can
              all influence a property&apos;s
              attractiveness.
            </BlogParagraph>

            <BlogParagraph>
              Two developments within the same part of
              Dubai may therefore have very different
              investment characteristics.
            </BlogParagraph>

            <BlogParagraph>
              Understanding those differences is
              essential.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Infrastructure and Connectivity">
            <BlogParagraph>
              Infrastructure is one of the most
              important forces shaping real estate
              demand.
            </BlogParagraph>

            <BlogParagraph>
              Roads, public transport, schools, retail,
              hospitality and commercial centres can
              influence how attractive an area becomes
              to residents and businesses.
            </BlogParagraph>

            <BlogParagraph>
              Dubai&apos;s continuing development means
              that today&apos;s peripheral location may
              evolve significantly as new infrastructure
              and communities take shape.
            </BlogParagraph>

            <BlogParagraph>
              For buyers, the important question is not
              simply whether an area is popular today,
              but what fundamentals could support
              demand over time.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Residential and Commercial Opportunities">
            <BlogParagraph>
              Dubai offers opportunities across
              residential and commercial property.
            </BlogParagraph>

            <BlogParagraph>
              Residential demand can be influenced by
              population growth, employment, lifestyle
              preferences and household formation.
            </BlogParagraph>

            <BlogParagraph>
              Commercial property responds to business
              activity, office requirements, logistics,
              retail and broader economic conditions.
            </BlogParagraph>

            <BlogParagraph>
              Each category involves different
              considerations.
            </BlogParagraph>

            <BlogParagraph>
              A home purchase, income-generating
              property and commercial investment should
              not be evaluated using the same
              assumptions.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Due Diligence Still Matters">
            <BlogParagraph>
              Strong market conditions do not eliminate
              investment risk.
            </BlogParagraph>

            <BlogParagraph>
              Before committing to a property,
              prospective buyers should examine the
              developer, project specifications,
              location, payment structure, service
              charges where applicable and relevant
              legal documentation.
            </BlogParagraph>

            <BlogParagraph>
              Expectations about rental income or
              future appreciation should also be
              assessed carefully rather than assumed.
            </BlogParagraph>

            <BlogParagraph>
              The quality of the individual project
              remains important even when the wider
              market is performing strongly.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="What Could Shape the Next Phase?">
            <BlogParagraph>
              Dubai&apos;s future property market will
              depend on several factors, including
              economic growth, population trends,
              international investment, interest rates
              and the balance between property supply
              and demand.
            </BlogParagraph>

            <BlogParagraph>
              Some developments may benefit from these
              trends. Others may face different
              conditions.
            </BlogParagraph>

            <BlogParagraph>
              That distinction between{" "}
              <strong className="font-medium text-black">
                current market data and future
                possibility
              </strong>{" "}
              is important for anyone evaluating
              property.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="A More Informed Property Decision">
            <BlogParagraph>
              Dubai&apos;s real estate market offers a
              broad range of possibilities, but
              opportunity needs context.
            </BlogParagraph>

            <BlogParagraph>
              The strongest decisions begin with a
              clear objective, project-level research
              and proper due diligence.
            </BlogParagraph>

            <BlogParagraph>
              For Desert Castle, participating in this
              market means helping prospective buyers
              navigate a complex property
              environment—subject to its specific
              verified service offering.
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
              Explore Dubai property opportunities with
              Desert Castle.
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
          h-[0.5px]
          bg-[#D7D7D7]
        "
      />
    </article>
  );
}