import {
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

import Typography from "@/ui/Typography";

const contactDetails = [
  {
    label: "Email",
    value: "info@prospero.ae",
    href: "mailto:info@prospero.ae",
    icon: LuMail,
    openInNewTab: false,
  },
  {
    label: "Phone",
    value: "+971 4 568 9506",
    href: "tel:+97145689506",
    icon: LuPhone,
    openInNewTab: false,
  },
  {
    label: "Address",
    value:
      "Tower Plaza Hotel & Office Tower, Suite No: 2003, 20th Floor, Sheikh Zayed Road, Dubai.",
    href: "https://www.google.com/maps/search/?api=1&query=Tower+Plaza+Hotel+and+Office+Tower+Suite+2003+20th+Floor+Sheikh+Zayed+Road+Dubai",
    icon: LuMapPin,
    openInNewTab: true,
  },
];

export default function ContactDetails() {
  return (
    <address
      className="
        flex w-full max-w-[540px]
        flex-col
        gap-[clamp(12px,0.925926vw,16px)]
        not-italic
      "
    >
      {contactDetails.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target={
              item.openInNewTab
                ? "_blank"
                : undefined
            }
            rel={
              item.openInNewTab
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={`${item.label}: ${item.value}`}
            className="
              group flex items-start
              gap-[clamp(12px,0.925926vw,16px)]
              text-[#676767]
              transition-colors duration-300
              hover:text-black
              focus-visible:outline-none
              focus-visible:text-black
            "
          >
            <Icon
              aria-hidden="true"
              strokeWidth={1.5}
              className="
                mt-[clamp(3px,0.289352vw,5px)]
                h-[clamp(17px,1.157407vw,20px)]
                w-[clamp(17px,1.157407vw,20px)]
                shrink-0
                text-current
                transition-colors duration-300
                group-hover:text-[#E0BE3D]
              "
            />

            <Typography
              as="span"
              variant="sectionBodyDark"
              className="
                transition-colors duration-300
                group-hover:!text-black
                group-focus-visible:!text-black
              "
            >
              {item.value}
            </Typography>
          </a>
        );
      })}
    </address>
  );
}