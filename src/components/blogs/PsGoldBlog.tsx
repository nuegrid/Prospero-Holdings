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

export default function PsGoldBlog() {
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
              PS Gold
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

          {/* Divider */}
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
            Understanding Gold Trading: Markets,
            Opportunities and Risk
          </Typography>
        </div>

        {/* Main PS Gold image */}
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
            src="/images/blogs/ps-gold/ps-gold.jpg"
            alt="PS Gold gold trading and bullion services"
            fill
            loading="eager"
            quality={85}
            sizes="(max-width: 768px) 86vw, (max-width: 1728px) 67vw, 1160px"
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
            Gold has occupied a unique position in
            financial markets for centuries. It can be
            held as physical bullion, traded as a
            commodity or accessed through financial
            instruments.
          </BlogParagraph>

          <BlogParagraph>
            That diversity is one reason gold continues
            to attract investors and traders.
          </BlogParagraph>

          <BlogParagraph>
            However, understanding gold trading
            requires more than following daily price
            movements. Gold prices respond to several
            interconnected forces, including interest
            rates, currency movements, geopolitical
            uncertainty, investment flows and physical
            demand.
          </BlogParagraph>

          <BlogContentSection title="Why Gold Remains Important">
            <BlogParagraph>
              Gold differs from many other commodities
              because it serves multiple purposes.
            </BlogParagraph>

            <BlogParagraph>
              It is used in jewellery and technology,
              held as physical bullion and traded within
              global financial markets. The World Gold
              Council identifies investment, jewellery
              and technology as major sources of gold
              demand.
            </BlogParagraph>

            <BlogParagraph>
              Its long history as a store of value also
              means that gold can attract attention
              during periods of economic or geopolitical
              uncertainty.
            </BlogParagraph>

            <BlogParagraph>
              That does not mean prices always rise
              during uncertainty. Market conditions
              remain complex.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="What Influences Gold Prices?">
            <BlogParagraph>
              <strong className="font-medium text-black">
                Interest rates
              </strong>{" "}
              can influence gold because changes in
              yields affect the opportunity cost of
              holding an asset that does not generate
              conventional interest.
            </BlogParagraph>

            <BlogParagraph>
              <strong className="font-medium text-black">
                The US dollar
              </strong>{" "}
              is another major factor because
              international gold prices are generally
              quoted in dollars.
            </BlogParagraph>

            <BlogParagraph>
              <strong className="font-medium text-black">
                Geopolitical and economic uncertainty
              </strong>{" "}
              can affect investor behaviour and demand.
            </BlogParagraph>

            <BlogParagraph>
              <strong className="font-medium text-black">
                Market momentum and investment flows
              </strong>{" "}
              can also contribute to short-term price
              movements.
            </BlogParagraph>

            <BlogParagraph>
              No single indicator can reliably predict
              where gold prices will move next.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Physical Gold vs Financial Trading">
            <BlogParagraph>
              Owning physical gold and trading financial
              exposure to gold are different
              propositions.
            </BlogParagraph>

            <BlogParagraph>
              Physical bullion involves considerations
              such as storage, authenticity, insurance
              and resale.
            </BlogParagraph>

            <BlogParagraph>
              Financial-market exposure may involve
              instruments such as ETFs, futures, options
              or other products, depending on the market
              and provider. These instruments have
              different structures and risks.
            </BlogParagraph>

            <BlogParagraph>
              PS Gold&apos;s public website discusses
              gold and silver bullion, bars and coins,
              digital trading and related services.
            </BlogParagraph>

            <BlogParagraph>
              Understanding the instrument is therefore
              an important first step.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Risk Is Part of the Market">
            <BlogParagraph>
              Gold is sometimes described as a defensive
              asset, but that should never be interpreted
              as a guarantee of profit.
            </BlogParagraph>

            <BlogParagraph>
              Gold can experience significant price
              fluctuations. Market movements can
              accelerate in response to monetary-policy
              expectations, currency changes,
              geopolitical developments or shifts in
              investor sentiment.
            </BlogParagraph>

            <BlogParagraph>
              For traders, this makes risk management
              essential.
            </BlogParagraph>

            <BlogParagraph>
              Position sizing, leverage awareness,
              research and disciplined decision-making
              can all help participants approach market
              movements more thoughtfully.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Knowledge Before Action">
            <BlogParagraph>
              The gold market offers opportunities, but
              those opportunities exist alongside
              uncertainty.
            </BlogParagraph>

            <BlogParagraph>
              Rather than treating gold as a guaranteed
              route to returns, traders should understand
              the asset, study the factors influencing
              prices and consider the risks associated
              with their chosen method of exposure.
            </BlogParagraph>

            <BlogParagraph>
              For modern gold trading businesses, the
              combination of market access, information
              and education can help create a more
              informed trading environment.
            </BlogParagraph>

            <BlogParagraph>
              The most important starting point is not
              predicting the next price—it is
              understanding the market.
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
              Explore PS Gold&apos;s gold and bullion
              services to learn more.
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