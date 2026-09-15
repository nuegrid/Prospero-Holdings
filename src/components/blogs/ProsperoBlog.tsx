"use client";

import type {
  CSSProperties,
  ReactNode,
} from "react";
import Image from "next/image";

import GridLines from "@/ui/GridLines";
import Typography from "@/ui/Typography";

const prosperoImages = [
  {
    id: 1,
    src: "/images/blogs/prospero/prospero-01.jpg",
    alt: "Prospero Investment Group Khalifa project",
  },
  {
    id: 2,
    src: "/images/blogs/prospero/prospero-02.jpg",
    alt: "Prospero Investment Group entertainment investment",
  },
  {
    id: 3,
    src: "/images/blogs/prospero/prospero-03.jpg",
    alt: "Khalifa Malayalam cinema project",
  },
];

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

export default function ProsperoBlog() {
  return (
    <article
      style={
        {
          "--blog-gutter": "14.930556%",
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
          px-[clamp(16px,1.851852vw,32px)]
          pb-[clamp(70px,6.944444vw,120px)]
          pt-[clamp(70px,5.208333vw,90px)]

          max-md:px-[16px]
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
              Prospero
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
            dateTime="2026-09-09"
            className="
              whitespace-nowrap
              font-[family-name:var(--font-geist-sans)]
              text-[clamp(10px,0.694444vw,12px)]
              font-normal leading-none
              tracking-[-0.015em]
              text-[#777777]
            "
          >
            9 September 2026
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
            Prospero Investment Group Enters Malayalam
            Cinema With{" "}
            <em className="font-[inherit]">
              Khalifa
            </em>
          </Typography>
        </div>

        {/* Autoplay video */}
        <div
          className="
            relative
            mt-[clamp(28px,2.314815vw,40px)]
            aspect-[1400/660]
            w-full overflow-hidden
            border border-[#D7D7D7]
            bg-black

            max-md:aspect-[16/10]
          "
        >
          <video
            autoPlay
            muted
            controls
            playsInline
            preload="metadata"
            poster="/images/blogs/prospero/prospero-01.jpg"
            aria-label="Khalifa Malayalam cinema investment video"
            className="
              absolute inset-0
              h-full w-full
              object-cover object-center
            "
          >
            <source
              src="/video/blogs/prospero/khalifa.mp4"
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

        {/* Article content */}
        <div
          className="
            mt-[clamp(32px,2.893519vw,50px)]
            w-full
          "
        >
          <BlogParagraph>
            Investment diversification is often
            associated with moving across financial
            sectors and asset classes. But for an
            investment group, diversification can also
            mean recognising opportunities in
            industries where business, culture and
            consumer demand intersect.
          </BlogParagraph>

          <BlogParagraph>
            For{" "}
            <strong className="font-medium text-black">
              Prospero Investment Group
            </strong>
            , its reported investment in the Malayalam
            film{" "}
            <em className="text-black">
              Khalifa
            </em>{" "}
            represents an entry into one of
            India&apos;s most dynamic regional
            entertainment industries.
          </BlogParagraph>

          <BlogParagraph>
            The film features{" "}
            <strong className="font-medium text-black">
              Prithviraj Sukumaran
            </strong>{" "}
            in the lead role, with prominent Malayalam
            actors including{" "}
            <strong className="font-medium text-black">
              Mohanlal and Tovino Thomas
            </strong>{" "}
            among the credited cast. Vysakh serves as
            director and Jinu Abraham as writer and
            co-producer.
          </BlogParagraph>

          <BlogParagraph>
            For Prospero, however, the more significant
            story is the investment perspective behind
            the move.
          </BlogParagraph>

          <BlogContentSection title="Looking Beyond Traditional Investment">
            <BlogParagraph>
              Prospero Investment Group publicly
              presents itself as an investment-focused
              business with an emphasis on identifying
              opportunities and diversification. Cinema
              introduces a different investment
              environment.
            </BlogParagraph>

            <BlogParagraph>
              A film combines creative development with
              commercial execution. Audience response,
              talent, production, distribution,
              marketing and release strategy can all
              influence its commercial performance.
            </BlogParagraph>

            <BlogParagraph>
              This makes entertainment fundamentally
              different from many conventional
              investment categories, while also creating
              its own form of opportunity.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Why Malayalam Cinema?">
            <BlogParagraph>
              Malayalam cinema has developed an
              increasingly visible position within
              India&apos;s wider entertainment
              industry.
            </BlogParagraph>

            <BlogParagraph>
              Its audience extends beyond Kerala,
              including a substantial global
              Malayalam-speaking community. At the same
              time, successful Malayalam productions
              increasingly attract audiences across
              linguistic markets.
            </BlogParagraph>

            <BlogParagraph>
              This combination of cultural relevance
              and commercial reach makes the sector an
              interesting environment for investors
              willing to look beyond traditional
              industries.
            </BlogParagraph>
          </BlogContentSection>

          {/* Image gallery */}
          <div
            className="
              my-[clamp(40px,4.050926vw,70px)]
              grid grid-cols-3
              gap-[clamp(12px,1.157407vw,20px)]

              max-md:grid-cols-1
            "
          >
            {prosperoImages.map((image) => (
              <figure
                key={image.id}
                className="
                  group relative
                  aspect-[4/3]
                  overflow-hidden
                  border border-[#D7D7D7]
                  bg-[#EEEEEE]
                "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={85}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 86vw, (max-width: 1728px) 22vw, 375px"
                  className="
                    object-cover object-center
                    transition-transform
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    group-hover:scale-[1.03]
                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                />
              </figure>
            ))}
          </div>

          <BlogContentSection
            title={
              <>
                <em>Khalifa</em> and the Investment
                Perspective
              </>
            }
          >
            <BlogParagraph>
              <em className="text-black">
                Khalifa
              </em>{" "}
              brings together established talent and a
              large-scale commercial film proposition.
              Its publicly available synopsis places
              the story within an action-crime setting
              involving revenge, influence and gold
              smuggling.
            </BlogParagraph>

            <BlogParagraph>
              From an investment perspective, the film
              illustrates how entertainment assets
              depend on multiple variables. Unlike an
              investment where performance can be
              assessed primarily through conventional
              financial metrics, cinema involves
              creative execution and audience behaviour
              alongside financial planning.
            </BlogParagraph>

            <BlogParagraph>
              That makes due diligence and portfolio
              diversification particularly relevant.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Diversification as a Growth Strategy">
            <BlogParagraph>
              Entering cinema does not necessarily
              represent a departure from an investment
              group&apos;s broader philosophy. Instead,
              it can demonstrate a willingness to
              explore sectors with different demand
              drivers and forms of value creation.
            </BlogParagraph>

            <BlogParagraph>
              Entertainment is especially distinctive
              because commercial value and cultural
              influence can coexist. A film can become
              an intellectual property asset, a
              commercial product and a cultural
              experience simultaneously.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="A New Chapter for Prospero">
            <BlogParagraph>
              Prospero&apos;s reported participation in{" "}
              <em className="text-black">
                Khalifa
              </em>{" "}
              marks an interesting development in the
              group&apos;s investment journey.
            </BlogParagraph>

            <BlogParagraph>
              Whether cinema becomes a larger component
              of its future portfolio remains to be
              seen. What the move demonstrates is an
              openness to opportunities beyond
              conventional investment categories.
            </BlogParagraph>

            <BlogParagraph>
              For Prospero, the Malayalam film industry
              offers a new environment in which
              investment, creativity and culture meet.
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
              Follow Prospero Investment Group for
              future developments across its investment
              activities.
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