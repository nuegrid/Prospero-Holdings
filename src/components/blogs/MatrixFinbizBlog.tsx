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

export default function MatrixFinbizBlog() {
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

      {/* Content */}
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
              Matrix Finbiz
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
            Matrix Finbiz Expands Its Financial
            Services Footprint With a Microfinance
            Focus
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
            src="/images/blogs/matrix-finbiz/matrix-finbiz.jpg"
            alt="Matrix Finbiz financial services and microfinance"
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
            Access to appropriate finance can make a
            meaningful difference to households,
            entrepreneurs and small businesses.
          </BlogParagraph>

          <BlogParagraph>
            For a small enterprise, credit can support
            working capital. For an agricultural
            borrower, it can help address seasonal
            requirements. For self-employed
            professionals, financing can provide access
            to capital when conventional options may
            not align with their circumstances.
          </BlogParagraph>

          <BlogParagraph>
            This is the wider economic role played by
            microfinance and accessible lending.
          </BlogParagraph>

          <BlogParagraph>
            <strong className="font-medium text-black">
              Matrix Finbiz
            </strong>{" "}
            is expanding its financial-services presence
            with a focus that includes microfinance and
            lending solutions. Its public website lists
            microfinance loans alongside agricultural,
            self-employed and personal lending products.
          </BlogParagraph>

          <BlogContentSection title="Why Microfinance Matters">
            <BlogParagraph>
              Microfinance forms an important part of
              India&apos;s wider financial-inclusion
              landscape.
            </BlogParagraph>

            <BlogParagraph>
              The sector is designed to extend formal
              financial services to customers who may
              have limited access to conventional
              banking products.
            </BlogParagraph>

            <BlogParagraph>
              The Reserve Bank of India has established
              a regulatory framework for microfinance
              lending applicable to relevant regulated
              entities, emphasising responsible lending
              practices and customer protection.
            </BlogParagraph>

            <BlogParagraph>
              This makes microfinance more than simply
              a lending category. It is part of a
              broader effort to connect underserved
              segments with formal financial services.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Responsible Lending Is Essential">
            <BlogParagraph>
              Access to credit must be accompanied by
              transparency.
            </BlogParagraph>

            <BlogParagraph>
              Borrowers need to understand the terms,
              obligations and costs associated with
              financial products before making
              decisions.
            </BlogParagraph>

            <BlogParagraph>
              Matrix Finbiz&apos;s public website
              includes compliance-related resources
              covering areas such as interest-rate
              policy, key-fact information, customer
              education and recovery practices.
            </BlogParagraph>

            <BlogParagraph>
              Such elements are important in building a
              responsible relationship between lender
              and borrower.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Serving Different Financial Requirements">
            <BlogParagraph>
              Matrix Finbiz publicly identifies several
              lending categories.
            </BlogParagraph>

            <BlogParagraph>
              Its microfinance offering is described as
              serving women borrowers, self-help groups
              and nano businesses. The company also
              identifies agricultural financing,
              self-employed loans and personal loans
              among its services.
            </BlogParagraph>

            <BlogParagraph>
              These categories reflect the fact that
              financial requirements vary considerably.
            </BlogParagraph>

            <BlogParagraph>
              A farmer, small entrepreneur and
              independent professional may each need
              different forms of financing based on
              their circumstances.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Growth Through Reach">
            <BlogParagraph>
              The client brief positions Matrix
              Finbiz&apos;s latest development as an
              expansion into the microfinance/NBFC space
              and states that the business has more than
              20 branches across India.
            </BlogParagraph>

            <BlogParagraph>
              A wider branch presence can increase the
              ability to reach customers in different
              markets, but it also brings greater
              operational responsibility.
            </BlogParagraph>

            <BlogParagraph>
              Consistency, customer service, compliance
              and responsible processes become
              increasingly important as a
              financial-services organisation expands
              its footprint.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Looking Ahead">
            <BlogParagraph>
              India&apos;s financial-services landscape
              continues to evolve around accessibility,
              formalisation and technology.
            </BlogParagraph>

            <BlogParagraph>
              For organisations operating in
              microfinance and related lending, the
              opportunity is significant—but so is the
              responsibility to ensure that financial
              access remains transparent and
              appropriately managed.
            </BlogParagraph>

            <BlogParagraph>
              Matrix Finbiz&apos;s expansion can be
              viewed within this wider
              financial-inclusion story.
            </BlogParagraph>

            <BlogParagraph>
              Its next stage of growth will ultimately
              be measured not only through geographic
              reach, but through the quality and
              responsibility of the financial services
              delivered to customers.
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
              Explore Matrix Finbiz&apos;s financial
              solutions and lending services.
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
              Matrix Finbiz&apos;s website publicly
              identifies its lending and microfinance
              offerings and provides compliance-related
              information. The{" "}
              <strong className="font-medium text-black">
                20+ branch figure and new-venture
                announcement are client-supplied
              </strong>{" "}
              and should be confirmed. The exact legal
              entity, RBI registration/category, branch
              count and launch details should be
              verified before publication.
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