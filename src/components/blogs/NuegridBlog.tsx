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

type BlogImageProps = {
  src: string;
  alt: string;
  primary?: boolean;
};

function BlogImage({
  src,
  alt,
  primary = false,
}: BlogImageProps) {
  return (
    <div
      className={`
        group relative
        w-full overflow-hidden
        border border-[#D7D7D7]
        bg-[#EEEEEE]

        ${
          primary
            ? `
              mt-[clamp(28px,2.314815vw,40px)]
              aspect-[1400/660]

              max-md:aspect-[16/10]
            `
            : `
              my-[clamp(40px,4.050926vw,70px)]
              aspect-[16/8]

              max-md:aspect-[16/10]
            `
        }
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading={
          primary
            ? "eager"
            : "lazy"
        }
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
  );
}

export default function NuegridBlog() {
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
              NueGrid Solutions
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
            Product Launch
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
            NueGrid Expands Its Technology Portfolio
            With NueBits CRM
          </Typography>
        </div>

        {/* Primary image */}
        <BlogImage
          src="/images/blogs/nuegrid/nuebits-01.jpg"
          alt="NueGrid NueBits Broker and Sales CRM"
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
            Customer information is valuable only when
            businesses can organise and use it
            effectively.
          </BlogParagraph>

          <BlogParagraph>
            As companies grow, customer and sales
            information can become scattered across
            spreadsheets, email, messaging platforms
            and disconnected systems. This can make it
            difficult for teams to understand the
            status of relationships, follow up
            consistently and maintain visibility across
            operations.
          </BlogParagraph>

          <BlogParagraph>
            CRM technology exists to solve that
            organisational challenge.
          </BlogParagraph>

          <BlogParagraph>
            <strong className="font-medium text-black">
              NueGrid
            </strong>
            , a fintech-focused technology company,
            identifies CRM development among its
            technology offerings alongside ERP,
            financial automation, API integration and
            other digital solutions.
          </BlogParagraph>

          <BlogParagraph>
            Its latest direction through{" "}
            <strong className="font-medium text-black">
              NueBits
            </strong>{" "}
            focuses on two CRM solutions:{" "}
            <strong className="font-medium text-black">
              NueBits Broker CRM
            </strong>{" "}
            and{" "}
            <strong className="font-medium text-black">
              NueBits Sales CRM
            </strong>
            .
          </BlogParagraph>

          <BlogContentSection title="Why Businesses Need Specialised CRM">
            <BlogParagraph>
              Not every business manages customers in
              the same way.
            </BlogParagraph>

            <BlogParagraph>
              A sales organisation may need to track
              leads, customer interactions and
              opportunities. A brokerage operates
              within a more specialised environment
              where client relationships and operational
              processes are closely connected.
            </BlogParagraph>

            <BlogParagraph>
              A CRM designed around those different
              workflows can be more relevant than a
              generic system.
            </BlogParagraph>

            <BlogParagraph>
              The objective is not simply to store
              customer data. It is to make information
              more organised, accessible and useful to
              the teams working with it.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="The Broker CRM Perspective">
            <BlogParagraph>
              Brokerages operate in a
              relationship-driven environment.
            </BlogParagraph>

            <BlogParagraph>
              They need visibility into prospective and
              existing clients while managing multiple
              stages of the customer journey.
            </BlogParagraph>

            <BlogParagraph>
              A broker-focused CRM can provide a
              structured foundation for organising
              these relationships and associated
              business processes.
            </BlogParagraph>

            <BlogParagraph>
              NueGrid&apos;s existing public portfolio
              includes financial CRM development and a
              forex broker CRM and app project,
              demonstrating its experience in building
              technology for financial-services
              businesses.
            </BlogParagraph>
          </BlogContentSection>

          {/* Secondary image */}
          <BlogImage
            src="/images/blogs/nuegrid/nuebits-02.jpg"
            alt="NueBits specialised CRM software"
          />

          <BlogContentSection title="A Sales CRM for Broader Business Needs">
            <BlogParagraph>
              Sales teams face a different but equally
              important challenge: maintaining
              visibility across leads and customer
              interactions.
            </BlogParagraph>

            <BlogParagraph>
              When information is fragmented,
              opportunities can be missed and follow-ups
              can become inconsistent.
            </BlogParagraph>

            <BlogParagraph>
              A dedicated sales CRM provides a
              centralised environment for managing
              customer and sales activity.
            </BlogParagraph>

            <BlogParagraph>
              This can help businesses move from simply
              collecting customer information toward
              building a more structured sales process.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Part of the NueGrid Technology Direction">
            <BlogParagraph>
              The NueBits launch also sits within
              NueGrid&apos;s wider technology portfolio.
            </BlogParagraph>

            <BlogParagraph>
              The company publicly highlights solutions
              across fintech ERP, trading platforms,
              RegTech, APIs, investment technology,
              payment systems and custom financial
              software.
            </BlogParagraph>

            <BlogParagraph>
              This broader focus reflects an important
              direction in business technology:
              organisations increasingly need connected
              systems rather than isolated applications.
            </BlogParagraph>

            <BlogParagraph>
              CRM can become one component of that wider
              digital infrastructure.
            </BlogParagraph>
          </BlogContentSection>

          <BlogContentSection title="Turning Information Into Operational Value">
            <BlogParagraph>
              The value of CRM ultimately comes down to
              usability.
            </BlogParagraph>

            <BlogParagraph>
              Businesses need systems that reflect how
              their teams actually work, rather than
              adding another layer of complexity.
            </BlogParagraph>

            <BlogParagraph>
              With NueBits Broker CRM and Sales CRM,
              NueGrid is expanding its focus on
              specialised business technology and
              addressing two distinct
              customer-management environments.
            </BlogParagraph>

            <BlogParagraph>
              The launch represents another step in
              building technology around practical
              business requirements.
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
              Explore NueGrid and discover the NueBits
              CRM solutions.
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