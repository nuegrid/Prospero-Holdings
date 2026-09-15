import Typography from "@/ui/Typography";

type BlogMetaProps = {
  company: string;
  category: string;
  date: string;
  dateTime: string;
};

export default function BlogMeta({
  company,
  category,
  date,
  dateTime,
}: BlogMetaProps) {
  return (
    <div
      className="
        flex flex-wrap
        items-center
        gap-[clamp(8px,0.694444vw,12px)]
      "
    >
      {/* Company label */}
      <span
        className="
          inline-flex min-h-[28px]
          shrink-0 items-center
          justify-center
          bg-[#E0BE3D]
          px-[clamp(11px,0.925926vw,16px)]
          py-[clamp(6px,0.462963vw,8px)]
        "
      >
        <Typography
          as="span"
          variant="sectionLabelDark"
          className="
            whitespace-nowrap
            !m-0
            !text-[clamp(11px,0.810185vw,14px)]
            !font-medium
            !leading-none
            !tracking-[-0.02em]
            !text-black
          "
        >
          {company}
        </Typography>
      </span>

      {/* Category */}
      <Typography
        as="span"
        variant="sectionLabelDark"
        className="
          whitespace-nowrap
          !m-0
          !text-[clamp(11px,0.752315vw,13px)]
          !font-normal
          !leading-none
          !text-[#505050]
        "
      >
        {category}
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
        dateTime={dateTime}
        className="
          whitespace-nowrap
          font-[family-name:var(--font-geist-sans)]
          text-[clamp(10px,0.694444vw,12px)]
          font-normal leading-none
          tracking-[-0.015em]
          text-[#777777]
        "
      >
        {date}
      </time>
    </div>
  );
}