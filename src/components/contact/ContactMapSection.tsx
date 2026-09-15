import Image from "next/image";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";

export default function ContactMapSection() {
  return (
    <section
      aria-label="Our global presence"
      className="
        relative w-full
        overflow-hidden
        bg-white
      "
    >
      <div
        className="
          relative mx-auto
          h-[clamp(320px,34.143519vw,590px)]
          w-full max-w-[1728px]
          overflow-hidden
          bg-white

          max-md:h-[260px]
        "
      >
        {/* Grid lines */}
        <GridLines
          thickness={0.5}
          color="#E4E4E4"
          zIndex={0}
          verticalLines={[
            {
              left: "7.465278%",
              className: "!left-5 md:!left-[7.465278%]",
            },
            {
              right: "7.465278%",
              className: "!right-5 md:!right-[7.465278%]",
            },
          ]}
          horizontalLines={[
            {
              top: "12%",
              left: "7.465278%",
              right: "7.465278%",
              className: "!left-5 !right-5 md:!left-[7.465278%] md:!right-[7.465278%]",
            },
          ]}
        />

        {/* World map */}
        <ScrollReveal
          delay={80}
          distance={12}
          className="
            absolute
            left-5 right-5
            md:left-[11.111111%]
            md:right-[11.111111%]
            top-[14.75%]
            bottom-[6%]
            z-10
          "
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/contact/world-map.svg"
              alt="Map showing Prospero Holding global presence"
              fill
              sizes="(max-width: 768px) 88vw, (max-width: 1728px) 78vw, 1344px"
              className="
                object-contain
                object-center
              "
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}